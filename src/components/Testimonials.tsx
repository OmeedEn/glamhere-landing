import type { HomePageContent } from "@/lib/sanity/queries";

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
          {cards.map((card, index) => (
            <div
              key={`${card.title ?? "card"}-${index}`}
              className="rounded-[30px] border border-[#efd5e1] bg-white p-7 shadow-[0_26px_80px_-60px_rgba(163,11,69,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#24141c]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6f5a64]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
