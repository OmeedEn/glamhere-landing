const highlights = [
  {
    title: "Your work, front and center",
    description:
      "A portfolio that doubles as a booking page. Clients see your best work and book directly from it — no redirects, no link in bio.",
  },
  {
    title: "Find exactly what you\u2019re looking for",
    description:
      "Search by look, specialty, and location, or just save inspo.",
  },
  {
    title: "Built for beauty",
    description:
      "One platform designed to connect professionals and clients instead of splitting them across tools.",
  },
];

export default function Stats() {
  return (
    <section id="discover" className="px-6 py-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.title}
            className="rounded-[28px] border border-[#f3d9e4] bg-white/90 p-6 shadow-[0_30px_80px_-55px_rgba(163,11,69,0.35)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h2 className="font-[var(--font-display)] text-xl font-semibold text-[#24141c]">
                {highlight.title}
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#6f5a64]">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
