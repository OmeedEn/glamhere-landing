import Link from "next/link";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WaitlistEmailCapture from "@/components/WaitlistEmailCapture";
import {
  getHomePageContent,
  getSiteSettings,
} from "@/lib/sanity/queries";

export default async function Home() {
  const [content, settings] = await Promise.all([
    getHomePageContent(),
    getSiteSettings(),
  ]);

  const showHighlights = content?.showHighlights !== false;
  const showFeatures = content?.showFeatures !== false;
  const showTestimonials = content?.showTestimonials !== false;
  const showMap = content?.showMap !== false;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <Hero content={content} settings={settings} />
      {showHighlights && <Stats content={content} />}
      {showFeatures && <Features />}
      {showTestimonials && <Testimonials content={content} />}
      {showMap && <MapSection content={content} />}
      <section className="relative overflow-hidden px-6 py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #fff1f7 0%, #f9d5e5 30%, #e8a0bf 70%, rgba(193,26,99,0.35) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-4xl">
            Ready to book your glam?
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f4a53]">
            Browse real pros and request an appointment in under a minute. No
            payment until it&apos;s confirmed.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/book"
              className="group inline-flex h-[60px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-8 text-base font-semibold text-white shadow-[0_22px_40px_-18px_rgba(163,11,69,0.7)] transition hover:brightness-105"
            >
              Book an appointment
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div
            id="bottom-waitlist"
            className="mx-auto mt-10 max-w-xl border-t border-white/40 pt-8 text-left"
          >
            <p className="mb-3 text-center text-sm font-medium text-[#5f4a53]">
              Or join the launch waitlist for updates.
            </p>
            <WaitlistEmailCapture inputId="bottom-email" source="bottom" />
          </div>
        </div>
      </section>
      <Footer settings={settings} />
    </main>
  );
}
