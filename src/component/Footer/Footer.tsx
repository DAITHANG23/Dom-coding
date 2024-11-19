"use client";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import TiktokIcon from "@/icons/TiktokIcon";
import { Box, Typography } from "@mui/material";
import React from "react";
import {
  StyledBoxContainer,
  StyledDivider,
  StyledLinkIcon,
} from "./Footer.styles";
import MailIcon from "@/icons/MailIcon";
import useBreakpoints from "@/share/useBreakPoint";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isTabletSize } = useBreakpoints();
  return (
    <div>
      <StyledDivider variant="middle" />
      <StyledBoxContainer>
        {isTabletSize ? (
          <>
            <Box style={{ display: "flex", gap: "6px" }}>
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
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <Typography variant="bodyM" sx={{ fontSize: "16px" }}>
                Coppyright © {`${currentYear}`}
              </Typography>
              <Typography variant="bodyM" sx={{ fontSize: "16px" }}>
                All rights reserved.
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Box>
              <Typography variant="bodyM">
                Coppyright © {`${currentYear}`} | All rights reserved.
              </Typography>
            </Box>
            <Box style={{ display: "flex" }}>
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
            </Box>
          </>
        )}
      </StyledBoxContainer>
    </div>
  );
};

export default Footer;
