import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { getHomePageContent } from "@/lib/sanity/queries";

export default async function Home() {
  const content = await getHomePageContent();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <Hero content={content} />
      <Stats />
      <Features />
      <Testimonials content={content} />
      <MapSection content={content} />
      <Footer />
    </main>
  );
}
