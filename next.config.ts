import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // react-leaflet's map crashes on StrictMode's dev double-mount
  // ("Map container is being reused by another instance"). StrictMode is inert
  // in production, so disabling it only removes that dev-only crash.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
