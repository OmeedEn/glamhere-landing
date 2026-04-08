import StoreBadges from "./StoreBadges";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-24 text-center text-white">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#a30b45]/20 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-[#a30b45]/15 blur-[120px]" />

      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-5xl">
          Your Beauty. Your Terms.
          <br />
          Your{" "}
          <span className="text-[#a30b45]" style={{ fontFamily: "var(--font-brand)", letterSpacing: "-1px" }}>
            <span className="font-bold italic">glam</span>
            <span className="font-normal">here</span>
          </span>.
        </h2>
        <p className="mt-6 text-lg text-white/50">
          Join thousands of beauty professionals and clients already on the platform.
        </p>
        <StoreBadges className="mt-10 justify-center" />
      </div>
    </section>
  );
}
