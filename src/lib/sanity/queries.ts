import type { SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "./client";

export type HomePageContent = {
  heroTitle?: string;
  heroDescription?: string;
  heroTagline?: string;
  heroCard1?: string;
  heroCard2?: string;
  featuredPros?: Array<{
    name?: string;
    role?: string;
    avatar?: SanityImageSource;
  }>;
  highlights?: Array<{ title?: string; description?: string }>;
  testimonialsEyebrow?: string;
  testimonialsHeading?: string;
  testimonialsDescription?: string;
  testimonialsCards?: Array<{ title?: string; description?: string }>;
  mapEyebrow?: string;
  mapHeading?: string;
  mapDescription?: string;
  mapImage?: SanityImageSource;
  showHighlights?: boolean;
  showFeatures?: boolean;
  showTestimonials?: boolean;
  showMap?: boolean;
};

export type SiteSettings = {
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImageSource;
  footerTagline?: string;
  copyrightName?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  facebookUrl?: string;
  contactEmail?: string;
};

const HOME_PAGE_QUERY = `*[_type == "homePage" && _id == "homePage"][0]{
  heroTitle,
  heroDescription,
  heroTagline,
  heroCard1,
  heroCard2,
  featuredPros[]{
    name,
    role,
    avatar
  },
  highlights[]{
    title,
    description
  },
  testimonialsEyebrow,
  testimonialsHeading,
  testimonialsDescription,
  testimonialsCards[]{
    title,
    description
  },
  mapEyebrow,
  mapHeading,
  mapDescription,
  mapImage,
  showHighlights,
  showFeatures,
  showTestimonials,
  showMap
}`;

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  seoTitle,
  seoDescription,
  ogTitle,
  ogDescription,
  ogImage,
  footerTagline,
  copyrightName,
  appStoreUrl,
  googlePlayUrl,
  instagramUrl,
  tiktokUrl,
  facebookUrl,
  contactEmail
}`;

export async function getHomePageContent(): Promise<HomePageContent | null> {
  if (!sanityClient) return null;
  try {
    const data = await sanityClient.fetch<HomePageContent | null>(
      HOME_PAGE_QUERY,
      {},
      { next: { revalidate: 60, tags: ["homePage"] } }
    );
    return data ?? null;
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!sanityClient) return null;
  try {
    const data = await sanityClient.fetch<SiteSettings | null>(
      SITE_SETTINGS_QUERY,
      {},
      { next: { revalidate: 60, tags: ["siteSettings"] } }
    );
    return data ?? null;
  } catch {
    return null;
  }
}
