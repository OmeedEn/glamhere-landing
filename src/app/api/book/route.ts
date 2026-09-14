import { NextResponse } from "next/server";
import { getSupabase, getServiceSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const isUuid = (v: unknown): v is string =>
  typeof v === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);

function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t ? t.slice(0, max) : null;
}

// Accept a plain YYYY-MM-DD date or null.
function dateStr(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(t) ? t : null;
}

// Accept "HH:MM" (24h) → normalized "HH:MM"; else null.
function timeStr(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const m = v.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return `${String(h).padStart(2, "0")}:${m[2]}`;
}

function addMinutes(hhmm: string, mins: number): string {
  const [h, m] = hhmm.split(":").map(Number);
  const total = Math.min(h * 60 + m + mins, 23 * 60 + 59);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(
    total % 60
  ).padStart(2, "0")}:00`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const customer_name = str(body.name, 120);
  const customer_email = str(body.email, 200)?.toLowerCase() ?? null;
  const customer_phone = str(body.phone, 40);
  const requested_service = str(body.requestedService, 300);

  if (!customer_name) {
    return NextResponse.json({ error: "Your name is required" }, { status: 400 });
  }
  if (!customer_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer_email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  const phone_digits = customer_phone ? customer_phone.replace(/\D/g, "") : "";
  if (phone_digits.length !== 10) {
    return NextResponse.json(
      { error: "A valid 10-digit phone number is required" },
      { status: 400 }
    );
  }

  const service_id = isUuid(body.serviceId) ? body.serviceId : null;
  const provider_id = isUuid(body.providerId) ? body.providerId : null;
  if (!service_id && !provider_id && !requested_service) {
    return NextResponse.json(
      { error: "Tell us which service or artist you'd like to book" },
      { status: 400 }
    );
  }

  const preferred_date = dateStr(body.preferredDate);
  const start_time = timeStr(body.startTime);

  // ── Try to place a real (pending) appointment on the provider's calendar ──
  // Only when we have a specific pro + service + exact date + exact time.
  let booked = false;
  let providerName = "";
  const canAttemptAppointment =
    provider_id && service_id && preferred_date && start_time;

  if (canAttemptAppointment) {
    const svc = getServiceSupabase();
    if (!svc) {
      // No service key configured — fall back to a lead (handled below).
      console.warn("SUPABASE_SERVICE_ROLE_KEY missing; skipping appointment creation");
    } else {
      // Authoritative service details (never trust client price/duration).
      const { data: service } = await svc
        .from("services")
        .select("id, provider_id, title, price, duration_minutes, is_active")
        .eq("id", service_id)
        .single();

      if (
        service &&
        service.is_active &&
        service.provider_id === provider_id &&
        service.duration_minutes > 0
      ) {
        const startFull = `${start_time}:00`;
        const endFull = addMinutes(start_time, service.duration_minutes);
        const price = Number(service.price);

        // The appointments table has a BEFORE INSERT trigger
        // (enforce_provider_booking_capacity) that validates the slot against
        // the provider's availability and capacity, raising SQLSTATE 23P01 with
        // a user-facing message. We let it be the gate and surface that message.
        const { error: apptError } = await svc.from("appointments").insert({
          client_id: null,
          provider_id,
          service_id,
          appointment_date: preferred_date,
          start_time: startFull,
          end_time: endFull,
          service_price: price,
          total_amount: price,
          status: "pending", // provider accepts in-app; inert to payment cron
          source_type: "website",
          client_notes: `Booked via website — ${customer_name}, ${phone_digits}, ${customer_email}`,
        });

        if (apptError) {
          if (apptError.code === "23P01") {
            // Availability/capacity rejection — let the customer pick another time.
            return NextResponse.json(
              { error: apptError.message || "That time isn't available. Please pick another." },
              { status: 409 }
            );
          }
          console.error("appointment insert failed", { provider_id, apptError });
          // Other errors: fall through to lead-only so the customer still gets through.
        } else {
          booked = true;
          providerName = service.title;
          // The app's own triggers on `appointments` create the provider
          // notification and enqueue the push — no manual notify needed here.
        }
      }
    }
  }

  // Always record the lead for admin visibility / triage.
  const supabase = getSupabase();
  const { error } = await supabase.from("booking_requests").insert({
    customer_name,
    customer_email,
    customer_phone: phone_digits,
    service_id,
    provider_id,
    requested_service,
    preferred_date,
    preferred_time: start_time ?? str(body.preferredTime, 60),
    city: str(body.city, 120),
    notes: str(body.notes, 2000),
    status: booked ? "scheduled" : "new",
    source: str(body.source, 60) ?? "website",
  });

  if (error && !booked) {
    console.error("booking_requests insert failed", { customer_email, error });
    return NextResponse.json(
      { error: "Failed to submit your request. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, booked, providerName });
}
