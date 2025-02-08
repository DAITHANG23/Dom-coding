import PostsSearching from "@/component/PostsSearching/PostsSearching";
import TextFieldSearch from "@/component/TextFieldSearch/TextFieldSearch";
import { getAllPosts } from "@/utils/utils";

import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import React, { Suspense } from "react";
export const metadata: Metadata = {
  title: "Search | DomCoding",
  description: "Search page of DomCoding",
  openGraph: {
    title: "Search | DomCoding",
    description: "Search page of DomCoding",
    url: "/search",
    type: "website",
  },
};
const Search = async () => {
  const postList = await getAllPosts();

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="bodyL">Search</Typography>
      <Typography sx={{ fontStyle: "italic" }} pt={1}>
        Search any article ...
      </Typography>
      <Box pt={3}>
        <Suspense>
          <TextFieldSearch />
        </Suspense>
      </Box>
      <Box pt={3} mb={3}>
        <Suspense>
          <PostsSearching data={postList} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Search;
