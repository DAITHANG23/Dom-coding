"use client";
import { useMemo } from "react";
import routes from "@/constant/Routes";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Box, Breadcrumbs, styled, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileRule } from "@/utils/BreakPointMedia";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
  "&:hover": {
    textDecoration: "underline",
  },
  ...theme.applyStyles("dark", {
    color: theme.palette.common.white,
  }),
}));

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  color: theme.palette.common.black,
  ...theme.applyStyles("dark", {
    color: theme.palette.common.white,
  }),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const BreadcrumbsComponent = () => {
  const pathname = usePathname();
  const { getRouteBreadcrumb } = useBreadcrumbs();

  const routeItem = routes.find((route) => route.path === pathname);

  const breadCrumbs = useMemo(() => {
    if (!routeItem) return [];

    return getRouteBreadcrumb(routeItem?.id) || [];
  }, [getRouteBreadcrumb, routeItem]);

  return (
    <>
      {pathname !== "/" ? (
        <Box
          sx={{
            padding: "155px 16px 16px",
            [MobileRule]: { padding: "110px 16px 16px" },
          }}
        >
          <StyledBreadcrumbs>
            {breadCrumbs.map((item, index) => {
              return (
                <StyledTypography key={item.url} variant="bodyXXSM">
                  {index < breadCrumbs.length - 1 ? (
                    <StyledLink href={item.url ?? "/"}>{item.name}</StyledLink>
                  ) : (
                    item.name
                  )}
                </StyledTypography>
              );
            })}
          </StyledBreadcrumbs>
        </Box>
      ) : (
        <Box sx={{ paddingTop: "90px" }}></Box>
      )}
    </>
  );
};

export default BreadcrumbsComponent;
