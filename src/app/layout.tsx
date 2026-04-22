import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { imageUrl } from "@/lib/sanity/image";
import { getSiteSettings } from "@/lib/sanity/queries";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const DEFAULT_TITLE = "glamhere | The beauty industry finally has its own platform";
const DEFAULT_DESCRIPTION =
  "glamhere is a social marketplace for the beauty industry. Discover real portfolios, connect with professionals, and book all in one place.";
const DEFAULT_OG_DESCRIPTION =
  "Discover, connect, and book with glamhere, the beauty industry\u2019s social marketplace.";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const title = settings?.seoTitle || DEFAULT_TITLE;
  const description = settings?.seoDescription || DEFAULT_DESCRIPTION;
  const ogTitle = settings?.ogTitle || title;
  const ogDescription = settings?.ogDescription || DEFAULT_OG_DESCRIPTION;
  const ogImageSrc = imageUrl(settings?.ogImage, { width: 1200, height: 630 });

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "none",
      },
    },
    openGraph: {
      siteName: "glamhere",
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url: "https://glamhereapp.com",
      ...(ogImageSrc ? { images: [{ url: ogImageSrc, width: 1200, height: 630 }] } : {}),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
