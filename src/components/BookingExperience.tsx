"use client";

import { useRef, useState } from "react";
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
}: {
  providers: BookableProvider[];
}) {
  const [selectedProviderId, setSelectedProviderId] = useState<string>("");
  const formRef = useRef<HTMLDivElement>(null);

  const locatedCount = providers.filter(
    (p) => p.lat != null && p.lng != null
  ).length;

  function handleBook(providerId: string) {
    setSelectedProviderId(providerId);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="mx-auto max-w-6xl px-6">
      {locatedCount > 0 && (
        <div className="mb-12">
          <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[#24141c] sm:text-3xl">
            Find a pro near you
          </h2>
          <p className="mt-2 text-[15px] text-[#6f5a64]">
            Tap a pin to see a pro&apos;s services and book straight from the map.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-[#f3d7e3] shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)]">
            <div className="h-[420px] w-full sm:h-[520px]">
              <ProviderMap providers={providers} onBook={handleBook} />
            </div>
          </div>
        </div>
      )}

      <div
        ref={formRef}
        id="booking-form"
        className="mx-auto max-w-2xl scroll-mt-28"
      >
        <BookingForm providers={providers} initialProviderId={selectedProviderId} />
      </div>
    </div>
  );
}
