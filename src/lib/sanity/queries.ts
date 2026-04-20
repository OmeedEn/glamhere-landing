import { sanityClient } from "./client";

export type HomePageContent = {
  heroTitle?: string;
  heroDescription?: string;
  heroTagline?: string;
  heroCard1?: string;
  heroCard2?: string;
  testimonialsEyebrow?: string;
  testimonialsHeading?: string;
  testimonialsDescription?: string;
  testimonialsCards?: Array<{ title?: string; description?: string }>;
  mapEyebrow?: string;
  mapHeading?: string;
  mapDescription?: string;
};

const HOME_PAGE_QUERY = `*[_type == "homePage" && _id == "homePage"][0]{
  heroTitle,
  heroDescription,
  heroTagline,
  heroCard1,
  heroCard2,
  testimonialsEyebrow,
  testimonialsHeading,
  testimonialsDescription,
  testimonialsCards,
  mapEyebrow,
  mapHeading,
  mapDescription
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
