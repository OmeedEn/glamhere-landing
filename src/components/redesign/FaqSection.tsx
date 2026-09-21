"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is glamhere really free to join?",
    a: "Yes — no subscription. You only pay a small percentage, and only on completed, paid bookings.",
  },
  {
    q: "Do I need a payment processor account?",
    a: "No separate setup headaches — glamhere handles payments so clients can pay in-app and you get paid out on completed bookings.",
  },
  {
    q: "Can clients still DM me directly?",
    a: "Absolutely. Clients can follow, DM, and book you — glamhere keeps the conversation and the booking in one place.",
  },
  {
    q: "Do I lose control of my content or brand?",
    a: "Never. Your posts, portfolio, and brand stay yours. glamhere just makes them bookable.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
          Have questions about glamhere?
        </h2>

        <div className="mt-10 divide-y divide-[#f0dce6] border-t border-[#f0dce6]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#24141c]">
                    {item.q}
                  </span>
                  <span className="text-xl leading-none text-[#c11a63]">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-[15px] leading-6 text-[#6f5a64]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
