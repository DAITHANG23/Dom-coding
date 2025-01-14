"use client";
import React from "react";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import TiktokIcon from "@/icons/TiktokIcon";
import useBreakpoints from "@/share/useBreakPoint";
import { Box, styled } from "@mui/material";
import Link from "next/link";
import { siteConfig } from "@/constant/SiteConfig";

interface ContactsProps {
  isSmallSize?: boolean;
}

export const StyledBoxContacts = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const StyledLinkIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "rotate(15deg)",
  },
  ...theme.applyStyles("dark", {
    color: `${theme.palette.common.white}`,
  }),
}));

const Contacts = ({ isSmallSize }: ContactsProps) => {
  const { isTabletSize } = useBreakpoints();
  const renderLinkContact = siteConfig.links.map((link) => {
    let IconComponent;

    switch (link.icon) {
      case "GitHubIcon":
        IconComponent = GitHubIcon;
        break;
      case "LinkedinIcon":
        IconComponent = LinkedinIcon;
        break;
      case "TiktokIcon":
        IconComponent = TiktokIcon;
        break;
      default:
        IconComponent = MailIcon;
        break;
    }

    return (
      <StyledLinkIcon href={link.url} title={link.title} key={link.title}>
        <IconComponent isTabletSize={isTabletSize && !isSmallSize} />
      </StyledLinkIcon>
    );
  });
  return <StyledBoxContacts>{renderLinkContact}</StyledBoxContacts>;
};

export default Contacts;
