"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BookableProvider } from "@/lib/booking";

function locationLabel(p: BookableProvider): string {
  return [p.city, p.state].filter(Boolean).join(", ");
}

function priceFrom(p: BookableProvider): number | null {
  if (!p.services.length) return null;
  return Math.min(...p.services.map((s) => s.price));
}

const money = (n: number) =>
  `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

// A live "search for your pro" box for the booking page. Filters the pros the
// page already loaded (name, @username, city/state, or a service they offer)
// and links each match straight to their profile. Lives on the dark hero
// gradient, so the label text is light.
export default function ProviderSearch({
  providers,
}: {
  providers: BookableProvider[];
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return providers
      .filter((p) => {
        const haystack = [
          p.name,
          p.username,
          p.city,
          p.state,
          ...p.services.map((s) => s.title),
          ...p.services.map((s) => s.category ?? ""),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 6);
  }, [query, providers]);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-center font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
        Search for your pro
      </h2>
      <p className="mt-2 text-center text-[15px] text-white/80">
        Already know who you want? Find them by name, @username, city, or service.
      </p>

      <div className="relative mt-6">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#a3808f]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pros, e.g. “Elena”, “@glambyjules”, or “lashes”"
            aria-label="Search for a pro"
            className="w-full rounded-full border border-white/25 bg-white py-4 pl-14 pr-5 text-[15px] text-[#24141c] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] outline-none transition placeholder:text-[#a3808f] focus:border-[#c11a63] focus:ring-2 focus:ring-[#c11a63]/30"
          />
        </div>

        {hasQuery && (
          <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-3xl border border-[#f3d7e3] bg-white p-2 text-left shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
            {results.length > 0 ? (
              <ul>
                {results.map((p) => {
                  const from = priceFrom(p);
                  const loc = locationLabel(p);
                  return (
                    <li key={p.id}>
                      <Link
                        href={`/pro/${p.id}`}
                        className="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-[#fff1f7]"
                      >
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-sm font-semibold text-white">
                          {p.avatarUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={p.avatarUrl}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            p.name.trim().charAt(0).toUpperCase() || "G"
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-[#24141c]">
                            {p.name}
                          </span>
                          <span className="block truncate text-xs text-[#6f5a64]">
                            {p.username ? `@${p.username}` : "glamhere pro"}
                            {loc ? ` · ${loc}` : ""}
                          </span>
                        </span>
                        {from != null && (
                          <span className="flex-shrink-0 text-xs font-medium text-[#a30b45]">
                            from {money(from)}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="px-4 py-6 text-center text-sm text-[#6f5a64]">
                No pros match “{query.trim()}”. Try a service or browse the map
                below.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
