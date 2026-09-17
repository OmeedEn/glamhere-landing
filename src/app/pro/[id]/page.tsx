import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProviderProfileClient from "@/components/ProviderProfileClient";
import { getProviderProfile } from "@/lib/providers";
import { getSiteSettings } from "@/lib/sanity/queries";

export const revalidate = 120;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const profile = await getProviderProfile(id);
  if (!profile) return { title: "Book a pro | glamhere" };
  return {
    title: `${profile.name} | Book on glamhere`,
    description:
      profile.bio ||
      `Browse ${profile.name}'s work and book an appointment on glamhere.`,
  };
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [profile, settings] = await Promise.all([
    getProviderProfile(id),
    getSiteSettings(),
  ]);

  if (!profile) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <ProviderProfileClient profile={profile} />
      <Footer settings={settings} />
    </main>
  );
}
