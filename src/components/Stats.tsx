const stats = [
  { value: "10K+", label: "Professionals" },
  { value: "50K+", label: "Bookings" },
  { value: "4.9", label: "App Rating" },
];

export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-[#FDE8EF]/40 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 sm:gap-16">
        <p className="text-sm font-medium text-[#6e5e5e]">
          Used by 1000+ influencers
        </p>
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold text-[#1a1a1a]">{s.value}</div>
            <div className="text-xs text-[#6e5e5e]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
