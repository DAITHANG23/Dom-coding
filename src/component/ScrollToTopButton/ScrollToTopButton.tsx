"use client";

import ScrollToTopIcon from "@/icons/ScrollToTopIcon";

import {
  Button,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from "@mui/material";
import { useEffect, useState } from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  minWidth: 0,
  minHeight: "36px",
  fontWeight: 700,
  borderRadius: "50%",
  zIndex: 10,
  width: "40px",
  height: "40px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  padding: 0,
  backgroundColor: "hsl(242, 100%, 96%)",
  border: "1px solid hsl(242, 80%, 63%)",
  "&:hover": {
    backgroundColor: "hsl(244, 100%, 80%)",
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "hsl(152, 70.80%, 90.60%)",
    border: "1px solid hsl(152, 72%, 63%)",
    "&:hover": {
      backgroundColor: "hsl(151, 100%, 80%)",
    },
  }),
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <StyledTooltip title="Scroll to top" placement="left">
        <StyledButton onClick={scrollToTop} variant="outlined">
          <ScrollToTopIcon />
        </StyledButton>
      </StyledTooltip>
    )
  );
};

export default ScrollToTopButton;
