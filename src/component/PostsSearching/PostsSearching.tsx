"use client";
import { Post } from "@/types/mdx.types";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import PostItem from "../PostItem/PostItem";
import { Box, Typography } from "@mui/material";

interface PostsSearchingProps {
  data: Array<Post>;
}

const PostsSearching = ({ data }: PostsSearchingProps) => {
  const searchParams = useSearchParams();
  const searchFieldText =
    typeof window !== "undefined" && window.localStorage.getItem("searchText");
  const searchText =
    searchParams.get("searchtext") || (searchFieldText as string) || "";

  const postsList = useMemo(() => {
    const lowerKeyword = searchText.toLowerCase();
    if (!lowerKeyword || lowerKeyword.length < 2) return [];
    const filtered = data.filter(
      (post) =>
        post.frontmatter.title.toLowerCase().includes(lowerKeyword) ||
        post.frontmatter?.description?.toLowerCase().includes(lowerKeyword) ||
        post.content?.toLowerCase().includes(lowerKeyword)
    );
    return filtered;
  }, [data, searchText]);
  return (
    <div>
      {searchText.length > 1 && (
        <Box>
          <Typography>
            {`Found ${postsList.length} ${postsList.length > 1 ? "results" : "result"} for  ' ${searchText} '`}
          </Typography>
        </Box>
      )}
      {postsList.map((post) => (
        <PostItem
          title={post.frontmatter.title}
          description={post.frontmatter.description || ""}
          date={post.frontmatter.date}
          slug={post.slug}
          key={post.slug}
        />
      ))}
    </div>
  );
};

export default PostsSearching;
