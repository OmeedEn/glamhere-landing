import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const isUuid = (v: unknown): v is string =>
  typeof v === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);

const isDate = (v: string | null): v is string =>
  !!v && /^\d{4}-\d{2}-\d{2}$/.test(v);

// Returns the open (bookable) dates in [from, to] for a provider + service.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const providerId = searchParams.get("providerId");
  const serviceId = searchParams.get("serviceId");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!isUuid(providerId) || !isUuid(serviceId) || !isDate(from) || !isDate(to)) {
    return NextResponse.json({ days: [] });
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc("web_available_days", {
      p_provider_id: providerId,
      p_service_id: serviceId,
      p_from: from,
      p_to: to,
    });
    if (error) {
      console.error("web_available_days rpc failed", error);
      return NextResponse.json({ days: [] });
    }
    return NextResponse.json({ days: (data as string[]) ?? [] });
  } catch (e) {
    console.error("available-days route failed", e);
    return NextResponse.json({ days: [] });
  }
}
