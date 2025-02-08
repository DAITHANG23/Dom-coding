"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyledBoxContainer,
  StyledBoxContent,
  StyledDivider,
  StyledTypography,
} from "./Footer.styles";

import useBreakpoints from "@/share/useBreakPoint";
import Contacts from "../../share/components/Contacts/Contacts";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isTabletSize } = useBreakpoints();
  return (
    <StyledBox>
      <StyledDivider variant="middle" />
      <StyledBoxContainer>
        {isTabletSize ? (
          <>
            <Contacts />
            <StyledBoxContent>
              <StyledTypography variant="bodyM">
                Coppyright © {`${currentYear}`}
              </StyledTypography>
              <StyledTypography variant="bodyM">
                All rights reserved.
              </StyledTypography>
            </StyledBoxContent>
          </>
        ) : (
          <>
            <Box>
              <Typography variant="bodyM">
                Coppyright © {`${currentYear}`} | All rights reserved.
              </Typography>
            </Box>
            <Contacts isSmallSize />
          </>
        )}
      </StyledBoxContainer>
    </StyledBox>
  );
};

export default Footer;
