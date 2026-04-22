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
            Be first in line when we launch
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5f4a53]">
            No subscription. No catch. Free to join.
          </p>
          <div id="bottom-waitlist" className="mx-auto mt-8 max-w-xl text-left">
            <WaitlistEmailCapture inputId="bottom-email" source="bottom" />
          </div>
        </div>
      </section>
      <Footer settings={settings} />
    </main>
  );
}
