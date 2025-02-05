import { Post } from "@/types/mdx.types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.frontmatter.date > b.frontmatter.date) return -1;
    if (a.frontmatter.date < b.frontmatter.date) return 1;
    return 0;
  });
}

export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "content", "posts");

  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory ${postsDirectory} does not exist.`);
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const postsPromises = files.map(async (filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const post: Post = {
      slug,
      frontmatter: {
        title: frontmatter.title || "Untitled",
        date: frontmatter.date || "",
        description: frontmatter.description,
        published: frontmatter.published || false,
        tags: frontmatter.tags || [],
      },
      content,
    };
    return post;
  });
  return await Promise.all(postsPromises);
}

export async function getPostFromParams(slug: string) {
  const posts = await getAllPosts();

  const post = posts.find((post) => post.slug === slug);
  if (!post) return null;

  return post;
}

export async function getPostsFromParams(slug: string) {
  const posts = await getAllPosts();

  const postsList = posts.filter((post) =>
    post.frontmatter.tags?.some((item) => item === slug)
  );

  if (!postsList) return [];

  return postsList;
}
