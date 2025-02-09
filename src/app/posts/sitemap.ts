import { getAllPosts } from "@/utils/utils";
import { MetadataRoute } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: post.frontmatter.date,
  }));
}
