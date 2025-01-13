import { styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
  }),

  "&:hover": { textDecoration: "underline", cursor: "pointer" },
}));
