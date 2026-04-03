import StoreBadges from "./StoreBadges";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-20 text-center text-white">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#e9aeb3]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-56 w-56 rounded-full bg-[#e9aeb3]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
          GlamHere is taking over!
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Your Beauty. Your Terms. Your GlamHere.
        </p>
        <StoreBadges className="mt-10 justify-center" />
      </div>
    </section>
  );
}
