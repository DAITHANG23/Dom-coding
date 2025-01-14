"use client";

import { Box, styled, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import DividerComponent from "@/share/components/Divivder/Divider";
import Contacts from "../../share/components/Contacts/Contacts";
import { siteConfig } from "@/constant/SiteConfig";
import useBreakpoints from "@/share/useBreakPoint";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    margin: "32px 0px 32px 0px",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  fontWeight: 700,
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

const StyledText = styled(Typography)(() => ({
  lineHeight: 1.75,
}));

const HomePage = () => {
  const classes = useStyles();
  const { isTabletSize } = useBreakpoints();
  return (
    <>
      <StyledTitle variant={isTabletSize ? "bodyL" : "h3"}>
        Welcome to DomCoding
      </StyledTitle>
      <Typography variant="bodyS" mb={3}>
        {siteConfig.description}
      </Typography>

      <StyledBox>
        <StyledText variant="bodyS">Social Links:</StyledText>
        <Box>
          <Contacts isSmallSize />
        </Box>
      </StyledBox>

      <DividerComponent classes={{ root: classes.root }} />
    </>
  );
};

export default HomePage;
