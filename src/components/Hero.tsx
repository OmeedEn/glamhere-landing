import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-16 text-center">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#E8195A]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#FFF0F4]/60 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#E8195A]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl">
          Authentic Beauty, Effortless Booking,{" "}
          <span className="text-[#E8195A]">All in One Place.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e5e5e]">
          GlamHere is the modern social platform and marketplace connecting you
          directly to the skill, artistry, and real work of top beauty
          professionals &mdash; anytime, anywhere.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <StoreBadges />
          <a
            href="/waitlist"
            className="inline-flex items-center rounded-full border-2 border-[#E8195A] px-6 py-3 text-sm font-semibold text-[#E8195A] transition hover:bg-[#E8195A] hover:text-white"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
