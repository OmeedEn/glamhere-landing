import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingExperience from "@/components/BookingExperience";
import { getBookableProviders } from "@/lib/booking";
import { getSiteSettings } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Book an appointment | glamhere",
  description:
    "Request a booking with a glamhere beauty pro. Find a pro on the map, pick a service or choose your artist, tell us when works, and we'll confirm the details.",
};

// Regenerate the provider/service catalog periodically.
export const revalidate = 300;

export default async function BookPage() {
  const [providers, settings] = await Promise.all([
    getBookableProviders(),
    getSiteSettings(),
  ]);

  const serviceCount = providers.reduce((n, p) => n + p.services.length, 0);
  const locatedCount = providers.filter(
    (p) => p.lat != null && p.lng != null
  ).length;

  const stats = [
    `${providers.length}+ verified beauty pros`,
    `${serviceCount}+ services to choose from`,
    locatedCount > 0 ? `${locatedCount} pros on the map` : "Free to request",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <section className="relative overflow-hidden px-6 pb-14 pt-[120px] text-center sm:pt-36">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #fff1f7 0%, #f9d5e5 22%, #e8a0bf 48%, rgba(193,26,99,0.28) 68%, transparent 88%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#ffffff_92%,#ffffff_100%)]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-[#f3d7e3] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#a30b45]">
            Book on the web
          </span>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#24141c] sm:text-5xl">
            Book your next glam moment
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#5f4a53]">
            Find a pro on the map or pick a service below. A glamhere pro reviews
            your request and confirms — no payment until it&apos;s locked in.
          </p>

          <ul className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {stats.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#4a3640]">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)]">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20">
        {providers.length > 0 ? (
          <BookingExperience providers={providers} />
        ) : (
          <div className="mx-auto max-w-xl px-6">
            <div className="rounded-3xl border border-[#f3d7e3] bg-white p-8 text-center shadow-[0_30px_70px_-45px_rgba(163,11,69,0.45)]">
              <p className="text-[#5f4a53]">
                Our booking catalog is briefly unavailable. Please try again in a
                moment, or email us and we&apos;ll get you booked.
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer settings={settings} />
    </main>
  );
}
