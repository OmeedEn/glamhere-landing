const testimonials = [
  {
    name: "Elena M.",
    role: "Client",
    text: "I found my new colorist within minutes! GlamHere is the only platform where I feel like I'm seeing a stylist's true, recent work.",
    initials: "EM",
  },
  {
    name: "Juliette R.",
    role: "Client",
    text: "Finally, a platform that gets it right! I can see the stylist's actual work and book with confidence. No more guesswork!",
    initials: "JR",
  },
  {
    name: "Ricardo A.",
    role: "Professional",
    text: "I've tried other apps, but GlamHere is the only one that shows me real, unedited portfolios. It's a game-changer for finding the right barber.",
    initials: "RA",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-[#a30b45]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
          What Our Users Say
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 transition hover:border-[#a30b45]/20 hover:shadow-lg hover:shadow-[#a30b45]/5"
            >
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-[#413737]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a30b45]/10 text-sm font-semibold text-[#a30b45]">
                  {t.initials}
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#1a1a1a]">
                    {t.name}
                  </span>
                  <p className="text-xs text-[#6e5e5e]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
