import Image from "next/image";

const highlights = [
  {
    title: "Your work, front and center",
    description:
      "A portfolio that doubles as a booking page. Clients see your best work and book directly from it — no redirects, no link in bio.",
    image: "/images/highlight-portfolio.png",
    imageAlt: "Illustration of a hand holding a phone showing a booking page",
  },
  {
    title: "Find exactly what you’re looking for",
    description:
      "Search by look, specialty, and location, or just save inspo.",
    image: "/images/highlight-discover.png",
    imageAlt:
      "Illustration of a magnifying glass over a person with two others nearby",
  },
  {
    title: "Built for beauty",
    description:
      "One platform designed to connect professionals and clients instead of splitting them across tools.",
    image: "/images/highlight-beauty.png",
    imageAlt:
      "Illustration of a phone with beauty icons and cash next to it",
  },
];

export default function Stats() {
  return (
    <section id="discover" className="px-6 py-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-[28px] border border-[#f3d9e4] bg-white/90 p-6 shadow-[0_30px_80px_-55px_rgba(163,11,69,0.35)]"
          >
            <div className="flex items-center justify-center rounded-[20px] bg-[#fff4f8] p-4">
              <Image
                src={highlight.image}
                alt={highlight.imageAlt}
                width={160}
                height={160}
                className="h-32 w-auto object-contain"
              />
            </div>
            <h2 className="mt-5 font-[var(--font-display)] text-xl font-semibold text-[#24141c]">
              {highlight.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6f5a64]">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
