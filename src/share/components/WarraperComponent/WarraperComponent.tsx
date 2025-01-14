"use client";
import { makeStyles } from "@mui/styles";
import React from "react";

interface WarraperComponentProps {
  children: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: { height: "100vh", padding: "16px" },
}));

const WarraperComponent = ({ children, className }: WarraperComponentProps) => {
  const classes = useStyles();
  return <div className={`${classes.root} ${className}`}>{children}</div>;
};

export default WarraperComponent;
