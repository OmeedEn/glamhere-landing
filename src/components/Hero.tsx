import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] px-6 pt-28 pb-24 text-center">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#a30b45]/25 blur-[160px]" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#a30b45]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#a30b45]/15 blur-[140px]" />

      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Authentic Beauty,{" "}
          <br className="hidden sm:block" />
          Effortless Booking,{" "}
          <br className="hidden sm:block" />
          <span className="text-[#a30b45]">All in One Place.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          <span className="text-[#a30b45]" style={{ fontFamily: "var(--font-brand)", letterSpacing: "-1px" }}>
            <span className="font-bold italic">glam</span>
            <span className="font-normal">here</span>
          </span>{" "}
          is the modern social platform and marketplace connecting you
          directly to the skill, artistry, and real work of top beauty
          professionals &mdash; anytime, anywhere.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <StoreBadges />
          <a
            href="/waitlist"
            className="inline-flex items-center rounded-full border-2 border-[#a30b45] px-6 py-3 text-sm font-semibold text-[#a30b45] transition hover:bg-[#a30b45] hover:text-white"
          >
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
