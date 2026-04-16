import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <MapSection />
      <Footer />
    </main>
  );
}
