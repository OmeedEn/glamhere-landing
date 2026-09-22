import Image from "next/image";

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
          <Image
            src="/screens/post-regular.png"
            alt="A glamhere regular post — clients admire, follow, and DM"
            width={1080}
            height={1350}
            className="h-auto w-full"
          />
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
          <Image
            src="/screens/post-service.png"
            alt="A glamhere service post — a price tag that clients can book instantly"
            width={1080}
            height={1350}
            className="h-auto w-full"
          />
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
