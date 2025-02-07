"use client";
import { styled, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
interface TagsProps {
  tag: string;
  isBigSize?: boolean;
}

const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: "2px",
  color: theme.palette.common.black,
  ...theme.applyStyles("dark", {
    color: `${theme.palette.grey[500]}`,
  }),
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
    ...theme.applyStyles("dark", {
      color: theme.palette.primary.main,
    }),
    fontWeight: "bold",
    transition: "all 0.3 ease-in-out",
  },
}));

const StyledTypography = styled(Typography)<{ isBigSize?: boolean }>(
  ({ theme, isBigSize }) => ({
    backgroundColor: "#F1F5F9",
    padding: "2px 10px",
    borderRadius: "8px",
    fontSize: isBigSize ? "18px" : "12px",
    color: theme.palette.common.black,

    "&:hover": {
      fontWeight: "bold",
      transition: "all 0.3 ease-in-out",
    },
  })
);
const TagsList = ({ tag, isBigSize }: TagsProps) => {
  return (
    <StyledLink href={`/tags/${tag}`} key={tag}>
      <StyledTypography isBigSize={isBigSize}>{`${tag}`}</StyledTypography>
    </StyledLink>
  );
};

export default TagsList;
