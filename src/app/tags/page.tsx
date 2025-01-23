import { Box } from "@mui/material";
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

const Tags = () => {
  return (
    <Box sx={{ padding: "16px", height: "100vh" }}>
      <p>Tags</p>
    </Box>
  );
};

export default Tags;
