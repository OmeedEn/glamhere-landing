"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { ProviderProfile } from "@/lib/providers";
import { toBookableProvider } from "@/lib/providers";
import BookingForm from "./BookingForm";

const money = (n: number) =>
  n === 0 ? "Free" : `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;

export default function ProviderProfileClient({
  profile,
}: {
  profile: ProviderProfile;
}) {
  const [showBooking, setShowBooking] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const bookable = toBookableProvider(profile);
  const location = [profile.city, profile.state].filter(Boolean).join(", ");

  function openBooking() {
    setShowBooking(true);
    // Wait a tick for the section to mount, then scroll to it.
    requestAnimationFrame(() =>
      bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  }

  const socials = [
    profile.instagram && { label: "Instagram", href: profile.instagram },
    profile.tiktok && { label: "TikTok", href: profile.tiktok },
    profile.website && { label: "Website", href: profile.website },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden px-6 pb-8 pt-[104px] sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #fff1f7 0%, #f9d5e5 30%, #e8a0bf 65%, rgba(193,26,99,0.25) 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#ffffff_88%,#ffffff_100%)]" />

        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/book"
            className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#f3d7e3] bg-white/80 px-4 py-2 text-sm font-medium text-[#a30b45] shadow-sm transition hover:border-[#c11a63]/40 hover:bg-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to map
          </Link>

          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-4 border-white bg-[#f3d5e2] shadow-[0_18px_40px_-16px_rgba(163,11,69,0.5)]">
              {profile.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] text-3xl font-semibold text-white">
                  {profile.name.trim()[0]?.toUpperCase()}
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.02em] text-[#24141c]">
                {profile.name}
              </h1>
              {profile.username && (
                <p className="text-sm text-[#a30b45]">@{profile.username}</p>
              )}
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-[#5f4a53] sm:justify-start">
                {location && <span>📍 {location}</span>}
                {profile.averageRating != null && profile.totalRatings > 0 && (
                  <span>
                    ⭐ {profile.averageRating.toFixed(1)} ({profile.totalRatings})
                  </span>
                )}
                {profile.followers > 0 && (
                  <span>{profile.followers.toLocaleString()} followers</span>
                )}
              </div>
              {profile.bio && (
                <p className="mt-3 max-w-xl text-[15px] leading-6 text-[#4a3640]">
                  {profile.bio}
                </p>
              )}
              {socials.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#f3d7e3] bg-white/80 px-3 py-1 text-xs font-medium text-[#a30b45] transition hover:border-[#c11a63]/40"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center sm:justify-start">
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#c11a63_0%,#961049_100%)] px-8 text-base font-semibold text-white shadow-[0_22px_40px_-18px_rgba(163,11,69,0.7)] transition hover:brightness-105"
            >
              Book appointment
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-3xl px-6 pb-4">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#a30b45]">
          Portfolio
        </h2>
        {profile.posts.length === 0 ? (
          <p className="text-[#6f5a64]">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {profile.posts.map((post, i) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-[#f6e6ee]"
              >
                {post.isVideo ? (
                  <video
                    src={post.src ?? undefined}
                    poster={post.poster ?? undefined}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.src ?? ""}
                    alt={post.title ?? "Portfolio post"}
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                )}
                {post.isVideo && (
                  <span className="absolute right-1.5 top-1.5 rounded-full bg-black/50 p-1">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
                {post.likes > 0 && (
                  <span className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white">
                    ♥ {post.likes}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Booking (revealed on demand) */}
      {showBooking && (
        <section ref={bookingRef} className="scroll-mt-24 px-6 py-10">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-5 text-center font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[#24141c]">
              Book with {profile.name}
            </h2>
            {profile.services.length === 0 ? (
              <p className="text-center text-[#6f5a64]">
                {profile.name} hasn&apos;t listed bookable services yet.
              </p>
            ) : (
              <BookingForm
                providers={[bookable]}
                categories={[]}
                initialProviderId={profile.id}
              />
            )}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox !== null && profile.posts[lightbox] && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <figure className="max-h-[85vh] max-w-2xl" onClick={(e) => e.stopPropagation()}>
            {profile.posts[lightbox].isVideo ? (
              <video
                src={profile.posts[lightbox].src ?? undefined}
                poster={profile.posts[lightbox].poster ?? undefined}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-auto rounded-lg"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.posts[lightbox].src ?? ""}
                alt={profile.posts[lightbox].title ?? "Portfolio post"}
                className="max-h-[80vh] w-auto rounded-lg object-contain"
              />
            )}
            {profile.posts[lightbox].title && (
              <figcaption className="mt-2 text-center text-sm text-white/85">
                {profile.posts[lightbox].title}
              </figcaption>
            )}
          </figure>
        </div>
      )}

      {/* Screen-reader hint of price range so the header isn't purely visual */}
      {profile.services.length > 0 && (
        <p className="sr-only">
          Services from {money(Math.min(...profile.services.map((s) => s.price)))}
        </p>
      )}
    </>
  );
}
