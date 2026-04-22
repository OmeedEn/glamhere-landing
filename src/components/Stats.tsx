import Image from "next/image";
import type { HomePageContent } from "@/lib/sanity/queries";

const DEFAULT_HIGHLIGHTS = [
  {
    title: "Your work, front and center",
    description:
      "A portfolio that doubles as a booking page. Clients see your best work and book directly from it — no redirects, no link in bio.",
  },
  {
    title: "Find exactly what you’re looking for",
    description:
      "Search by look, specialty, and location, or just save inspo.",
  },
  {
    title: "Built for beauty",
    description:
      "One platform designed to connect professionals and clients instead of splitting them across tools.",
  },
];

const HIGHLIGHT_IMAGES = [
  {
    src: "/images/highlight-portfolio.png",
    alt: "Illustration of a hand holding a phone showing a booking page",
    className: "h-28 w-28 object-contain",
  },
  {
    src: "/images/highlight-discover.png",
    alt: "Illustration of a magnifying glass over a person with two others nearby",
    className: "h-40 w-40 object-contain",
  },
  {
    src: "/images/highlight-beauty.png",
    alt: "Illustration of a phone with beauty icons and cash next to it",
    className: "h-40 w-40 object-contain",
  },
];

type StatsProps = {
  content?: Pick<HomePageContent, "highlights"> | null;
};

export default function Stats({ content }: StatsProps = {}) {
  const highlights =
    content?.highlights && content.highlights.length > 0
      ? content.highlights
      : DEFAULT_HIGHLIGHTS;

  return (
    <section id="discover" className="px-6 py-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {highlights.map((highlight, index) => {
          const image = HIGHLIGHT_IMAGES[index % HIGHLIGHT_IMAGES.length];
          return (
            <div
              key={`${highlight.title ?? "highlight"}-${index}`}
              className="rounded-[28px] border border-[#f3d9e4] bg-white/90 p-6 shadow-[0_30px_80px_-55px_rgba(163,11,69,0.35)]"
            >
              <div className="flex h-40 items-center justify-center rounded-[20px] border border-[#c11a63] bg-[#fff4f8] p-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={160}
                  height={160}
                  className={image.className}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(10%) sepia(90%) saturate(5000%) hue-rotate(330deg) brightness(70%)",
                  }}
                />
              </div>
              <h2 className="mt-5 font-[var(--font-display)] text-xl font-semibold text-[#24141c]">
                {highlight.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6f5a64]">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
