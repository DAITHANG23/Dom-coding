"use client";
import { styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface WarraperComponentProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  content?: string;
}

const useStyles = makeStyles(() => ({
  root: { textAlign: "center" },
}));

const StyledTitle = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
  }),
}));

const WarraperComponent = ({
  children,
  className,
  title,
  content,
}: WarraperComponentProps) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`}>
      <Typography>
        My <StyledTitle>{title}</StyledTitle>
      </Typography>
      <Typography variant="bodyL" mb={4}>
        {content}
      </Typography>
      {children}
    </div>
  );
};

export default WarraperComponent;
