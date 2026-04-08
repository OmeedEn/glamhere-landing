const stats = [
  { value: "10K+", label: "Professionals" },
  { value: "50K+", label: "Bookings" },
  { value: "4.9", label: "App Rating" },
];

export default function Stats() {
  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 sm:gap-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-[#a30b45]">{s.value}</div>
            <div className="mt-1 text-sm text-[#6e5e5e]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
