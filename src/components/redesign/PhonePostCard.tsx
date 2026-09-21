import IPhoneFrame from "./IPhoneFrame";

// The hero iPhone: a glamhere "service post" — a photo with a price tag that
// turns into a booking. No image assets needed.
export default function PhonePostCard() {
  return (
    <div className="relative mx-auto w-[248px] sm:w-[290px]">
      <IPhoneFrame>
        <div className="flex h-full flex-col bg-white pt-9">
          {/* post header */}
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]" />
              <span className="font-[var(--font-brand)] text-sm font-bold italic text-[#a30b45]">
                glamhere
              </span>
            </div>
            <span className="rounded-full border border-[#c11a63] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#c11a63]">
              Follow
            </span>
          </div>

          {/* photo with price tag — grows to fill the tall screen */}
          <div className="relative mx-3 flex-1 overflow-hidden rounded-2xl bg-[linear-gradient(155deg,#f8cddc_0%,#eaa3c0_45%,#c76b8e_100%)]">
            <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#24141c] shadow-sm">
              Eyebrow Threading · $15
            </span>
          </div>

          {/* actions */}
          <div className="flex items-center gap-4 px-4 py-3 text-[#8a7681]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <span className="ml-auto text-[11px] text-[#b59aa4]">1,204 views</span>
          </div>

          {/* book now */}
          <div className="px-3 pb-6">
            <div className="w-full rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] py-2.5 text-center text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(163,11,69,0.8)]">
              Book Now
            </div>
          </div>
        </div>
      </IPhoneFrame>
    </div>
  );
}
