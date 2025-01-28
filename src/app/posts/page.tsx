import React, { Suspense } from "react";
import { Box } from "@mui/material";
import PostItem from "@/component/PostItem/PostItem";
import PaginationComponent from "@/share/components/Pagination/Pagination";
import { Metadata } from "next";
import { getAllPosts, sortPosts } from "@/utils/utils";

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

const Posts = async ({ searchParams }: PostsProps) => {
  const postList = await getAllPosts();
  const sortPostsList = sortPosts(postList);

  const filerPosts = sortPostsList.filter((post) => post.frontmatter.published);
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
