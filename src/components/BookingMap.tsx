"use client";

import dynamic from "next/dynamic";
import type { BookableProvider } from "@/lib/booking";

// Leaflet touches window/document, so the map must never render on the server.
const ProviderMap = dynamic(() => import("./ProviderMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#fff7fb] text-sm text-[#6f5a64]">
      Loading map…
    </div>
  ),
});

// The "Find a pro near you" heading + map. Lives on the dark hero gradient, so
// its text is light.
export default function BookingMap({
  providers,
}: {
  providers: BookableProvider[];
}) {
  return (
    <div>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
        Find a pro near you
      </h2>
      <p className="mt-2 text-[15px] text-white/80">
        Tap a pin to open a pro&apos;s profile, browse their work, and book.
      </p>
      {/* `isolate` keeps Leaflet's internal z-index (panes/controls go up to
          1000) contained so it never paints over the fixed header on scroll. */}
      <div className="isolate mt-6 overflow-hidden rounded-3xl border border-white/25 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.5)]">
        <div className="h-[420px] w-full sm:h-[520px]">
          <ProviderMap providers={providers} />
        </div>
      </div>
    </div>
  );
}
