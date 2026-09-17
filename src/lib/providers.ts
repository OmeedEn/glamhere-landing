import { getSupabase } from "./supabase";
import type { BookableProvider, BookableService } from "./booking";

export type ProviderPost = {
  id: string;
  src: string | null; // the media file (image or video)
  poster: string | null; // optional video poster (thumbnail)
  isVideo: boolean;
  likes: number;
  title: string | null;
};

export type ProviderProfile = {
  id: string;
  name: string;
  username: string | null;
  avatarUrl: string | null;
  bio: string | null;
  city: string | null;
  state: string | null;
  averageRating: number | null;
  totalRatings: number;
  followers: number;
  instagram: string | null;
  tiktok: string | null;
  website: string | null;
  services: BookableService[];
  posts: ProviderPost[];
};

// Placeholder/test services hidden from the public site (see booking.ts).
const JUNK_TITLE = /\b(test|sample|concert|waterfall)\b/i;
const isTestPrice = (price: number) => price > 0 && price < 5;

type ProfileRow = {
  id: string;
  business_name: string | null;
  first_name: string | null;
  last_name: string | null;
  preferred_username: string | null;
  avatar_url: string | null;
  bio: string | null;
  city: string | null;
  state: string | null;
  average_rating: number | string | null;
  total_ratings: number | null;
  followers_count: number | null;
  instagram_url: string | null;
  tiktok_url: string | null;
  website_url: string | null;
  role: string | null;
};

function displayName(p: ProfileRow): string {
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

export async function getProviderProfile(
  id: string
): Promise<ProviderProfile | null> {
  try {
    const supabase = getSupabase();

    const { data: p, error } = await supabase
      .from("profiles")
      .select(
        `id, business_name, first_name, last_name, preferred_username, avatar_url,
         bio, city, state, average_rating, total_ratings, followers_count,
         instagram_url, tiktok_url, website_url, role`
      )
      .eq("id", id)
      .single();

    if (error || !p || (p as ProfileRow).role !== "provider") return null;
    const prof = p as ProfileRow;

    const { data: svc } = await supabase
      .from("services")
      .select(
        `id, title, price, duration_minutes, is_active, service_categories ( name )`
      )
      .eq("provider_id", id)
      .eq("is_active", true);

    const services: BookableService[] = (svc ?? [])
      .map((r) => {
        const row = r as unknown as {
          id: string;
          title: string;
          price: number | string;
          duration_minutes: number;
          service_categories:
            | { name: string | null }
            | { name: string | null }[]
            | null;
        };
        const sc = row.service_categories;
        const category = Array.isArray(sc) ? sc[0]?.name ?? null : sc?.name ?? null;
        return {
          id: row.id,
          title: (row.title ?? "").trim(),
          price: Number(row.price),
          durationMinutes: row.duration_minutes,
          category,
        };
      })
      .filter((s) => !JUNK_TITLE.test(s.title) && !isTestPrice(s.price))
      .sort((a, b) => a.price - b.price);

    const { data: postsData } = await supabase
      .from("posts")
      .select("id, type, media_urls, thumbnail_url, likes_count, title")
      .eq("user_id", id)
      .eq("status", "published")
      .eq("is_public", true)
      .eq("is_archived", false)
      .order("created_at", { ascending: false })
      .limit(48);

    const posts: ProviderPost[] = (postsData ?? [])
      .map((r) => {
        const row = r as {
          id: string;
          type: string;
          media_urls: string[] | null;
          thumbnail_url: string | null;
          likes_count: number | null;
          title: string | null;
        };
        const firstMedia = Array.isArray(row.media_urls)
          ? row.media_urls[0]
          : null;
        // For images the file is the picture; for videos it's the clip and the
        // thumbnail (if any) is the poster.
        const src = firstMedia || row.thumbnail_url || null;
        return {
          id: row.id,
          src,
          poster: row.thumbnail_url ?? null,
          isVideo: row.type === "video",
          likes: row.likes_count ?? 0,
          title: row.title ?? null,
        };
      })
      .filter((p) => !!p.src);

    return {
      id: prof.id,
      name: displayName(prof),
      username: prof.preferred_username?.trim() || null,
      avatarUrl: prof.avatar_url || null,
      bio: prof.bio?.trim() || null,
      city: prof.city?.trim() || null,
      state: prof.state?.trim() || null,
      averageRating:
        prof.average_rating != null ? Number(prof.average_rating) : null,
      totalRatings: prof.total_ratings ?? 0,
      followers: prof.followers_count ?? 0,
      instagram: prof.instagram_url || null,
      tiktok: prof.tiktok_url || null,
      website: prof.website_url || null,
      services,
      posts,
    };
  } catch (e) {
    console.error("getProviderProfile failed", e);
    return null;
  }
}

// Adapt a profile into the BookableProvider shape the booking form expects.
export function toBookableProvider(p: ProviderProfile): BookableProvider {
  return {
    id: p.id,
    name: p.name,
    username: p.username,
    city: p.city,
    state: p.state,
    address: null,
    avatarUrl: p.avatarUrl,
    lat: null,
    lng: null,
    services: p.services,
  };
}
