import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      { source: "/resident-portal", destination: "/dashboard/resident-portal" },
      { source: "/residents", destination: "/dashboard/residents" },
      { source: "/complaints", destination: "/dashboard/complaints" },
      { source: "/facilities", destination: "/dashboard/facilities" },
      { source: "/intelligence", destination: "/dashboard/intelligence" },
      { source: "/analytics", destination: "/dashboard/analytics" },
      { source: "/operations", destination: "/dashboard/operations" },
      { source: "/audit", destination: "/dashboard/audit" },
    ];
  },
};

export default nextConfig;
