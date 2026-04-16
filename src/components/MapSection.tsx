import Image from "next/image";

export default function MapSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a30b45]">
          Coming soon
        </p>
        <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
          Launching in your area soon
        </h2>
        <p className="mt-4 text-base leading-7 text-[#6f5a64]">
          We&apos;re rolling out city by city. Join the waitlist to be first in
          line when we arrive near you.
        </p>
      </div>

      {/* US map image */}
      <div className="mx-auto mt-10 flex max-w-4xl items-center justify-center px-4 sm:px-8">
        <Image
          src="/images/us-map.png"
          alt="GlamHere US coverage map"
          width={1200}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}
