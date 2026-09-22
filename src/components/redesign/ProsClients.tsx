"use client";

import Image from "next/image";
import { useState } from "react";

const CONTENT = {
  pros: {
    heading: "Turn your work into bookings.",
    body: "From your latest work to your next repeat client, glamhere keeps your portfolio, calendar, and bookings in one flow.",
    points: [
      "Set your services and availability",
      "Get discovered through your posts",
      "Manage every booking and repeat client in one place",
    ],
    img: "/screens/beauty-pros.png",
    alt: "glamhere on iPhone — selecting a service, a pro's portfolio, and connected payments",
  },
  clients: {
    heading: "Find your look. Book it in a tap.",
    body: "Discover real pros by their work, see live pricing and availability, and book the moment you find the one.",
    points: [
      "Browse real portfolios by look and location",
      "See prices and open times up front",
      "Book and rebook your favorites in seconds",
    ],
    img: "/screens/beauty-clients.png",
    alt: "glamhere on iPhone — your bookings, discovering pros on the map, and a confirmed appointment",
  },
};

export default function ProsClients() {
  const [tab, setTab] = useState<"pros" | "clients">("pros");
  const c = CONTENT[tab];

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-[#f0cede] bg-[#fdeef4] p-1 shadow-sm">
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

          {/* App triptych — swaps with the pros / clients toggle */}
          <div className="mx-auto w-full max-w-[520px]">
            <Image
              key={tab}
              src={c.img}
              alt={c.alt}
              width={1080}
              height={1350}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
