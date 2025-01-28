import TagsList from "@/component/Tags/TagsList";
import { LIST_ITEM_TAGS } from "@/constant/constants";
import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tags | DomCoding",
  description: "Tags page of DomCoding",
  openGraph: {
    title: "Tags | DomCoding",
    description: "Tags page of DomCoding",
    url: "/tags",
    type: "website",
  },
};

const Tags = async () => {
  return (
    <Box sx={{ padding: "16px", height: "80vh" }}>
      <Typography variant="bodyL">Tags</Typography>
      <Typography pt={1}>All the tags uses in posts.</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", paddingTop: "32px" }}>
        {LIST_ITEM_TAGS.map((item) => {
          return <TagsList tag={item} key={item} isBigSize />;
        })}
      </Box>
    </Box>
  );
};

export default Tags;
