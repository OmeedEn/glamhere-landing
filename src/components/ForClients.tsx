import Image from "next/image";

const benefits = [
  {
    title: "Discover Top Talent",
    desc: "Browse portfolios, watch tutorials, and read authentic reviews.",
  },
  {
    title: "Connect Meaningfully",
    desc: "Follow and message your favorite professionals directly.",
  },
  {
    title: "Book Instantly",
    desc: "View real-time availability and schedule appointments in-app.",
  },
  {
    title: "Find Local Experts",
    desc: "Geo-location discovery puts the best pros near you at your fingertips.",
  },
  {
    title: "All Your Beauty Bookings, One App",
    desc: "Manage multi-category appointments from a single dashboard.",
  },
];

export default function ForClients() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <Image
            src="/images/phone-client.png"
            alt="GlamHere client view"
            width={340}
            height={680}
            className="max-h-[600px] w-auto drop-shadow-2xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a30b45]">
            For Clients
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl">
            <span className="text-[#a30b45]" style={{ fontFamily: "var(--font-brand)", letterSpacing: "-1px" }}><span className="font-bold italic">glam</span><span className="font-normal">here</span></span> &mdash; Built for Clients Too
          </h2>
          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <Image
                  src="/images/check-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-0.5 flex-shrink-0"
                />
                <div>
                  <span className="font-semibold text-[#1a1a1a]">
                    {b.title}
                  </span>
                  <span className="text-[#6e5e5e]"> &mdash; {b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
