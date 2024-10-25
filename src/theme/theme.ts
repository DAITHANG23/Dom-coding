"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import Typography from "./__Elements/__Theme.Typography";
import Palette from "./__Elements/__Theme.Palette";
import VariantTypographyMapping from "./__Elements/__Theme.VariantTypographyMapping";

export const TraceabilityThemeOptions: ThemeOptions = {
  palette: Palette,
  typography: Typography,
  components: VariantTypographyMapping,
};

export const theme = createTheme(TraceabilityThemeOptions);
