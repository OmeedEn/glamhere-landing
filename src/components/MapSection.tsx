import Image from "next/image";

const cities = [
  {
    name: "Los Angeles",
    left: "15%",
    top: "36%",
  },
  {
    name: "Orange County",
    left: "22%",
    top: "48%",
  },
  {
    name: "Houston",
    left: "45%",
    top: "68%",
  },
  {
    name: "San Antonio",
    left: "35%",
    top: "56%",
  },
];

const proPopups = [
  {
    name: "Sabrina L.",
    role: "Braids + color",
    avatar: "/images/avatar-elena.png",
    rating: "4.9",
    left: "2%",
    top: "8%",
    rotate: "-2deg",
  },
  {
    name: "Maya T.",
    role: "Editorial makeup",
    avatar: "/images/avatar-juliette.png",
    rating: "5.0",
    left: "55%",
    top: "8%",
    rotate: "1deg",
  },
  {
    name: "Rico A.",
    role: "Cuts + grooming",
    avatar: "/images/avatar-ricardo.png",
    rating: "4.8",
    left: "62%",
    top: "52%",
    rotate: "-1deg",
  },
  {
    name: "Jade K.",
    role: "Lashes + brows",
    avatar: "/images/avatar-elena.png",
    rating: "4.9",
    left: "2%",
    top: "52%",
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
        <div className="relative mx-auto mt-14 min-h-[560px] overflow-hidden rounded-[38px] border border-[#efd3df] bg-[linear-gradient(180deg,#fff9fc_0%,#fff1f6_100%)] shadow-[0_40px_100px_-60px_rgba(163,11,69,0.5)] sm:min-h-[620px] lg:min-h-[680px]">
          {/* Background radial accents */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_55%,rgba(193,26,99,0.10),transparent_28%),radial-gradient(circle_at_45%_70%,rgba(193,26,99,0.08),transparent_22%)]" />

          {/* US outline SVG */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 900 560"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Continental US simplified outline */}
            <path
              d="M120 180C135 165 170 145 210 135C255 123 300 128 345 125C390 120 420 110 465 108C510 104 555 108 590 120C630 134 660 155 685 180C710 208 720 235 718 265C714 300 695 330 670 350C640 375 605 388 565 395C525 400 490 398 450 400C405 403 365 410 325 408C280 406 245 395 210 385C175 374 145 358 128 338C112 318 108 295 112 272C117 248 118 225 120 200Z"
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(163,11,69,0.10)"
              strokeWidth="2"
            />
            {/* Florida peninsula */}
            <path
              d="M620 350C635 370 650 395 660 420C665 438 662 450 652 455C642 458 632 450 625 435C618 418 610 395 605 375"
              fill="rgba(255,255,255,0.6)"
              stroke="rgba(163,11,69,0.10)"
              strokeWidth="2"
            />
            {/* West coast detail */}
            <path
              d="M120 180C108 200 95 230 90 260C86 285 88 310 98 330C108 348 120 340 128 338"
              fill="rgba(255,255,255,0.5)"
              stroke="rgba(163,11,69,0.10)"
              strokeWidth="2"
            />
            {/* Texas outline highlight */}
            <path
              d="M310 340C325 335 345 338 365 345C385 352 400 365 408 382C412 395 410 410 402 420C390 432 372 435 355 430C338 425 325 415 318 400C312 385 310 365 310 340Z"
              fill="rgba(193,26,99,0.06)"
              stroke="rgba(163,11,69,0.15)"
              strokeWidth="2"
            />
            {/* SoCal highlight */}
            <path
              d="M95 280C100 272 108 268 118 270C128 274 132 285 130 298C126 310 118 316 108 314C98 312 92 300 95 280Z"
              fill="rgba(193,26,99,0.06)"
              stroke="rgba(163,11,69,0.15)"
              strokeWidth="2"
            />
            {/* Dashed connection line between SoCal and Texas */}
            <path
              d="M130 290C200 310 270 340 340 370"
              fill="none"
              stroke="rgba(163,11,69,0.12)"
              strokeWidth="2"
              strokeDasharray="8 12"
              strokeLinecap="round"
            />
            {/* Grid lines for map feel */}
            {[140, 220, 300, 380, 460].map((y) => (
              <line
                key={`h-${y}`}
                x1="40"
                y1={y}
                x2="860"
                y2={y}
                stroke="rgba(163,11,69,0.04)"
                strokeWidth="1"
              />
            ))}
            {[180, 320, 460, 600, 740].map((x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="60"
                x2={x}
                y2="520"
                stroke="rgba(163,11,69,0.04)"
                strokeWidth="1"
              />
            ))}
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
