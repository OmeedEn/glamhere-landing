import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const isUuid = (v: unknown): v is string =>
  typeof v === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);

// Returns bookable start times ("HH:MM") for a provider+service on a date.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const providerId = searchParams.get("providerId");
  const serviceId = searchParams.get("serviceId");
  const date = searchParams.get("date");

  if (
    !isUuid(providerId) ||
    !isUuid(serviceId) ||
    !date ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date)
  ) {
    return NextResponse.json({ slots: [] });
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc("web_available_slots", {
      p_provider_id: providerId,
      p_service_id: serviceId,
      p_date: date,
    });
    if (error) {
      console.error("web_available_slots rpc failed", error);
      return NextResponse.json({ slots: [] });
    }
    return NextResponse.json({ slots: (data as string[]) ?? [] });
  } catch (e) {
    console.error("availability route failed", e);
    return NextResponse.json({ slots: [] });
  }
}
