import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/case-studies", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE.url}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
