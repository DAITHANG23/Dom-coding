"use client";
import { useMemo } from "react";
import routes from "@/constant/Routes";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Box, Breadcrumbs, Button, styled, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MobileRule } from "@/utils/BreakPointMedia";
import GoBackIcon from "@/icons/GoBackIcon";

const StyledBoxContainer = styled(Box)(() => ({
  padding: "155px 16px 16px",
  [MobileRule]: { padding: "110px 16px 16px" },
}));

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

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  ...theme.applyStyles("dark", {
    color: theme.palette.common.white,
  }),
}));

const StyledSpan = styled("span")(() => ({
  marginLeft: "4px",
}));

const BreadcrumbsComponent = () => {
  const pathname = usePathname();
  const { getRouteBreadcrumb } = useBreadcrumbs();

  const router = useRouter();
  const pagePost =
    typeof window !== "undefined" && window.localStorage.getItem("currentPage");

  const isContentPostPage =
    pathname.startsWith("/posts") && pathname.split("/").length > 2;

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
      {pathname !== "/" && !isContentPostPage ? (
        <StyledBoxContainer>
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
        </StyledBoxContainer>
      ) : pathname !== "/" && isContentPostPage ? (
        <StyledBoxContainer>
          <StyledButton onClick={() => router.back()}>
            <GoBackIcon /> <StyledSpan>Go Back</StyledSpan>
          </StyledButton>
        </StyledBoxContainer>
      ) : (
        <Box sx={{ paddingTop: "90px" }}></Box>
      )}
    </>
  );
};

export default BreadcrumbsComponent;
