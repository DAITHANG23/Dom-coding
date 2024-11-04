"use client";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import TiktokIcon from "@/icons/TiktokIcon";
import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledDivider, StyledLinkIcon } from "./Footer.styles";
import MailIcon from "@/icons/MailIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <StyledDivider variant="middle" />
      <Box
        sx={{
          padding: "32px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="bodyM">
            Coppyright © {`${currentYear}`} | All rights reserved.
          </Typography>
        </Box>
        <div style={{ display: "flex" }}>
          <StyledLinkIcon
            href={"https://github.com/DaITHANG23"}
            title="DomCoding on Github"
          >
            <GitHubIcon />
          </StyledLinkIcon>

          <StyledLinkIcon
            href={"https://www.linkedin.com/in/domnguyen236/"}
            title="DomCoding on Linkedin"
          >
            <LinkedinIcon />
          </StyledLinkIcon>

          <StyledLinkIcon
            href={"mailto:nguyendaithang23061997@gmail.com"}
            title="Send an email to DomCoding"
          >
            <MailIcon />
          </StyledLinkIcon>

          <StyledLinkIcon
            href={"https://www.tiktok.com/@domnguyen2306"}
            title="DomCoding on Tiktok"
          >
            <TiktokIcon />
          </StyledLinkIcon>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
