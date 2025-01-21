import { Post } from "@/types/mdx.types";
import path from "path";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Callout from "@/share/components/mdx-component/Callout";
import { Metadata } from "next";

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

async function getPostFromParams(params: PostPageProps["params"]) {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === params.slug[0]);
  if (!post) return null;

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  return {
    title: `Posts | ${post?.frontmatter.title || "Untitled"}`,
    description: post?.frontmatter.description || "",
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  return (
    <div style={{ padding: "16px" }}>
      <MDXRemote source={post.content || ""} components={{ Callout }} />
    </div>
  );
};

export default PostPage;
