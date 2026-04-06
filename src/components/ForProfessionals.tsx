import Image from "next/image";

const benefits = [
  "Showcase your talent with a professional profile and portfolio",
  "Upload videos, photos, and tutorials with timestamping and product tagging",
  "Engage your audience with likes, comments, shares, and DMs",
  "Build credibility with authentic client reviews and ratings",
  "Convert views to income via in-app booking with customizable services, pricing, and duration",
];

export default function ForProfessionals() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#E8195A]">
            For Professionals
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl">
            The All-in-One Solution for Beauty Professionals &amp; Creators
          </h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Image
                  src="/images/check-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-0.5 flex-shrink-0"
                />
                <span className="text-[#413737]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/phone-professional.png"
            alt="GlamHere professional view"
            width={340}
            height={680}
            className="max-h-[600px] w-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
