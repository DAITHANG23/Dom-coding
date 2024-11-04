"use client";

import { createTheme } from "@mui/material/styles";
import Typography from "./__Elements/__Theme.Typography";
import Palette from "./__Elements/__Theme.Palette";
import VariantTypographyMapping from "./__Elements/__Theme.VariantTypographyMapping";

export const TraceabilityThemeOptions = {
  palette: Palette,
  typography: Typography,
  components: VariantTypographyMapping,
  colorSchemes: {
    dark: true,
  },
};

export const theme = createTheme(TraceabilityThemeOptions);
