import FeaturedList from "@/component/HomePage/FeaturedList";
import HomePage from "@/component/HomePage/HomePage";
import { Box } from "@mui/material";
import { MobileRule } from "@/utils/BreakPointMedia";
import { Metadata } from "next";
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "DomCoding",
    description:
      "Home Page has series featured list about react, next.js, nodeJs, react query, redux, docker.",
    openGraph: {
      title: "DomCoding",
      description:
        "Home Page has series featured list about react, next.js, nodeJs, react query, redux, docker.",
      url: "/",
      type: "website",
    },
  };
};

const Home = () => {
  return (
    <Box
      sx={{
        padding: "32px 16px",
        [MobileRule]: {
          padding: "0px 16px 32px 16px",
        },
      }}
    >
      <HomePage />
      <FeaturedList />
    </Box>
  );
};

export default Home;
