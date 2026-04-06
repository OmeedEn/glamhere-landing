import Image from "next/image";

const features = [
  {
    title: "Authentic Content",
    desc: "See real work from real professionals -- no stock photos, no filters.",
    image: "/images/feature-authentic.png",
  },
  {
    title: "Local Discovery",
    desc: "Find talented beauty pros near you with geo-location powered search.",
    image: "/images/feature-discovery.png",
  },
  {
    title: "Build Community",
    desc: "Follow, engage, and build lasting relationships with your favorite pros.",
    image: "/images/feature-community.png",
  },
  {
    title: "Seamless Booking",
    desc: "Book appointments instantly with transparent pricing and availability.",
    image: "/images/feature-booking.png",
  },
];

export default function Features() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
          <span className="text-[#E8195A]">GLAMHERE</span> Connects Beauty
          Professionals and Clients in a Meaningful Way.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={400}
                  height={300}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6e5e5e]">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
