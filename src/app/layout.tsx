import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "glamhere | The beauty industry finally has its own platform",
  description:
    "glamhere is a social marketplace for the beauty industry. Discover real portfolios, connect with professionals, and book all in one place.",
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
    title: "glamhere | The beauty industry finally has its own platform",
    description:
      "Discover, connect, and book with glamhere, the beauty industry’s social marketplace.",
    type: "website",
    url: "https://glamhereapp.com",
  },
};

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
