"use client";

import type { BookableProvider } from "@/lib/booking";
import BookingForm from "./BookingForm";

export default function BookingExperience({
  providers,
  categories,
}: {
  providers: BookableProvider[];
  categories: string[];
}) {
  return (
    <div className="mx-auto max-w-6xl px-6">
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
