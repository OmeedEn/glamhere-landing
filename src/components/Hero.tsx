import Image from "next/image";
import type { ReactNode } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import type { HomePageContent, SiteSettings } from "@/lib/sanity/queries";
import WaitlistEmailCapture from "./WaitlistEmailCapture";

const DEFAULT_HERO_TITLE =
  "The Beauty Industry's {br}{em}First{/em} Social Booking Platform";
const DEFAULT_HERO_DESCRIPTION =
  "A social marketplace for the beauty industry. Discover, connect, and book all in one place.";
const DEFAULT_HERO_TAGLINE = "No subscription. No catch. Free to join.";
const DEFAULT_HERO_CARD_1 = "Book directly from a post";
const DEFAULT_HERO_CARD_2 = "Explore from the map";

function renderTitleWithEmphasis(title: string): ReactNode {
  const parts = title.split(/(\{em\}.*?\{\/em\}|\{br\})/g);
  return parts.map((part, i) => {
    if (part === "{br}") {
      return <br key={i} />;
    }
    const match = part.match(/^\{em\}(.*?)\{\/em\}$/);
    if (match) {
      return (
        <em key={i} className="italic pr-2">
          {match[1]}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

type HeroProps = {
  content?: Pick<
    HomePageContent,
    | "heroTitle"
    | "heroDescription"
    | "heroTagline"
    | "heroCard1"
    | "heroCard2"
  > | null;
  settings?: Pick<SiteSettings, "appStoreUrl" | "googlePlayUrl"> | null;
};

export default function Hero({ content, settings }: HeroProps = {}) {
  const title = content?.heroTitle || DEFAULT_HERO_TITLE;
  const description = content?.heroDescription || DEFAULT_HERO_DESCRIPTION;
  const tagline = content?.heroTagline || DEFAULT_HERO_TAGLINE;
  const card1 = content?.heroCard1 || DEFAULT_HERO_CARD_1;
  const card2 = content?.heroCard2 || DEFAULT_HERO_CARD_2;
  const appStoreHref = settings?.appStoreUrl || APP_STORE_URL;
  const googlePlayHref = settings?.googlePlayUrl || GOOGLE_PLAY_URL;

  return (
    <section className="relative overflow-hidden px-6 pb-[88px] pt-[120px] sm:pt-36 lg:pb-[104px]">
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(135deg, #fff1f7 0%, #f9d5e5 18%, #e8a0bf 38%, rgba(193,26,99,0.35) 55%, rgba(163,11,69,0.25) 70%, transparent 85%)" }} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#ffffff_90%,#ffffff_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <h1 className="max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#24141c] sm:text-6xl lg:text-5xl">
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
              href={appStoreHref}
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
              href={googlePlayHref}
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

        <div className="relative mx-auto w-full">
          <div className="pointer-events-none absolute inset-x-10 top-10 h-72 rounded-full bg-[#f3bfd3]/55 blur-[100px]" />

          <div className="relative flex items-center justify-center gap-3 sm:gap-4">
            <div className="hidden shrink-0 self-start pt-[15%] sm:block">
              <div className="relative whitespace-nowrap rounded-2xl border border-[#f3d7e3] bg-white px-4 py-2.5 font-[var(--font-display)] text-xs font-semibold text-[#24141c] shadow-[0_18px_40px_-12px_rgba(163,11,69,0.45)]">
                {card1}
                <span
                  aria-hidden
                  className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-[#f3d7e3] bg-white"
                />
              </div>
            </div>

            <div className="w-[260px] shrink-0 drop-shadow-[0_50px_100px_rgba(163,11,69,0.45)] sm:w-[340px] lg:w-[400px]">
              <Image
                src="/screens/hero-feed.png"
                alt="glamhere app feed"
                width={557}
                height={1054}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="hidden shrink-0 self-end pb-[20%] sm:block">
              <div className="relative whitespace-nowrap rounded-2xl border border-[#f3d7e3] bg-white px-4 py-2.5 font-[var(--font-display)] text-xs font-semibold text-[#24141c] shadow-[0_18px_40px_-12px_rgba(163,11,69,0.45)]">
                {card2}
                <span
                  aria-hidden
                  className="absolute left-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-[#f3d7e3] bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
