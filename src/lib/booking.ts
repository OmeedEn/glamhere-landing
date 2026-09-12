import { getSupabase } from "./supabase";

export type BookableService = {
  id: string;
  title: string;
  price: number;
  durationMinutes: number;
  category: string | null;
};

export type BookableProvider = {
  id: string;
  name: string;
  username: string | null;
  city: string | null;
  avatarUrl: string | null;
  services: BookableService[];
};

// Placeholder/test services that real customers should never see on the site.
// Adjust here if legitimate services get filtered out.
const JUNK_TITLE = /\b(test|sample|concert|waterfall)\b/i;
// Prices in this open interval are test data ($0.01, $0.10, $1). A genuinely free
// service (price = 0, e.g. a consultation) is kept.
const isTestPrice = (price: number) => price > 0 && price < 5;

function displayName(p: {
  business_name: string | null;
  first_name: string | null;
  last_name: string | null;
  preferred_username: string | null;
}): string {
  const full = [p.first_name, p.last_name]
    .map((s) => (s ?? "").trim())
    .filter(Boolean)
    .join(" ");
  return (
    (p.business_name && p.business_name.trim()) ||
    full ||
    (p.preferred_username && p.preferred_username.trim()) ||
    "GlamHere Pro"
  );
}

type ServiceRow = {
  id: string;
  title: string;
  price: number | string;
  duration_minutes: number;
  category_id: string | null;
  provider_id: string | null;
  service_categories: { name: string | null } | null;
  profiles: {
    id: string;
    business_name: string | null;
    first_name: string | null;
    last_name: string | null;
    preferred_username: string | null;
    city: string | null;
    avatar_url: string | null;
    role: string | null;
  } | null;
};

/**
 * Fetch active, real (non-placeholder) services grouped by provider, using the
 * app's live catalog. Runs with the anon key server-side; reads are allowed by
 * the app's existing public-read RLS on services/profiles/service_categories.
 */
export async function getBookableProviders(): Promise<BookableProvider[]> {
  let rows: ServiceRow[];
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("services")
      .select(
        `id, title, price, duration_minutes, category_id, provider_id,
         service_categories ( name ),
         profiles!services_provider_id_fkey ( id, business_name, first_name, last_name, preferred_username, city, avatar_url, role )`
      )
      .eq("is_active", true);

    if (error) {
      console.error("getBookableProviders query failed", error);
      return [];
    }
    rows = (data ?? []) as unknown as ServiceRow[];
  } catch (e) {
    console.error("getBookableProviders failed", e);
    return [];
  }

  const byProvider = new Map<string, BookableProvider>();

  for (const row of rows) {
    const provider = row.profiles;
    if (!provider || provider.role !== "provider") continue;

    const price = Number(row.price);
    if (JUNK_TITLE.test(row.title) || isTestPrice(price)) continue;

    let entry = byProvider.get(provider.id);
    if (!entry) {
      entry = {
        id: provider.id,
        name: displayName(provider),
        username: provider.preferred_username?.trim() || null,
        city: provider.city?.trim() || null,
        avatarUrl: provider.avatar_url || null,
        services: [],
      };
      byProvider.set(provider.id, entry);
    }

    entry.services.push({
      id: row.id,
      title: row.title.trim(),
      price,
      durationMinutes: row.duration_minutes,
      category: row.service_categories?.name ?? null,
    });
  }

  const providers = [...byProvider.values()].filter((p) => p.services.length > 0);
  for (const p of providers) {
    p.services.sort((a, b) => a.price - b.price);
  }
  providers.sort((a, b) => a.name.localeCompare(b.name));
  return providers;
}
