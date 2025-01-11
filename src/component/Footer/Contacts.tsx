"use client";
import React from "react";
import { StyledBoxContacts, StyledLinkIcon } from "./Footer.styles";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import TiktokIcon from "@/icons/TiktokIcon";
import useBreakpoints from "@/share/useBreakPoint";

const Contacts = () => {
  const { isTabletSize } = useBreakpoints();
  return (
    <StyledBoxContacts>
      <StyledLinkIcon
        href={"https://github.com/DaITHANG23"}
        title="DomCoding on Github"
      >
        <GitHubIcon isTabletSize={isTabletSize} />
      </StyledLinkIcon>

      <StyledLinkIcon
        href={"https://www.linkedin.com/in/domnguyen236/"}
        title="DomCoding on Linkedin"
      >
        <LinkedinIcon isTabletSize={isTabletSize} />
      </StyledLinkIcon>

      <StyledLinkIcon
        href={"mailto:nguyendaithang23061997@gmail.com"}
        title="Send an email to DomCoding"
      >
        <MailIcon isTabletSize={isTabletSize} />
      </StyledLinkIcon>

      <StyledLinkIcon
        href={"https://www.tiktok.com/@domnguyen2306"}
        title="DomCoding on Tiktok"
      >
        <TiktokIcon isTabletSize={isTabletSize} />
      </StyledLinkIcon>
    </StyledBoxContacts>
  );
};

export default Contacts;
