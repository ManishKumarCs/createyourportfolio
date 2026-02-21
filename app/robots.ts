import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/test-email/"],
      },
    ],
    sitemap: "https://createyourportfolio.manishdev.tech/sitemap.xml",
  }
}
