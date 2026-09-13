import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

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
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 }
    );
  }
  if (!customer_phone) {
    return NextResponse.json(
      { error: "A phone number is required" },
      { status: 400 }
    );
  }
  // Need at least some signal of what they want.
  const service_id = isUuid(body.serviceId) ? body.serviceId : null;
  const provider_id = isUuid(body.providerId) ? body.providerId : null;
  if (!service_id && !provider_id && !requested_service) {
    return NextResponse.json(
      { error: "Tell us which service or artist you'd like to book" },
      { status: 400 }
    );
  }

  const row = {
    customer_name,
    customer_email,
    customer_phone,
    service_id,
    provider_id,
    requested_service,
    preferred_date: dateStr(body.preferredDate),
    preferred_time: str(body.preferredTime, 60),
    alt_date: dateStr(body.altDate),
    city: str(body.city, 120),
    notes: str(body.notes, 2000),
    source: str(body.source, 60) ?? "website",
  };

  const supabase = getSupabase();
  const { error } = await supabase.from("booking_requests").insert(row);

  if (error) {
    console.error("booking_requests insert failed", { customer_email, error });
    return NextResponse.json(
      { error: "Failed to submit your request. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
