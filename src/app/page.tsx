import FeaturedList from "@/component/HomePage/FeaturedList";
import HomePage from "@/component/HomePage/HomePage";
import { Box } from "@mui/material";
import { MobileRule } from "@/utils/BreakPointMedia";

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
