import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-16 text-center">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#e9aeb3]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#fbeff0]/60 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#e9aeb3]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl">
          Authentic Beauty, Effortless Booking,{" "}
          <span className="text-[#e9aeb3]">All in One Place.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e5e5e]">
          GlamHere is the modern social platform and marketplace connecting you
          directly to the skill, artistry, and real work of top beauty
          professionals &mdash; anytime, anywhere.
        </p>
        <StoreBadges className="mt-10 justify-center" />
      </div>
    </section>
  );
}
