import type { ReactNode } from "react";

// A realistic iPhone frame: dynamic island, side buttons, thick bezel, and a
// true 9:19.5 screen. Set the width on the wrapping element; the screen keeps
// its phone proportions. Pass `flat` to drop the side buttons for phones that
// sit behind others in a fanned cluster.
export default function IPhoneFrame({
  children,
  screenClassName = "",
  flat = false,
}: {
  children: ReactNode;
  screenClassName?: string;
  flat?: boolean;
}) {
  return (
    <div className="relative">
      {!flat && (
        <>
          {/* silent switch + volume (left) */}
          <div className="absolute -left-[3px] top-[16%] h-6 w-[3px] rounded-l-sm bg-[#0b0709]" />
          <div className="absolute -left-[3px] top-[26%] h-10 w-[3px] rounded-l-sm bg-[#0b0709]" />
          <div className="absolute -left-[3px] top-[38%] h-10 w-[3px] rounded-l-sm bg-[#0b0709]" />
          {/* power (right) */}
          <div className="absolute -right-[3px] top-[30%] h-16 w-[3px] rounded-r-sm bg-[#0b0709]" />
        </>
      )}

      <div className="rounded-[2.9rem] border-[11px] border-[#0d0a0c] bg-[#0d0a0c] shadow-[0_45px_100px_-30px_rgba(0,0,0,0.6)]">
        <div
          className={`relative aspect-[9/19.5] overflow-hidden rounded-[2.15rem] bg-white ${screenClassName}`}
        >
          {/* dynamic island */}
          <div className="absolute left-1/2 top-[10px] z-30 h-[22px] w-[74px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}
