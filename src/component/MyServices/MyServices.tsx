"use client";
import { MY_SERVICES } from "@/constant/constants";
import Backend from "@/icons/Backend";
import Frontend from "@/icons/Frontend";
import WarraperComponent from "@/share/components/WarraperComponent/WarraperComponent";
import { Grid2, styled, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const MotionGridItem = motion(Grid2);

const StyledBoxContent = styled(MotionGridItem)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  borderRadius: "12px",
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.grey[400]}`,
  padding: "56px 32px",
  transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  transition:
    "border 0.4s, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s",
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.black,
    border: `1px solid ${theme.palette.common.black}`,
  }),
}));

const StyledTitleContent = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  color: theme.palette.common.black,
  ...theme.applyStyles("dark", {
    color: theme.palette.common.white,
  }),
}));

const StyledContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[800],
  maxWidth: "266px",
}));
const MyServices = () => {
  return (
    <WarraperComponent title="Services" content="What I Do">
      <Grid2 container spacing={2}>
        {MY_SERVICES.map((item) => {
          return (
            <StyledBoxContent
              initial={{ opacity: 0, x: item.id === "frontend" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              size={{ xs: 12, sm: 6, md: 6 }}
              key={item.id}
            >
              {item.id === "frontend" ? <Frontend /> : <Backend />}
              <StyledTitleContent variant="h5">{item.title}</StyledTitleContent>
              <StyledContent>{item.content}</StyledContent>
            </StyledBoxContent>
          );
        })}
      </Grid2>
    </WarraperComponent>
  );
};

export default MyServices;
