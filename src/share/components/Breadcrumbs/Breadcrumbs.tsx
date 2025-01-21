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
  const pagePost =
    typeof window !== "undefined" && window.localStorage.getItem("currentPage");

  const arrayPathname = pathname.split("/");
  const pathnameItem = useMemo(() => {
    if (arrayPathname.length > 2) {
      return `/${arrayPathname[arrayPathname.length - 2]}`;
    }
    return pathname;
  }, [pathname, arrayPathname]);

  const routeItem = routes.find((route) => route.path === pathnameItem);

  const breadCrumbs = useMemo(() => {
    if (!routeItem) return [];
    let breadcrumbList = getRouteBreadcrumb(routeItem?.id) || [];
    if (arrayPathname.length > 2) {
      breadcrumbList = breadcrumbList.concat({
        name: arrayPathname[2],
        heading: arrayPathname[2],
        url: pathname,
        parent: arrayPathname[1],
      });
    }
    return breadcrumbList;
  }, [getRouteBreadcrumb, routeItem, arrayPathname, pathname]);

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
                  {index < breadCrumbs.length - 1 && item.name === "Posts" ? (
                    <StyledLink href={`/posts?page=${pagePost}`}>
                      {item.name}
                    </StyledLink>
                  ) : index < breadCrumbs.length - 1 &&
                    item.name !== "Posts" ? (
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
