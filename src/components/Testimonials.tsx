import Image from "next/image";
import type { ReactNode } from "react";
import type { HomePageContent } from "@/lib/sanity/queries";

function CalendarIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M8 13h3" />
      <path d="M13 13h3" />
      <path d="M8 17h3" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-7-6.35-7-11a7 7 0 1 1 14 0c0 4.65-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const CARD_ICONS: ReactNode[] = [
  <CalendarIcon key="calendar" />,
  <MapPinIcon key="map-pin" />,
  <Image
    key="messy-bun"
    src="/images/icon-messy-bun.png"
    alt="Line-art illustration of a woman with a messy bun"
    width={64}
    height={64}
    className="h-10 w-auto object-contain"
  />,
];

const DEFAULT_EYEBROW = "Trusted by the beauty community";
const DEFAULT_HEADING = "Built for every lane in beauty.";
const DEFAULT_DESCRIPTION =
  "glamhere brings professionals and clients into one beauty-first ecosystem, from the first scroll to the final booking confirmation.";

const DEFAULT_CARDS = [
  {
    title: "For beauty pros",
    description:
      "Turn social discovery into scheduled business with a profile built around your actual work.",
  },
  {
    title: "For clients",
    description:
      "Book with confidence after browsing real portfolios, specialties, pricing, and availability.",
  },
  {
    title: "For local beauty scenes",
    description:
      "Keep discovery, connection, and repeat appointments inside a single platform built for beauty.",
  },
];

type TestimonialsProps = {
  content?: Pick<
    HomePageContent,
    | "testimonialsEyebrow"
    | "testimonialsHeading"
    | "testimonialsDescription"
    | "testimonialsCards"
  > | null;
};

export default function Testimonials({ content }: TestimonialsProps = {}) {
  const eyebrow = content?.testimonialsEyebrow || DEFAULT_EYEBROW;
  const heading = content?.testimonialsHeading || DEFAULT_HEADING;
  const description = content?.testimonialsDescription || DEFAULT_DESCRIPTION;
  const cards =
    content?.testimonialsCards && content.testimonialsCards.length > 0
      ? content.testimonialsCards
      : DEFAULT_CARDS;

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a30b45]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6f5a64]">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const icon = CARD_ICONS[index % CARD_ICONS.length];
            return (
              <div
                key={`${card.title ?? "card"}-${index}`}
                className="rounded-[30px] border border-[#efd5e1] bg-white p-7 shadow-[0_26px_80px_-60px_rgba(163,11,69,0.45)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1f7] text-[#a30b45]">
                  {icon}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#24141c]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6f5a64]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
