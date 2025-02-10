import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          es: `${BASE_URL}/es`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${BASE_URL}/es/about`,
          de: `${BASE_URL}/de/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
      alternates: {
        languages: {
          es: `${BASE_URL}/es/posts`,
          de: `${BASE_URL}/de/posts`,
        },
      },
    },
  ];
}
