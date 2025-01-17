import { Post } from "@/types/mdx.types";
import path from "path";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Box } from "@mui/material";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getAllPosts(): Promise<Post[]> {
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

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     params: { slug: post.frontmatter.description },
//   }));
// }
const PostPage = async ({ params }: PostPageProps) => {
  const posts = await getAllPosts();

  const post = posts.find((post) => post.slug === params.slug[0]);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  return (
    <div style={{ padding: "16px" }}>
      <Box>{post.frontmatter.title}</Box>
      <Box>{post.content}</Box>
    </div>
  );
};

export default PostPage;
