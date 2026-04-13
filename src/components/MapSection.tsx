import Image from "next/image";

const cities = [
  {
    name: "Los Angeles",
    left: "15%",
    top: "28%",
    region: "california",
  },
  {
    name: "Orange County",
    left: "38%",
    top: "28%",
    region: "california",
  },
  {
    name: "Houston",
    left: "62%",
    top: "58%",
    region: "texas",
  },
  {
    name: "San Antonio",
    left: "40%",
    top: "58%",
    region: "texas",
  },
];

const proPopups = [
  {
    name: "Sabrina L.",
    role: "Braids + color",
    avatar: "/images/avatar-elena.png",
    rating: "4.9",
    left: "2%",
    top: "6%",
    rotate: "-2deg",
  },
  {
    name: "Maya T.",
    role: "Editorial makeup",
    avatar: "/images/avatar-juliette.png",
    rating: "5.0",
    left: "52%",
    top: "6%",
    rotate: "1deg",
  },
  {
    name: "Rico A.",
    role: "Cuts + grooming",
    avatar: "/images/avatar-ricardo.png",
    rating: "4.8",
    left: "65%",
    top: "40%",
    rotate: "-1deg",
  },
  {
    name: "Jade K.",
    role: "Lashes + brows",
    avatar: "/images/avatar-elena.png",
    rating: "4.9",
    left: "2%",
    top: "44%",
    rotate: "2deg",
  },
];

export default function MapSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-5xl">
            Launching in Southern California and Texas
          </h2>
          <p className="mt-4 text-base italic leading-8 text-[#6f5a64]">
            More markets coming soon
          </p>
        </div>

        {/* Map */}
        <div className="relative mx-auto mt-14 min-h-[420px] overflow-hidden rounded-[38px] border border-[#efd3df] bg-[linear-gradient(180deg,#fff9fc_0%,#fff1f6_100%)] shadow-[0_40px_100px_-60px_rgba(163,11,69,0.5)] sm:min-h-[620px] lg:min-h-[680px]">
          {/* Background radial accents */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_55%,rgba(193,26,99,0.10),transparent_28%),radial-gradient(circle_at_45%_70%,rgba(193,26,99,0.08),transparent_22%)]" />

          {/* Dotted trails */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 900 560"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Trail: LA to Orange County */}
            <path
              d="M180 180C240 170 280 170 360 180"
              fill="none"
              stroke="rgba(163,11,69,0.18)"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
            {/* Trail: California cluster to Texas cluster (curved) */}
            <path
              d="M300 200C380 260 420 300 420 340"
              fill="none"
              stroke="rgba(163,11,69,0.14)"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
            {/* Trail: San Antonio to Houston */}
            <path
              d="M400 350C460 340 500 340 580 350"
              fill="none"
              stroke="rgba(163,11,69,0.18)"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
            {/* Decorative scattered dots */}
            {[
              [120, 120], [700, 140], [80, 400], [750, 420],
              [450, 100], [200, 450], [650, 260], [340, 460],
              [560, 130], [150, 300], [600, 450], [480, 250],
            ].map(([cx, cy], i) => (
              <circle
                key={`dot-${i}`}
                cx={cx}
                cy={cy}
                r="2"
                fill={`rgba(163,11,69,${0.06 + (i % 3) * 0.03})`}
              />
            ))}
            {/* California region label */}
            <text
              x="220"
              y="140"
              fill="rgba(163,11,69,0.12)"
              fontSize="14"
              fontWeight="600"
              letterSpacing="0.15em"
              textAnchor="middle"
            >
              CALIFORNIA
            </text>
            {/* Texas region label */}
            <text
              x="490"
              y="420"
              fill="rgba(163,11,69,0.12)"
              fontSize="14"
              fontWeight="600"
              letterSpacing="0.15em"
              textAnchor="middle"
            >
              TEXAS
            </text>
          </svg>

          {/* City pins */}
          {cities.map((city) => (
            <div
              key={city.name}
              className="absolute z-10"
              style={{ left: city.left, top: city.top }}
            >
              <div className="relative flex flex-col items-center">
                {/* Pulse ring */}
                <div className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#c11a63]/15" style={{ animationDuration: "3s" }} />
                {/* Pin */}
                <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#a30b45] shadow-[0_8px_24px_-6px_rgba(163,11,69,0.8)]">
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>
                {/* City label */}
                <div className="mt-2 whitespace-nowrap rounded-full border border-[#f3d7e3] bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#24141c] shadow-sm backdrop-blur-sm">
                  {city.name}
                </div>
              </div>
            </div>
          ))}

          {/* Pro popups on the map */}
          {proPopups.map((pro) => (
            <div
              key={pro.name}
              className="absolute z-20 hidden sm:block"
              style={{ left: pro.left, top: pro.top, transform: `rotate(${pro.rotate})` }}
            >
              <div className="w-48 rounded-[22px] border border-[#f3d7e3] bg-white/96 p-3.5 shadow-[0_20px_50px_-20px_rgba(163,11,69,0.5)] backdrop-blur-sm transition hover:shadow-[0_24px_60px_-20px_rgba(163,11,69,0.6)]">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={pro.avatar}
                    alt={pro.name}
                    width={38}
                    height={38}
                    className="h-[38px] w-[38px] rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#24141c]">
                      {pro.name}
                    </p>
                    <p className="truncate text-xs text-[#7d6772]">{pro.role}</p>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5 text-[#a30b45]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-[#24141c]">{pro.rating}</span>
                  </div>
                  <span className="rounded-full bg-[#a30b45] px-3 py-1 text-[11px] font-semibold text-white">
                    Book
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom banner */}
          <div className="absolute inset-x-5 bottom-5 z-30 rounded-[26px] border border-[#f2d5e1] bg-white/95 p-5 shadow-[0_24px_50px_-36px_rgba(163,11,69,0.45)] backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-[#fff1f7] px-6 py-2.5 text-sm font-semibold text-[#a30b45]">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
