"use client";

import dynamic from "next/dynamic";
import type { BookableProvider } from "@/lib/booking";
import BookingForm from "./BookingForm";

// Leaflet touches window/document, so the map must never render on the server.
const ProviderMap = dynamic(() => import("./ProviderMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#fff7fb] text-sm text-[#6f5a64]">
      Loading map…
    </div>
  ),
});

export default function BookingExperience({
  providers,
  categories,
}: {
  providers: BookableProvider[];
  categories: string[];
}) {
  const locatedCount = providers.filter(
    (p) => p.lat != null && p.lng != null
  ).length;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {locatedCount > 0 && (
        <div className="mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[#24141c] sm:text-3xl">
            Find a pro near you
          </h2>
          <p className="mt-2 text-[15px] text-[#6f5a64]">
            Tap a pin to open a pro&apos;s profile, browse their work, and book.
          </p>
          {/* `isolate` keeps Leaflet's internal z-index (panes/controls go up to
              1000) contained so it never paints over the fixed header on scroll. */}
          <div className="isolate mt-6 overflow-hidden rounded-3xl border border-[#f3d7e3] shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)]">
            <div className="h-[420px] w-full sm:h-[520px]">
              <ProviderMap providers={providers} />
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-2xl">
        <h2 className="mb-2 text-center font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[#24141c]">
          Or request any available pro
        </h2>
        <p className="mb-5 text-center text-[15px] text-[#6f5a64]">
          Pick a service and location and we&apos;ll match you.
        </p>
        <BookingForm providers={providers} categories={categories} />
      </div>
    </div>
  );
}
