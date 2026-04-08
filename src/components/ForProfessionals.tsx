const benefits = [
  "Showcase your talent with a professional profile and portfolio",
  "Upload videos, photos, and tutorials with timestamping and product tagging",
  "Engage your audience with likes, comments, shares, and DMs",
  "Build credibility with authentic client reviews and ratings",
  "Convert views to income via in-app booking with customizable services, pricing, and duration",
];

export default function ForProfessionals() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-20">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#a30b45]/20 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#a30b45]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a30b45]">
            For Professionals
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-4xl">
            The All-in-One Solution for Beauty Professionals &amp; Creators
          </h2>
          <p className="mt-4 text-white/50">
            Everything you need to grow your brand, connect with clients, and manage your business.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#a30b45]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-white/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual element instead of screenshot */}
        <div className="mt-12 flex justify-center lg:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#a30b45]/20 to-transparent blur-2xl" />
            <div className="relative w-72 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#a30b45]/20" />
                  <div>
                    <div className="h-3 w-24 rounded-full bg-white/30" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-white/15" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-32 rounded-xl bg-white/10" />
                  <div className="flex gap-3">
                    <div className="h-2 w-8 rounded-full bg-[#a30b45]/40" />
                    <div className="h-2 w-6 rounded-full bg-white/15" />
                    <div className="h-2 w-10 rounded-full bg-white/15" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-3/4 rounded-full bg-white/10" />
                </div>
                <div className="rounded-xl bg-[#a30b45] py-3 text-center text-sm font-semibold text-white">
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
