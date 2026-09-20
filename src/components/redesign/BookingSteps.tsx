const STEPS = [
  {
    n: "01",
    title: "A pro posts it",
    body: "Real work, real pricing, real availability — posted like any other photo.",
  },
  {
    n: "02",
    title: "A client finds it",
    body: "Browsing the feed or the map, by look, location, or specialty.",
  },
  {
    n: "03",
    title: "It gets booked",
    body: "Time, price, and details are already there. One tap and it's confirmed.",
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-xl font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
          One photo. One tap. Booked.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#5f4a53]">
          Post a photo, add a price, and it becomes a booking page. Clients pick a
          time and pay — no back-and-forth.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t-2 border-[#f3d8e4] pt-5">
              <span className="font-[var(--font-display)] text-lg font-semibold italic text-[#c11a63]">
                {s.n}
              </span>
              <h3 className="mt-2 text-base font-semibold text-[#24141c]">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-[#6f5a64]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
