import Image from "next/image";
import type { ReactNode } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import type { HomePageContent } from "@/lib/sanity/queries";
import WaitlistEmailCapture from "./WaitlistEmailCapture";

const DEFAULT_HERO_TITLE =
  "The Beauty Industry's {em}First{/em} Social Booking Platform";
const DEFAULT_HERO_DESCRIPTION =
  "A social marketplace for the beauty industry. Discover, connect, and book all in one place.";
const DEFAULT_HERO_TAGLINE = "No subscription. No catch. Free to join.";
const DEFAULT_HERO_CARD_1 = "Book directly from a post";
const DEFAULT_HERO_CARD_2 = "Explore the map";

function renderTitleWithEmphasis(title: string): ReactNode {
  const parts = title.split(/(\{em\}.*?\{\/em\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{em\}(.*?)\{\/em\}$/);
    if (match) {
      return (
        <em key={i} className="italic">
          {match[1]}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

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

type HeroProps = {
  content?: Pick<
    HomePageContent,
    "heroTitle" | "heroDescription" | "heroTagline" | "heroCard1" | "heroCard2"
  > | null;
};

export default function Hero({ content }: HeroProps = {}) {
  const title = content?.heroTitle || DEFAULT_HERO_TITLE;
  const description = content?.heroDescription || DEFAULT_HERO_DESCRIPTION;
  const tagline = content?.heroTagline || DEFAULT_HERO_TAGLINE;
  const card1 = content?.heroCard1 || DEFAULT_HERO_CARD_1;
  const card2 = content?.heroCard2 || DEFAULT_HERO_CARD_2;

  return (
    <section className="relative overflow-hidden px-6 pb-[88px] pt-[120px] sm:pt-36 lg:pb-[104px]">
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(135deg, #fff1f7 0%, #f9d5e5 18%, #e8a0bf 38%, rgba(193,26,99,0.35) 55%, rgba(163,11,69,0.25) 70%, transparent 85%)" }} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#ffffff_90%,#ffffff_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <h1 className="max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#24141c] sm:text-6xl lg:text-7xl">
            {renderTitleWithEmphasis(title)}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#5f4a53]">
            {description}
          </p>

          {tagline ? (
            <p className="mt-5 font-[var(--font-display)] text-xl font-semibold text-[#24141c]">
              {tagline}
            </p>
          ) : null}

          <div id="hero-waitlist" className="mt-8 max-w-xl">
            <WaitlistEmailCapture />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#f3d7e3] bg-white px-5 py-3 text-[#24141c] shadow-sm transition hover:border-[#c11a63]/30 hover:shadow-md"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none text-[#6f5a64]">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#f3d7e3] bg-white px-5 py-3 text-[#24141c] shadow-sm transition hover:border-[#c11a63]/30 hover:shadow-md"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none text-[#6f5a64]">Get it on</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-x-14 top-6 h-60 rounded-full bg-[#f3bfd3]/55 blur-[90px]" />

          <div className="relative mx-auto w-[320px] rounded-[42px] border border-[#f4d9e5] bg-white p-3 shadow-[0_45px_90px_-55px_rgba(163,11,69,0.75)]">
            <div className="rounded-[34px] bg-[linear-gradient(180deg,#fff9fc_0%,#fff0f6_100%)] p-4">
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#d9bcc7]" />

              <div className="rounded-[28px] bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#a30b45]">
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
                      <p className="text-xs uppercase tracking-[0.18em] text-white/70">
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

          <div className="relative mt-6 flex justify-center gap-4">
            <div className="w-48 rounded-[22px] border border-[#f3d7e3] bg-white/95 p-4 shadow-[0_20px_50px_-30px_rgba(163,11,69,0.4)] backdrop-blur">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]">
                  <svg className="h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#24141c]">
                  {card1}
                </p>
              </div>
            </div>
            <div className="w-48 rounded-[22px] border border-[#f3d7e3] bg-white/95 p-4 shadow-[0_20px_50px_-30px_rgba(163,11,69,0.4)] backdrop-blur">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]">
                  <svg className="h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#24141c]">
                  {card2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
