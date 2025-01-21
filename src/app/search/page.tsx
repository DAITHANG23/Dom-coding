import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Search | DomCoding",
    description: "Search page of DomCoding",
    openGraph: {
      title: "Search | DomCoding",
      description: "Search page of DomCoding",
      url: "/search",
      type: "website",
    },
  };
};

const Search = () => {
  return (
    <Box sx={{ padding: "16px", height: "100vh" }}>
      <p>Search</p>
    </Box>
  );
};

export default Search;
