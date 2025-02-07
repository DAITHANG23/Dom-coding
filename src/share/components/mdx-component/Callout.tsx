"use client";
import { Box, styled } from "@mui/material";
import React from "react";
import { ColorPartial } from "@mui/material/styles/createPalette";
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
      ? `${theme.palette.warning["100"] as ColorPartial}`
      : type === "danger"
        ? `${theme.palette.error["300"] as ColorPartial}`
        : `${theme.palette.success["100"] as ColorPartial}`,
  padding: theme.spacing(3),
}));

const Callout = ({ children, type = "default" }: CalloutProps) => {
  return <StyledBox type={type}>{children}</StyledBox>;
};

export default Callout;
