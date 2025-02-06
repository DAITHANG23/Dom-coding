"use client";
import { Post } from "@/types/mdx.types";
import React, { Suspense } from "react";
import PostItem from "../PostItem/PostItem";
import { useSearchParams } from "next/navigation";
import PaginationComponent from "@/share/components/Pagination/Pagination";
const POSTS_PER_PAGE = 3;
interface ListPostsProps {
  data: Array<Post>;
}

const ListPosts = ({ data }: ListPostsProps) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(data.length / POSTS_PER_PAGE);

  const displayPosts = data.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  return (
    <div>
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
    </div>
  );
};

export default ListPosts;
