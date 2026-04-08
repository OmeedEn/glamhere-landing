const benefits = [
  {
    title: "Discover Top Talent",
    desc: "Browse portfolios, watch tutorials, and read authentic reviews.",
  },
  {
    title: "Connect Meaningfully",
    desc: "Follow and message your favorite professionals directly.",
  },
  {
    title: "Book Instantly",
    desc: "View real-time availability and schedule appointments in-app.",
  },
  {
    title: "Find Local Experts",
    desc: "Geo-location discovery puts the best pros near you at your fingertips.",
  },
  {
    title: "All Your Beauty Bookings, One App",
    desc: "Manage multi-category appointments from a single dashboard.",
  },
];

export default function ForClients() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        {/* Visual element */}
        <div className="order-2 flex justify-center lg:order-1 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#a30b45]/10 to-transparent blur-2xl" />
            <div className="relative grid grid-cols-2 gap-3 w-72">
              {[
                {
                  label: "Hair",
                  icon: (
                    <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
                      <path d="M8 3l4 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M16 3l-4 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M12 11v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <circle cx="10" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                      <circle cx="14" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                      <path d="M10 15l2-1 2 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 3C8 1.5 6 2 6 3.5s1.5 2.5 3.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                      <path d="M9.5 3C8 4.5 8.5 6.5 10 6.5s2-1.5 1-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                      <path d="M14.5 3C16 1.5 18 2 18 3.5s-1.5 2.5-3.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                      <path d="M14.5 3C16 4.5 15.5 6.5 14 6.5s-2-1.5-1-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                    </svg>
                  ),
                },
                {
                  label: "Nails",
                  icon: (
                    <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
                      <rect x="10" y="1" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M11 7h2v3h-2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M12 10v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      <path d="M13 10v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M3 16c0-2 1.5-3 3-3s3 1 3 3v3c0 1-1 2-3 2s-3-1-3-2v-3z" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M15 16c0-2 1.5-3 3-3s3 1 3 3v3c0 1-1 2-3 2s-3-1-3-2v-3z" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M3.5 16h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <path d="M15.5 16h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: "Makeup",
                  icon: (
                    <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="12" width="5" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M2.5 12V10h4v2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                      <path d="M3 10V8l1.5-2L6 8v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <ellipse cx="12" cy="16" rx="4" ry="3" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M8 16c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5" stroke="currentColor" strokeWidth="1.2" />
                      <line x1="12" y1="13" x2="12" y2="11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      <rect x="19" y="10" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M19.5 10V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      <path d="M22 10V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M20 7h1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: "Skin",
                  icon: (
                    <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
                      <path d="M4 12h16c0 5-3.5 9-8 9s-8-4-8-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <ellipse cx="12" cy="12" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M17.5 10.5L21 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M16.5 11.5l-1.5-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M18 10.5l-1-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="9" cy="10.5" r="1" stroke="currentColor" strokeWidth="1" fill="none" />
                      <circle cx="12" cy="10" r="0.8" stroke="currentColor" strokeWidth="1" fill="none" />
                      <circle cx="14.5" cy="10.5" r="0.6" stroke="currentColor" strokeWidth="0.8" fill="none" />
                    </svg>
                  ),
                },
              ].map((cat) => (
                <div key={cat.label} className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:border-[#a30b45]/30 hover:shadow-md">
                  <span className="inline-flex text-[#a30b45] justify-center w-full">{cat.icon}</span>
                  <p className="mt-2 text-sm font-medium text-[#1a1a1a]">{cat.label}</p>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#a30b45]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#a30b45]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="h-2.5 w-32 rounded-full bg-gray-200" />
                    <div className="mt-1.5 h-2 w-20 rounded-full bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a30b45]">
            For Clients
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl">
            <span className="text-[#a30b45]" style={{ fontFamily: "var(--font-brand)", letterSpacing: "-1px" }}>
              <span className="font-bold italic">glam</span>
              <span className="font-normal">here</span>
            </span>{" "}
            &mdash; Built for Clients Too
          </h2>
          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#a30b45]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold text-[#1a1a1a]">
                    {b.title}
                  </span>
                  <span className="text-[#6e5e5e]"> &mdash; {b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
