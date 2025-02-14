"use client";
import useBreakpoints from "@/share/useBreakPoint";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  const { isTabletSize } = useBreakpoints();
  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: "center",
        marginTop: `${!isTabletSize ? "70px" : "30px"}`,
      }}
    >
      <img
        src={
          "https://res.cloudinary.com/dn797d3j3/image/upload/v1739116308/DomCoding-Blog-Images/not-found_rxox9m.png"
        }
        alt="not-found"
        width={isTabletSize ? 350 : 500}
        height={isTabletSize ? 200 : 300}
        style={{
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        }}
      />
      <Typography variant="bodyL" sx={{ fontStyle: "italic" }} pt={2} pb={2}>
        Sorry, Page Not Found
      </Typography>

      <Link href="/">
        <Button variant="contained" color="secondary">
          Return To Home
        </Button>
      </Link>
    </Box>
  );
}
