import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
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
      <Footer settings={settings} />
    </main>
  );
}
