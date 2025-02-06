import React, { Suspense } from "react";
import { Box } from "@mui/material";

import { Metadata } from "next";
import { getAllPosts, sortPosts } from "@/utils/utils";
import ListPosts from "@/component/ListPosts/ListPosts";

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

const Posts = async () => {
  const postList = await getAllPosts();
  const sortPostsList = sortPosts(postList);

  const filerPosts = sortPostsList.filter((post) => post.frontmatter.published);

  return (
    <Box padding={2}>
      <Suspense>
        <ListPosts data={filerPosts} />
      </Suspense>
    </Box>
  );
};

export default Posts;
