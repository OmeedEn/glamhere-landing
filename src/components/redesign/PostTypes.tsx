export default function PostTypes() {
  return (
    <section className="bg-white px-6 pb-8 sm:pb-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
          Which post is right for you?
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {/* Regular Post */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-3xl border border-[#f3d7e3] bg-[linear-gradient(160deg,#fde7f0_0%,#f7cfe0_100%)] p-4 shadow-[0_24px_60px_-40px_rgba(163,11,69,0.5)]">
            <div className="aspect-square rounded-2xl bg-[linear-gradient(155deg,#fbdbe8_0%,#f2bcd3_100%)]" />
            <div className="flex items-center gap-4 px-1 pt-3 text-[#c98bab]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21s-7-4.35-9.33-8.02C1.1 10.36 2.18 6.9 5.2 6.24c1.7-.37 3.3.42 4.3 1.73 1-1.31 2.6-2.1 4.3-1.73 3.02.66 4.1 4.12 2.53 6.74C19 16.65 12 21 12 21z" />
              </svg>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5M21 12a9 9 0 1 1-3.5-7.1L21 4l-.9 3.5A8.96 8.96 0 0 1 21 12Z" />
              </svg>
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-[#24141c]">Regular Post</h3>
          <p className="mx-auto mt-2 max-w-[16rem] text-[15px] leading-6 text-[#6f5a64]">
            Show off your work. Clients admire, follow, and DM.
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-[#b59aa4]">
            Every post, by default
          </p>
        </div>

        {/* Service Post */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-3xl border border-[#7a1540] bg-[linear-gradient(160deg,#7c1a41_0%,#4d0f28_100%)] p-4 shadow-[0_30px_70px_-38px_rgba(90,15,45,0.8)]">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#b64d76_0%,#6e1738_100%)]">
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#24141c] shadow-sm">
                Eyebrow Threading · $15
              </span>
            </div>
            <div className="flex items-center justify-center px-1 pt-3">
              <span className="rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold text-white">
                Book Now
              </span>
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-[#24141c]">Service Post</h3>
          <p className="mx-auto mt-2 max-w-[16rem] text-[15px] leading-6 text-[#6f5a64]">
            Show off your work — and let them book it, instantly.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#c11a63]">
            New on glamhere
          </p>
        </div>
      </div>
    </section>
  );
}
