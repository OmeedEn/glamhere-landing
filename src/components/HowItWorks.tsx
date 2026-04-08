const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Personalize with your beauty preferences and style. Set up in under a minute.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Discover & Connect",
    desc: "Browse content, read reviews, and message professionals directly.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Book & Enjoy",
    desc: "Schedule seamlessly and experience beauty on your terms.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#6e5e5e]">
          Get started in three simple steps
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-[#a30b45]/30 to-[#a30b45]/10 sm:block" />
              )}

              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#a30b45]/10 text-[#a30b45]">
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#a30b45] text-xs font-bold text-white">
                  {s.num}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#1a1a1a]">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6e5e5e]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
