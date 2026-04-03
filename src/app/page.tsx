import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HeroImages from "@/components/HeroImages";
import Features from "@/components/Features";
import ForProfessionals from "@/components/ForProfessionals";
import ForClients from "@/components/ForClients";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <HeroImages />
      <Features />
      <ForProfessionals />
      <ForClients />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
