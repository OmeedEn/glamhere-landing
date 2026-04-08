import Image from "next/image";
import WaitlistEmailCapture from "./WaitlistEmailCapture";

const heroTags = ["Free to join", "Real portfolios", "Social discovery"];

const featuredPros = [
  {
    name: "Sabrina L.",
    role: "Braids + color",
    avatar: "/images/avatar-elena.png",
  },
  {
    name: "Maya T.",
    role: "Editorial makeup",
    avatar: "/images/avatar-juliette.png",
  },
  {
    name: "Rico A.",
    role: "Cuts + grooming",
    avatar: "/images/avatar-ricardo.png",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-[88px] pt-[120px] sm:pt-36 lg:pb-[104px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_140%_60%_at_50%_-10%,rgba(193,26,99,0.22),transparent_55%),radial-gradient(circle_at_10%_20%,rgba(193,26,99,0.16),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(150,16,73,0.12),transparent_30%),linear-gradient(180deg,#ffebf2_0%,#fff4f9_30%,#ffffff_60%,#fff8fb_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#f0c4d8] blur-[140px] opacity-50" />
      <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#e8a0c0] blur-[120px] opacity-30" />
      <div className="pointer-events-none absolute -right-10 top-20 h-48 w-48 rounded-full bg-[#d98bb0] blur-[100px] opacity-20" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="inline-flex items-center rounded-full border border-[#f2d6e2] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#a30b45] shadow-sm">
            The beauty industry&apos;s first social platform
          </p>

          <h1 className="mt-6 max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#24141c] sm:text-6xl lg:text-7xl">
            The beauty industry finally has its own platform
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f4a53]">
            Glamhere connects clients and professionals through real
            portfolios, social discovery, and instant in-app booking.
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-[#7d6772]">
            A social marketplace for the beauty industry. Discover, connect,
            and book all in one place.
          </p>

          <div id="hero-waitlist" className="mt-8 max-w-xl">
            <WaitlistEmailCapture />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#eed2df] bg-white px-4 py-2 text-sm font-medium text-[#5f4a53]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-x-14 top-6 h-60 rounded-full bg-[#f3bfd3]/55 blur-[90px]" />

          <div className="absolute -left-2 top-14 hidden w-52 rounded-[28px] border border-[#f3d7e3] bg-white/92 p-5 shadow-[0_30px_70px_-40px_rgba(163,11,69,0.45)] backdrop-blur md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a30b45]">
              Real portfolios
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4a53]">
              Scroll current work, verify style fit, and book the artist you
              actually want.
            </p>
          </div>

          <div className="absolute -right-2 bottom-10 hidden w-56 rounded-[28px] border border-[#f3d7e3] bg-white/92 p-5 shadow-[0_30px_70px_-40px_rgba(163,11,69,0.45)] backdrop-blur md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a30b45]">
              Social + booking
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f4a53]">
              Follow pros, message directly, and confirm appointments without
              bouncing between apps.
            </p>
          </div>

          <div className="relative mx-auto w-[320px] rounded-[42px] border border-[#f4d9e5] bg-white p-3 shadow-[0_45px_90px_-55px_rgba(163,11,69,0.75)]">
            <div className="rounded-[34px] bg-[linear-gradient(180deg,#fff9fc_0%,#fff0f6_100%)] p-4">
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#d9bcc7]" />

              <div className="rounded-[28px] bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#a30b45]">
                      Discover nearby
                    </p>
                    <h2 className="mt-1 font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                      Beauty feed
                    </h2>
                  </div>
                  <div className="rounded-full bg-[#fff1f7] px-3 py-1 text-xs font-semibold text-[#a30b45]">
                    Los Angeles
                  </div>
                </div>

                <div className="mt-4 rounded-[24px] border border-[#f4d9e5] bg-[linear-gradient(180deg,#fff7fb_0%,#ffffff_100%)] p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={featuredPros[0].avatar}
                      alt={featuredPros[0].name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#24141c]">
                        {featuredPros[0].name}
                      </p>
                      <p className="text-xs text-[#7d6772]">
                        {featuredPros[0].role}
                      </p>
                    </div>
                    <span className="ml-auto rounded-full bg-[#a30b45] px-3 py-1 text-xs font-semibold text-white">
                      Book
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-[18px] bg-[linear-gradient(180deg,#cf5d8d_0%,#a30b45_100%)] p-3 text-white">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                        Portfolio
                      </p>
                      <div className="mt-6 h-16 rounded-[16px] bg-white/18" />
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-[18px] bg-[#fff1f7] p-3">
                        <p className="text-xs font-semibold text-[#a30b45]">
                          4.9 rating
                        </p>
                        <p className="mt-1 text-xs text-[#7d6772]">
                          132 recent bookings
                        </p>
                      </div>
                      <div className="rounded-[18px] bg-[#fff1f7] p-3">
                        <p className="text-xs font-semibold text-[#a30b45]">
                          This week
                        </p>
                        <p className="mt-1 text-xs text-[#7d6772]">
                          9 slots left
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {featuredPros.slice(1).map((pro) => (
                    <div
                      key={pro.name}
                      className="flex items-center gap-3 rounded-[20px] border border-[#f5e2eb] bg-[#fff9fc] px-3 py-3"
                    >
                      <Image
                        src={pro.avatar}
                        alt={pro.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#24141c]">
                          {pro.name}
                        </p>
                        <p className="text-xs text-[#7d6772]">{pro.role}</p>
                      </div>
                      <svg
                        className="ml-auto h-5 w-5 text-[#a30b45]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
