import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;
let _serviceSupabase: SupabaseClient | null = null;

export function getSupabase() {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error("Missing Supabase environment variables");
    }
    _supabase = createClient(url, key);
  }
  return _supabase;
}

/**
 * Server-only client using the service_role key. Bypasses RLS, so NEVER import
 * this into client components. Used to create pending appointments on providers'
 * calendars (the appointments table is not writable by anon). Returns null if
 * the key isn't configured so callers can degrade to a lead-only flow.
 */
export function getServiceSupabase(): SupabaseClient | null {
  if (_serviceSupabase) return _serviceSupabase;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  _serviceSupabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _serviceSupabase;
}
