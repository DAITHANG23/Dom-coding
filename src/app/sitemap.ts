import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${BASE_URL}/es`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${BASE_URL}/es/about`,
          de: `${BASE_URL}/de/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${BASE_URL}/es/posts`,
          de: `${BASE_URL}/de/posts`,
        },
      },
    },
  ];
}
