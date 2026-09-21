"use client";

import { useState } from "react";
import IPhoneFrame from "./IPhoneFrame";

const CONTENT = {
  pros: {
    heading: "Turn your work into bookings.",
    body: "From your latest work to your next repeat client, glamhere keeps your portfolio, calendar, and bookings in one flow.",
    points: [
      "Set your services and availability",
      "Get discovered through your posts",
      "Manage every booking and repeat client in one place",
    ],
  },
  clients: {
    heading: "Find your look. Book it in a tap.",
    body: "Discover real pros by their work, see live pricing and availability, and book the moment you find the one.",
    points: [
      "Browse real portfolios by look and location",
      "See prices and open times up front",
      "Book and rebook your favorites in seconds",
    ],
  },
};

const SERVICES = [
  { name: "Hybrid Brows", price: "$45", dur: "45 min" },
  { name: "Eyebrow Threading", price: "$15", dur: "30 min" },
  { name: "Lash Lift", price: "$65", dur: "60 min" },
];

export default function ProsClients() {
  const [tab, setTab] = useState<"pros" | "clients">("pros");
  const c = CONTENT[tab];

  return (
    <section className="bg-[#fdeef4] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-[#f0cede] bg-white p-1 shadow-sm">
            {(["pros", "clients"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  tab === t
                    ? "bg-[#3b0a1c] text-white"
                    : "text-[#6f5a64] hover:text-[#a30b45]"
                }`}
              >
                {t === "pros" ? "For Pros" : "For Clients"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
              {c.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#5f4a53]">
              {c.body}
            </p>
            <ul className="mt-7 space-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#4a3640]">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-6">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Three fanned iPhones: portfolio · services · booking confirmed */}
          <div className="relative mx-auto h-[420px] w-full max-w-[440px] sm:h-[460px]">
            {/* back-left: portfolio grid */}
            <div className="absolute left-0 top-8 w-[150px] -rotate-[10deg] sm:w-[168px]">
              <IPhoneFrame flat>
                <div className="flex h-full flex-col bg-white px-2.5 pt-8">
                  <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a30b45]">
                    Portfolio
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {[
                      "linear-gradient(150deg,#f8cddc,#c76b8e)",
                      "linear-gradient(150deg,#e9b6cc,#8e2a53)",
                      "linear-gradient(150deg,#f2bcd3,#a5426c)",
                      "linear-gradient(150deg,#d98aa9,#6e1738)",
                      "linear-gradient(150deg,#f8cddc,#b64d76)",
                      "linear-gradient(150deg,#eaa3c0,#7c1a41)",
                    ].map((g, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-md"
                        style={{ background: g }}
                      />
                    ))}
                  </div>
                </div>
              </IPhoneFrame>
            </div>

            {/* back-right: booking confirmed */}
            <div className="absolute right-0 top-10 w-[150px] rotate-[10deg] sm:w-[168px]">
              <IPhoneFrame flat>
                <div className="flex h-full flex-col items-center justify-center bg-white px-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <p className="mt-3 text-[13px] font-semibold text-[#24141c]">
                    Booking confirmed
                  </p>
                  <p className="mt-1 text-[10px] text-[#8a7681]">
                    Thu, Aug 27 · 9:30 AM
                  </p>
                </div>
              </IPhoneFrame>
            </div>

            {/* front-center: services list */}
            <div className="absolute left-1/2 top-0 w-[178px] -translate-x-1/2 sm:w-[200px]">
              <IPhoneFrame>
                <div className="flex h-full flex-col bg-white px-3 pt-9">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#a30b45]">
                    Your services
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {SERVICES.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between rounded-xl border border-[#f3d8e4] bg-[#fff7fb] px-3 py-2.5"
                      >
                        <div>
                          <div className="text-[12px] font-semibold text-[#24141c]">
                            {s.name}
                          </div>
                          <div className="text-[10px] text-[#8a7681]">{s.dur}</div>
                        </div>
                        <div className="text-[12px] font-semibold text-[#a30b45]">
                          {s.price}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-xl bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-3 py-2.5 text-white">
                    <div className="text-[10px] uppercase tracking-wide text-white/75">
                      New booking
                    </div>
                    <div className="mt-0.5 text-[12px] font-semibold">
                      Thu, Aug 27 · 9:30 AM
                    </div>
                  </div>
                </div>
              </IPhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
