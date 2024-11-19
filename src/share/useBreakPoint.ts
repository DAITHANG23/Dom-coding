import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useBreakpoints = () => {
  const theme = useTheme();

  const isMobileSize = useMediaQuery(theme.breakpoints.only("xs"));

  const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));

  const isDesktopSize = useMediaQuery(theme.breakpoints.up("md"));

  const isIpadSize = useMediaQuery("(max-width:1125px)");

  const isResponsive = isMobileSize || isTabletSize;

  return {
    isMobileSize,
    isTabletSize,
    isDesktopSize,
    isResponsive,
    isIpadSize,
  };
};

export default useBreakpoints;
