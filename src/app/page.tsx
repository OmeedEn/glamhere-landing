import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroRedesign from "@/components/redesign/HeroRedesign";
import BookingSteps from "@/components/redesign/BookingSteps";
import PostTypes from "@/components/redesign/PostTypes";
import ProsClients from "@/components/redesign/ProsClients";
import FaqSection from "@/components/redesign/FaqSection";
import FinalCta from "@/components/redesign/FinalCta";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <HeroRedesign />
      <BookingSteps />
      <PostTypes />
      <ProsClients />
      <FaqSection />
      <FinalCta />
      <Footer settings={settings} />
    </main>
  );
}
