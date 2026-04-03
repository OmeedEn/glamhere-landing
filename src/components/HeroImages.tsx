import Image from "next/image";

export default function HeroImages() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-bg-1.png"
            alt="Beauty professional at work"
            width={600}
            height={400}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-bg-2.png"
            alt="Styling session"
            width={600}
            height={400}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-bg-3.png"
            alt="Client transformation"
            width={600}
            height={400}
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      </div>
    </section>
  );
}
