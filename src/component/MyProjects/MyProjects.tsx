"use client";
import { MY_PROJECTS } from "@/constant/constants";
import GithubCodeIcon from "@/icons/GithubCodeIcon";
import LinkIcon from "@/icons/LinkIcon";
import WarraperComponent from "@/share/components/WarraperComponent/WarraperComponent";
import { styled, Typography, Box, Grid2 } from "@mui/material";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionGridContainer = motion.create(Grid2);

const StyledContainer = styled(MotionGridContainer)(() => ({
  padding: "16px",
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
    <WarraperComponent title="Projects" content="Recent Projects">
      <StyledContainer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        container
        spacing={3}
      >
        {MY_PROJECTS.map((item) => {
          return (
            <StyledGridContainer
              size={{ xs: 12, sm: 6, md: 6 }}
              key={item.title}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={800}
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  height: "600px",
                }}
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

                {item.urlDemo && (
                  <StyledContentProject className="hover-effect" pt={3}>
                    <StyledLink href={item.urlDemo || ""} target="blank">
                      Demo
                    </StyledLink>
                    <StyledLinkIcon href={item.urlDemo || ""}>
                      <LinkIcon />
                    </StyledLinkIcon>
                  </StyledContentProject>
                )}

                <StyledContentProject className="hover-effect" pt={1}>
                  <StyledLink href={item.urlCode || ""} target="blank">
                    {item.urlCodeBe ? "View code FE" : "View code"}
                  </StyledLink>
                  <StyledLinkIcon href={item.urlCode || ""}>
                    <GithubCodeIcon />
                  </StyledLinkIcon>
                </StyledContentProject>

                {item.urlCodeBe && (
                  <StyledContentProject className="hover-effect" pt={1}>
                    <StyledLink href={item.urlCodeBe || ""} target="blank">
                      View code BE
                    </StyledLink>
                    <StyledLinkIcon href={item.urlCodeBe || ""}>
                      <GithubCodeIcon />
                    </StyledLinkIcon>
                  </StyledContentProject>
                )}
              </StyledBoxContainer>
            </StyledGridContainer>
          );
        })}
      </StyledContainer>
    </WarraperComponent>
  );
};

export default MyProjects;
