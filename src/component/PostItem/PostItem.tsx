"use client";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Calendar from "@/icons/Calendar";
import Link from "next/link";

interface PostItemProps {
  title: string;
  description: string;
  date: Date;
  slug: string;
}

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
  }),

  "&:hover": { textDecoration: "underline", cursor: "pointer" },
}));

const PostItem = ({ title, description, date, slug }: PostItemProps) => {
  return (
    <div>
      <Box pt={4}>
        <Link href={`posts/${slug}`} style={{ textDecoration: "none" }}>
          <StyledTitle variant="h5">{title}</StyledTitle>
        </Link>

        <Box
          sx={{
            display: "flex",
            gap: "8px",
            paddingTop: "16px",
            fontStyle: "italic",
          }}
        >
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="bodyS">{description}</Typography>
      </Box>
    </div>
  );
};

export default PostItem;
