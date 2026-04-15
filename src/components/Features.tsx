"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { LANDING_CATEGORIES } from "@/lib/constants";

const audienceContent = {
  professionals: {
    title: "Run your beauty business where clients already discover you.",
    description:
      "From showing your latest work to locking in repeat appointments, Glamhere keeps your portfolio, calendar, and clients in one flow.",
    screens: [
      {
        name: "Portfolio page",
        description:
          "Show fresh work, signature services, and the profile that turns views into bookings.",
        kind: "portfolio" as const,
      },
      {
        name: "Booking + calendar",
        description:
          "Manage upcoming services, open slots, confirmations, and reschedules in one place.",
        kind: "calendar" as const,
      },
      {
        name: "Client analytics",
        description:
          "Track repeat bookings, busiest weeks, and the clients driving your growth.",
        kind: "analytics" as const,
      },
    ],
  },
  clients: {
    title: "Discover, review, and book beauty without leaving the app.",
    description:
      "Glamhere is your beauty feed, your inspo board, and your booking app all in one place. Follow pros you love, save looks for later, and book when you\u2019re ready.",
    screens: [
      {
        name: "Discover",
        description:
          "Scroll the feed or explore the map. Browse real work by category, location, and the looks you want to book.",
        kind: "feed" as const,
      },
      {
        name: "View their profile",
        description:
          "See each specialist\u2019s real work, signature services, and availability all before you commit to anything.",
        kind: "profile" as const,
      },
      {
        name: "Book",
        description:
          "Book directly from a post or a profile. Your appointment is confirmed, saved to your calendar, and ready in your bookings section.",
        kind: "confirmation" as const,
      },
    ],
  },
};

type AudienceKey = keyof typeof audienceContent;
type CategoryLabel = (typeof LANDING_CATEGORIES)[number];
type ScreenKind =
  (typeof audienceContent)[AudienceKey]["screens"][number]["kind"];

function getAudienceKey(category: CategoryLabel): AudienceKey {
  return category === "Clients" ? "clients" : "professionals";
}

function getCategoryEyebrow(category: CategoryLabel) {
  return category === "Clients" ? "For clients" : `For ${category.toLowerCase()}`;
}

function PhoneFrame({
  children,
  accent,
}: {
  children: ReactNode;
  accent: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[36px] border border-[#f2d7e3] bg-white p-3 shadow-[0_34px_90px_-55px_rgba(163,11,69,0.58)]">
      <div className={`overflow-hidden rounded-[30px] p-4 ${accent}`}>
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#d5bbc5]" />
        <div className="overflow-hidden rounded-[24px] bg-white p-4 shadow-sm">{children}</div>
      </div>
    </div>
  );
}

function PortfolioScreen() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-[linear-gradient(135deg,#d86295_0%,#a30b45_100%)]" />
        <div>
          <p className="text-sm font-semibold text-[#24141c]">Naomi Studio</p>
          <p className="text-xs text-[#7d6772]">Colorist + extensions</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-[#a30b45]">
        {["Balayage", "Silk press", "Editorial"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#fff1f7] px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#d45e8e_0%,#a30b45_100%)] p-3 text-white">
          <p className="truncate text-xs uppercase tracking-[0.18em] text-white/70">
            Portfolio
          </p>
          <div className="mt-5 h-[72px] rounded-[16px] bg-white/18" />
        </div>
        <div className="space-y-3">
          <div className="rounded-[18px] bg-[#fff3f8] p-3">
            <p className="text-xs font-semibold text-[#a30b45]">112 saves</p>
            <p className="mt-1 text-xs text-[#7d6772]">This month</p>
          </div>
          <div className="rounded-[18px] bg-[#fff3f8] p-3">
            <p className="text-xs font-semibold text-[#a30b45]">Portfolio DM</p>
            <p className="mt-1 text-xs text-[#7d6772]">Reply in-app</p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-[18px] border border-[#f6e4ec] bg-[#fffafc] p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7d6772]">
          Signature service
        </p>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[#24141c]">
              Dimensional color
            </p>
            <p className="text-xs text-[#7d6772]">2 hr 30 min</p>
          </div>
          <span className="text-sm font-semibold text-[#a30b45]">$185</span>
        </div>
      </div>
    </>
  );
}

function CalendarScreen() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#a30b45]">
            This week
          </p>
          <h3 className="mt-1 text-xl font-semibold text-[#24141c]">Bookings</h3>
        </div>
        <span className="rounded-full bg-[#fff1f7] px-3 py-1 text-xs font-semibold text-[#a30b45]">
          9 open slots
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
        {[
          ["Mon", "2"],
          ["Tue", "3"],
          ["Wed", "4"],
          ["Thu", "5"],
        ].map(([day, value], index) => (
          <div
            key={day}
            className={`rounded-[16px] p-2 ${
              index === 2
                ? "bg-[#a30b45] text-white"
                : "bg-[#fff4f8] text-[#6f5a64]"
            }`}
          >
            <p>{day}</p>
            <p className="mt-1 text-sm font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {[
          ["10:00", "Silk press", "Confirmed"],
          ["12:30", "Consultation", "Pending"],
          ["3:00", "Color refresh", "Confirmed"],
        ].map(([time, service, state]) => (
          <div
            key={time}
            className="flex items-center gap-3 rounded-[18px] border border-[#f6e4ec] bg-[#fffafc] px-3 py-3"
          >
            <div className="rounded-xl bg-[#fff1f7] px-2.5 py-2 text-xs font-semibold text-[#a30b45]">
              {time}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#24141c]">{service}</p>
              <p className="text-xs text-[#7d6772]">{state}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AnalyticsScreen() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#a30b45]">
            Client analytics
          </p>
          <h3 className="mt-1 text-xl font-semibold text-[#24141c]">This month</h3>
        </div>
        <span className="text-sm font-semibold text-[#a30b45]">+18%</span>
      </div>

      <div className="mt-5 flex h-28 items-end gap-3 rounded-[20px] bg-[#fff4f8] px-4 py-4">
        {[40, 68, 56, 88, 74].map((height, index) => (
          <div key={height} className="flex flex-1 flex-col items-center gap-2">
            <div
              className={`w-full rounded-t-[12px] ${
                index === 3 ? "bg-[#a30b45]" : "bg-[#d86b98]"
              }`}
              style={{ height: `${height}%` }}
            />
            <span className="text-[10px] text-[#7d6772]">
              {["W1", "W2", "W3", "W4", "W5"][index]}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          ["Repeat rate", "64%"],
          ["Booked clients", "38"],
          ["Avg. ticket", "$142"],
          ["Rebooked", "19"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[18px] border border-[#f6e4ec] bg-[#fffafc] p-3"
          >
            <p className="text-xs text-[#7d6772]">{label}</p>
            <p className="mt-2 text-lg font-semibold text-[#24141c]">{value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function FeedScreen() {
  return (
    <>
      <div className="rounded-full border border-[#f1d8e3] bg-[#fffafc] px-4 py-3 text-sm text-[#7d6772]">
        Search hair, nails, makeup...
      </div>

      <div className="mt-4 flex gap-2 text-[11px] font-semibold text-[#a30b45]">
        {["Nearby", "Braids", "Nails"].map((chip) => (
          <span key={chip} className="rounded-full bg-[#fff1f7] px-3 py-1">
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {[
          ["Glossing session", "2.4 mi away"],
          ["Soft glam", "Book for Friday"],
        ].map(([title, subtitle], index) => (
          <div
            key={title}
            className={`rounded-[20px] p-3 ${
              index === 0
                ? "bg-[linear-gradient(180deg,#d45e8e_0%,#a30b45_100%)] text-white"
                : "border border-[#f5e2eb] bg-[#fffafc]"
            }`}
          >
            <div
              className={`h-20 rounded-[16px] ${
                index === 0 ? "bg-white/18" : "bg-[#fff1f7]"
              }`}
            />
            <p className="mt-3 text-sm font-semibold">{title}</p>
            <p
              className={`mt-1 text-xs ${
                index === 0 ? "text-white/75" : "text-[#7d6772]"
              }`}
            >
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-[linear-gradient(135deg,#de7aa3_0%,#a30b45_100%)]" />
        <div>
          <p className="text-sm font-semibold text-[#24141c]">Sierra MUA</p>
          <p className="text-xs text-[#7d6772]">Soft glam / bridal / events</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="h-[88px] rounded-[18px] bg-[linear-gradient(180deg,#d86595_0%,#a30b45_100%)]" />
        <div className="h-[88px] rounded-[18px] bg-[#fff1f7]" />
      </div>

      <div className="mt-4 rounded-[18px] border border-[#f6e4ec] bg-[#fffafc] p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#7d6772]">Signature service</p>
            <p className="mt-1 text-sm font-semibold text-[#24141c]">
              Full event glam
            </p>
          </div>
          <span className="text-sm font-semibold text-[#a30b45]">$150</span>
        </div>
      </div>

      <button className="mt-4 w-full rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] py-3 text-sm font-semibold text-white">
        Book appointment
      </button>
    </>
  );
}

function ConfirmationScreen() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f7] text-[#a30b45]">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-[#a30b45]">
          Confirmed
        </p>
        <h3 className="mt-2 text-xl font-semibold text-[#24141c]">
          Appointment booked
        </h3>
      </div>

      <div className="mt-5 rounded-[20px] border border-[#f6e4ec] bg-[#fffafc] p-4">
        <p className="text-sm font-semibold text-[#24141c]">Friday, 2:30 PM</p>
        <p className="mt-1 text-xs text-[#7d6772]">
          Sierra MUA / Full event glam
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-[16px] bg-[#fff1f7] p-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#7d6772]">
              Deposit
            </p>
            <p className="mt-1 text-sm font-semibold text-[#a30b45]">$35 paid</p>
          </div>
          <div className="rounded-[16px] bg-[#fff1f7] p-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#7d6772]">
              Reminder
            </p>
            <p className="mt-1 text-sm font-semibold text-[#a30b45]">
              24 hrs before
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button className="flex-1 rounded-full border border-[#f1d8e3] px-4 py-3 text-sm font-semibold text-[#5f4a53]">
          Message
        </button>
        <button className="flex-1 rounded-full bg-[#a30b45] px-4 py-3 text-sm font-semibold text-white">
          Directions
        </button>
      </div>
    </>
  );
}

function renderScreen(kind: ScreenKind) {
  switch (kind) {
    case "portfolio":
      return (
        <PhoneFrame accent="bg-[linear-gradient(180deg,#fff8fc_0%,#fff1f6_100%)]">
          <PortfolioScreen />
        </PhoneFrame>
      );
    case "calendar":
      return (
        <PhoneFrame accent="bg-[linear-gradient(180deg,#fff9fc_0%,#fff3f8_100%)]">
          <CalendarScreen />
        </PhoneFrame>
      );
    case "analytics":
      return (
        <PhoneFrame accent="bg-[linear-gradient(180deg,#fff7fb_0%,#fff0f6_100%)]">
          <AnalyticsScreen />
        </PhoneFrame>
      );
    case "feed":
      return (
        <PhoneFrame accent="bg-[linear-gradient(180deg,#fff8fc_0%,#fff2f7_100%)]">
          <FeedScreen />
        </PhoneFrame>
      );
    case "profile":
      return (
        <PhoneFrame accent="bg-[linear-gradient(180deg,#fff9fc_0%,#fff3f8_100%)]">
          <ProfileScreen />
        </PhoneFrame>
      );
    case "confirmation":
      return (
        <PhoneFrame accent="bg-[linear-gradient(180deg,#fff8fc_0%,#fff1f6_100%)]">
          <ConfirmationScreen />
        </PhoneFrame>
      );
  }
}

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryLabel>(
    LANDING_CATEGORIES[0],
  );
  const currentAudience = audienceContent[getAudienceKey(selectedCategory)];

  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a30b45]">
            One platform, every beauty lane
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-5xl">
            Beauty discovery and booking, tailored to every role on Glamhere.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6f5a64]">
            Browse the categories Glamhere is built for, from beauty pros
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

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {currentAudience.screens.map((screen) => (
              <div key={screen.name} className="text-center">
                {renderScreen(screen.kind)}
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
