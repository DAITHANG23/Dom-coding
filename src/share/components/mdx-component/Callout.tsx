"use client";
import { Box, styled } from "@mui/material";
import React from "react";

export interface CalloutProps {
  children: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

const StyledBox = styled(Box)<{ type: string }>(({ theme, type }) => ({
  border: "none",
  borderRadius: "24px",
  marginTop: 0,
  backgroundColor:
    type === "warning"
      ? theme.palette.warning["100"]
      : type === "danger"
        ? theme.palette.error["300"]
        : theme.palette.success["100"],
  padding: theme.spacing(3),
}));

const Callout = ({ children, type = "default" }: CalloutProps) => {
  return <StyledBox type={type}>{children}</StyledBox>;
};

export default Callout;
