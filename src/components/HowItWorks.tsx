import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Personalize with your beauty preferences and style.",
    image: "/images/step1.png",
  },
  {
    num: "02",
    title: "Discover & Connect",
    desc: "Browse content, read reviews, and message professionals.",
    image: "/images/step2.png",
  },
  {
    num: "03",
    title: "Book & Enjoy",
    desc: "Schedule seamlessly and experience beauty on your terms.",
    image: "/images/step3.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center">
              <div className="relative">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={260}
                  height={520}
                  className="mx-auto max-h-[440px] w-auto drop-shadow-xl"
                />
              </div>
              <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8195A] text-sm font-bold text-white">
                {s.num}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-[#1a1a1a]">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6e5e5e]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
