const highlights = [
  {
    title: "Free to join",
    description:
      "Start discovering pros, building a profile, or joining the waitlist without a subscription barrier.",
  },
  {
    title: "All in one",
    description:
      "Portfolios, social discovery, messaging, and booking live in the same beauty-first experience.",
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
      <div className="mx-auto grid max-w-6xl gap-4 rounded-[34px] border border-[#f3d9e4] bg-white/90 p-5 shadow-[0_30px_80px_-55px_rgba(163,11,69,0.45)] md:grid-cols-3 md:p-6">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.title}
            className="rounded-[28px] border border-[#f8e7ef] bg-[linear-gradient(180deg,#fffafd_0%,#fff5f9_100%)] p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
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
