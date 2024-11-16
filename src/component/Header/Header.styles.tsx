import { MobileRule } from "@/utils/BreakPointMedia";
import {
  Box,
  Divider,
  Drawer,
  ListItemText,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
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
  fontFamily: "var(--font-inter)",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  ...theme.applyStyles("dark", {
    color: `${theme.palette.common.white}`,
  }),
}));
export const StyledSearchIcon = styled(Typography)<{ ischoosetab: string }>(
  ({ theme, ischoosetab }) => ({
    color:
      ischoosetab === "true"
        ? theme.palette.primary.main
        : theme.palette.common.black,
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "rotate(15deg)",
    },
    ...theme.applyStyles("dark", {
      color:
        ischoosetab === "true"
          ? theme.palette.primary.main
          : `${theme.palette.common.white}`,
    }),
  })
);
export const StyledDarkIcon = styled(Typography)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "rotate(-15deg)",
  },
}));
export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  fontWeight: "bold",
  color: theme.palette.common.black,
  ...theme.applyStyles("dark", {
    color: theme.palette.common.white,
  }),
}));
export const StyledDivider = styled(Divider)(({ theme }) => ({
  ...theme.applyStyles("dark", {
    borderColor: "#006CAC",
  }),
}));
export const StyledBoxIcon = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  margin: theme.spacing(2, 0),
}));
export const StyledNavbarListContainer = styled(Box)(() => ({
  [MobileRule]: {
    display: "none",
  },
  display: "block",
}));
export const StyledList = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
  alignItems: "center",
}));
export const StyledItemList = styled("li")(() => ({
  padding: "4px, 8px",
  marginRight: "24px",
}));
export const StyledBoxMoonIcon = styled("div")(() => ({
  cursor: "pointer",
}));
export const StyledMenu = styled(Box)(() => ({
  [MobileRule]: {
    display: "block",
  },
  display: "none",
}));
export const StyledDrawer = styled(Drawer)(() => ({
  [MobileRule]: {
    display: "block",
  },
  "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
  position: "relative",
}));
export const StyledListItemText = styled(ListItemText)<{
  ischoosetab: string;
}>(({ theme, ischoosetab }) => ({
  color:
    ischoosetab === "true"
      ? theme.palette.primary.main
      : theme.palette.common.black,

  ...theme.applyStyles("dark", {
    color:
      ischoosetab === "true"
        ? `${theme.palette.primary.main} !important`
        : theme.palette.common.white,
  }),
  "& .MuiTypography-root": {
    fontWeight: ischoosetab === "true" ? "600" : "none",
  },
}));
