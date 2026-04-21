"use client";

import Image from "next/image";
import { useState } from "react";
import { LANDING_CATEGORIES } from "@/lib/constants";

const audienceContent = {
  professionals: {
    title: "Run your beauty business where clients already discover you.",
    description:
      "From showing your latest work to locking in repeat appointments, glamhere keeps your portfolio, calendar, and clients in one flow.",
    screens: [
      {
        name: "Business overview",
        description:
          "Track repeat bookings, busiest weeks, and the clients driving your growth from one dashboard.",
        imageSrc:
          "/screens/professional/WhatsApp Image 2026-04-21 at 11.43.27 AM.jpeg",
      },
      {
        name: "Booking + calendar",
        description:
          "Manage upcoming services, open slots, confirmations, and reschedules in one place.",
        imageSrc:
          "/screens/professional/WhatsApp Image 2026-04-20 at 10.18.27 PM (1).jpeg",
      },
      {
        name: "Confirmed appointments",
        description:
          "New bookings show up instantly with service, date, time, and location ready for your day.",
        imageSrc:
          "/screens/professional/WhatsApp Image 2026-04-20 at 10.18.27 PM (4).jpeg",
      },
    ],
  },
  clients: {
    title: "Discover, review, and book beauty without leaving the app.",
    description:
      "glamhere is your beauty feed, your inspo board, and your booking app all in one place. Follow pros you love, save looks for later, and book when you’re ready.",
    screens: [
      {
        name: "Explore the map",
        description:
          "Browse beauty pros near you by category and location. Filter by service and find the looks you want to book.",
        imageSrc:
          "/screens/client/WhatsApp Image 2026-04-21 at 9.26.25 AM (1).jpeg",
      },
      {
        name: "View their profile",
        description:
          "See each specialist’s real work, signature services, and availability all before you commit to anything.",
        imageSrc:
          "/screens/client/WhatsApp Image 2026-04-20 at 10.18.27 PM (3).jpeg",
      },
      {
        name: "See real results",
        description:
          "Before-and-after posts show the real transformations each pro delivers, so you know what to expect.",
        imageSrc:
          "/screens/client/WhatsApp Image 2026-04-21 at 9.26.25 AM (2).jpeg",
      },
    ],
  },
};

type AudienceKey = keyof typeof audienceContent;
type CategoryLabel = (typeof LANDING_CATEGORIES)[number];

function getAudienceKey(category: CategoryLabel): AudienceKey {
  return category === "Clients" ? "clients" : "professionals";
}

function getCategoryEyebrow(category: CategoryLabel) {
  return category === "Clients" ? "For clients" : "For artists";
}

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryLabel>(
    LANDING_CATEGORIES[0],
  );
  const currentAudience = audienceContent[getAudienceKey(selectedCategory)];
  const screenCount = currentAudience.screens.length;

  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a30b45]">
            One platform, every beauty lane
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-5xl">
            Beauty discovery and booking, tailored to every role on glamhere.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6f5a64]">
            Browse the categories glamhere is built for, from beauty pros
            growing their business to the clients booking them.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex max-w-4xl flex-wrap justify-center gap-2 rounded-[28px] border border-[#efd4e0] bg-white p-2 shadow-sm">
            {LANDING_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-white shadow-[0_14px_28px_-18px_rgba(163,11,69,0.75)]"
                    : "text-[#6f5a64] hover:text-[#a30b45]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[36px] border border-[#f0d4e0] bg-white p-7 shadow-[0_30px_90px_-55px_rgba(163,11,69,0.45)] sm:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a30b45]">
              {getCategoryEyebrow(selectedCategory)}
            </p>
            <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
              {currentAudience.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[#6f5a64]">
              {currentAudience.description}
            </p>
          </div>

          <div
            className={`mt-8 grid justify-items-center gap-10 ${
              screenCount === 2
                ? "mx-auto max-w-3xl sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {currentAudience.screens.map((screen) => (
              <div key={screen.name} className="text-center">
                <div className="mx-auto w-full max-w-[280px] drop-shadow-[0_34px_60px_rgba(163,11,69,0.28)]">
                  <Image
                    src={screen.imageSrc}
                    alt={screen.name}
                    width={760}
                    height={1578}
                    className="h-auto w-full rounded-[46px]"
                  />
                </div>
                <h4 className="mt-6 font-[var(--font-display)] text-lg font-semibold text-[#24141c]">
                  {screen.name}
                </h4>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-[#6f5a64]">
                  {screen.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
