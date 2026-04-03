import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GlamHere - Authentic Beauty, Effortless Booking",
  description:
    "The modern social platform and marketplace connecting you directly to top beauty professionals. Discover, connect, and book with confidence.",
  openGraph: {
    title: "GlamHere - Authentic Beauty, Effortless Booking",
    description:
      "The modern social platform and marketplace connecting you directly to top beauty professionals.",
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
