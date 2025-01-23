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

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  paddingTop: theme.spacing(2),
  fontStyle: "italic",
}));

export const StyledTypography = styled(Typography)(() => ({
  lineHeight: 1.75,
}));

const PostItem = ({ title, description, date, slug }: PostItemProps) => {
  return (
    <div>
      <Box pt={4}>
        <StyledLink href={`posts/${slug}`}>
          <StyledTitle variant="h5">{title}</StyledTitle>
        </StyledLink>

        <StyledBox>
          <Calendar />
          <StyledTypography>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </StyledTypography>
        </StyledBox>

        <Typography variant="bodyS">{description}</Typography>
      </Box>
    </div>
  );
};

export default PostItem;
