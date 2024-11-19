import { MobilePortraitRule } from "@/utils/BreakPointMedia";
import { Box, Divider, styled } from "@mui/material";
import Link from "next/link";

export const StyledLinkIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  paddingRight: "10px",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "rotate(15deg)",
  },
  ...theme.applyStyles("dark", {
    color: `${theme.palette.common.white}`,
  }),
}));
export const StyledDivider = styled(Divider)(({ theme }) => ({
  ...theme.applyStyles("dark", {
    borderColor: theme.palette.primary.main,
  }),
}));

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  display: "flex",
  justifyContent: "space-between",

  [MobilePortraitRule]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },
}));
