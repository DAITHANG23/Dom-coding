"use client";
import { MY_PROJECTS } from "@/constant/constants";
import GithubCodeIcon from "@/icons/GithubCodeIcon";
import LinkIcon from "@/icons/LinkIcon";
import { styled, Typography, Box, Grid2 } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledTitle = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
  }),
}));

const StyledGridContainer = styled(Grid2)(() => ({
  position: "relative",
  overflow: "hidden",
  opacity: 1,
  visibility: "visible",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  transition:
    "border 0.4s, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s",
  "&:hover .hover-effect": {
    bottom: 0,
  },
}));

const StyledImage = styled("img")(() => ({
  objectFit: "cover",
  borderRadius: "12px",
}));

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: "-100%",
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  background:
    "linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsla(242, 79%, 62%, 1) 120%)",
  backdropFilter: "blur(4px)",
  padding: "65px 16px 16px 16px",
  transition: "bottom 0.4s",
  ...theme.applyStyles("dark", {
    background:
      "linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, rgb(47, 109, 77) 120%)",
  }),
}));

const StyledContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledContentProject = styled(Typography)(({ theme }) => ({
  display: "flex",
  gap: "6px",
  color: theme.palette.common.white,
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "center",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
}));

const StyledLinkIcon = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  marginTop: "4px",
}));

const MyProjects = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography>
        My <StyledTitle>Projects</StyledTitle>
      </Typography>
      <Typography variant="bodyL" mb={4}>
        Recent Projects
      </Typography>

      <Grid2 container spacing={3} sx={{ padding: "16px" }}>
        {MY_PROJECTS.map((item) => {
          return (
            <StyledGridContainer
              size={{ xs: 12, sm: 6, md: 6 }}
              key={item.title}
            >
              <StyledImage
                src={item.image}
                alt={item.title}
                width={"100%"}
                height={"500px"}
              />
              <StyledBoxContainer className="hover-effect">
                <StyledContent className="hover-effect">
                  {item.type}
                </StyledContent>

                <StyledContent className="hover-effect" variant="bodyL">
                  {item.title}
                </StyledContent>

                <StyledContent className="hover-effect">
                  {item.content}
                </StyledContent>

                <StyledContent className="hover-effect" pt={2}>
                  Technologies: {item.technologies}
                </StyledContent>

                <StyledContentProject className="hover-effect" pt={3}>
                  <StyledLink href={item.urlDemo || ""} target="blank">
                    Demo
                  </StyledLink>
                  <StyledLinkIcon href={item.urlDemo || ""}>
                    <LinkIcon />
                  </StyledLinkIcon>
                </StyledContentProject>

                <StyledContentProject className="hover-effect" pt={1}>
                  <StyledLink href={item.urlCode || ""} target="blank">
                    View code{" "}
                  </StyledLink>
                  <StyledLinkIcon href={item.urlCode || ""}>
                    <GithubCodeIcon />
                  </StyledLinkIcon>
                </StyledContentProject>
              </StyledBoxContainer>
            </StyledGridContainer>
          );
        })}
      </Grid2>
    </div>
  );
};

export default MyProjects;
