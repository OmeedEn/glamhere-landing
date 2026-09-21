import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

const CTA_GRADIENT =
  "linear-gradient(140deg,#4d0f28 0%,#6d1338 45%,#8a274d 100%)";

export default function FinalCta() {
  return (
    <section className="px-6 py-20 sm:py-24" style={{ background: CTA_GRADIENT }}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
          Your next look — or your next client — is already here.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-white/80">
          Download glamhere to start discovering, posting, and booking.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[#4d0f28] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] transition hover:brightness-95"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-left leading-tight">
              <span className="block text-[10px] text-[#6f5a64]">Download on the</span>
              <span className="block text-sm font-semibold">App Store</span>
            </span>
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-white transition hover:bg-white/10"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            <span className="text-left leading-tight">
              <span className="block text-[10px] text-white/70">Get it on</span>
              <span className="block text-sm font-semibold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
