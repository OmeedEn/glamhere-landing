import Image from "next/image";
import type { HomePageContent } from "@/lib/sanity/queries";
import { imageUrl } from "@/lib/sanity/image";

const DEFAULT_EYEBROW = "Coming soon";
const DEFAULT_HEADING = "Launching in your area soon";
const DEFAULT_DESCRIPTION =
  "We're rolling out city by city. Join the waitlist to be first in line when we arrive near you.";
const DEFAULT_MAP_SRC = "/images/us-map.png";

type MapSectionProps = {
  content?: Pick<
    HomePageContent,
    "mapEyebrow" | "mapHeading" | "mapDescription" | "mapImage"
  > | null;
};

export default function MapSection({ content }: MapSectionProps = {}) {
  const eyebrow = content?.mapEyebrow || DEFAULT_EYEBROW;
  const heading = content?.mapHeading || DEFAULT_HEADING;
  const description = content?.mapDescription || DEFAULT_DESCRIPTION;
  const mapSrc = imageUrl(content?.mapImage, { width: 1600 }) || DEFAULT_MAP_SRC;

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a30b45]">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-7 text-[#6f5a64]">
          {description}
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl items-center justify-center px-4 sm:px-8">
        <Image
          src={mapSrc}
          alt="glamhere US coverage map"
          width={1200}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}
