import { Box, Divider, styled, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2, 2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  ...theme.applyStyles("dark", {
    color: `${theme.palette.common.white}`,
  }),
}));
export const StyledTabs = styled(Tabs)(() => ({
  marginRight: 24,
  "& .MuiTab-root": {
    minWidth: 0,
    padding: 0,
    fontSize: 15,
    lineHeight: "20px",
  },
  "& .MuiTabs-flexContainer": {
    gap: 24,
  },
}));
export const StyledTab = styled(Tab)(({ theme }) => ({
  padding: 0,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
export const StyledSearchIcon = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "rotate(15deg)",
  },
  ...theme.applyStyles("dark", {
    color: `${theme.palette.common.white}`,
  }),
}));
export const StyledDarkIcon = styled(Typography)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "rotate(-15deg)",
  },
}));
export const StyledTitle = styled(Typography)(() => ({
  fontStyle: "italic",
  fontWeight: "bold",
}));
export const StyledDivider = styled(Divider)(({ theme }) => ({
  ...theme.applyStyles("dark", {
    borderColor: "#006CAC",
  }),
}));
