import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "i.ibb.co.com" },
      { protocol: "https", hostname: "ibb.co" },
      { protocol: "https", hostname: "cdn.rootdevs.com" },
    ],
  },
  serverExternalPackages: ["mongoose"],
};

export default nextConfig;
