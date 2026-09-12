import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://leaseiq.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/features",
    "/features/society-management",
    "/features/finance",
    "/features/ai-finance",
    "/features/security",
    "/features/helpdesk",
    "/features/vendors",
    "/features/amenities",
    "/features/community",
    "/solutions",
    "/solutions/committee",
    "/solutions/accountant",
    "/solutions/residents",
    "/solutions/security",
    "/solutions/managers",
    "/pricing",
    "/resources",
    "/contact",
    "/book-demo",
    "/login",
    "/register",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/features") ? 0.8 : 0.6,
  }));
}
