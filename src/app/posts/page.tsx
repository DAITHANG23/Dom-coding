import React, { Suspense } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/mdx.types";
import { Box } from "@mui/material";
import PostItem from "@/component/PostItem/PostItem";
import PaginationComponent from "@/share/components/Pagination/Pagination";
import { Metadata } from "next";

const POSTS_PER_PAGE = 3;

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Posts | DomCoding",
    description: "Posts about programming and web development.",
    openGraph: {
      title: "Posts | DomCoding",
      description: "Posts about programming and web development.",
      url: "/posts",
      type: "website",
    },
  };
};

interface PostsProps {
  searchParams: { page: string };
}

function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "content", "posts");

  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory ${postsDirectory} does not exist.`);
    return [];
  }

  const files = fs.readdirSync(postsDirectory);

  return files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    const post: Post = {
      slug,
      frontmatter: {
        title: frontmatter.title || "Untitled",
        date: frontmatter.date || "",
        description: frontmatter.description,
        published: frontmatter.published || false,
        tags: frontmatter.tags || [],
      },
    };
    return post;
  });
}
const Posts = async ({ searchParams }: PostsProps) => {
  const postList = getAllPosts();
  const filerPosts = postList.filter((post) => post.frontmatter.published);
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = Math.ceil(filerPosts.length / POSTS_PER_PAGE);

  const displayPosts = filerPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <Box padding={2}>
      {displayPosts.map((post) => {
        return (
          <PostItem
            title={post.frontmatter.title}
            description={post.frontmatter.description || ""}
            date={post.frontmatter.date}
            slug={post.slug}
            key={post.slug}
          />
        );
      })}
      <Suspense>
        <PaginationComponent totalPages={totalPages} />
      </Suspense>
    </Box>
  );
};

export default Posts;
