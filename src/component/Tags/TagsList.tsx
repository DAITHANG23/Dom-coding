"use client";
import { styled, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
interface TagsProps {
  tag: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: "12px",
  color: theme.palette.common.black,
  ...theme.applyStyles("dark", {
    color: `${theme.palette.grey[500]}`,
  }),
  textDecorationStyle: "dashed",
  textDecorationLine: "underline",
  textUnderlineOffset: "4px",
  "&:hover": {
    color: theme.palette.primary.main,
    ...theme.applyStyles("dark", {
      color: theme.palette.primary.main,
    }),
    fontWeight: "bold",
    transition: "all 0.3 ease-in-out",
  },
}));

const StyledTypography = styled(Typography)(() => ({
  textDecorationStyle: "dashed",

  "&:hover": {
    fontWeight: "bold",
    transition: "all 0.3 ease-in-out",
  },
}));
const Tags = ({ tag }: TagsProps) => {
  return (
    <StyledLink href={`/tags/${tag}`} key={tag}>
      <StyledTypography>{`#${tag}`}</StyledTypography>
    </StyledLink>
  );
};

export default Tags;
