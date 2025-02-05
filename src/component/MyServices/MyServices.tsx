"use client";
import { MY_SERVICES } from "@/constant/constants";
import Backend from "@/icons/Backend";
import Frontend from "@/icons/Frontend";
import { Grid2, styled, Typography } from "@mui/material";
import React from "react";

const StyledTitle = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
  }),
}));

const StyledBoxContent = styled(Grid2)(({ theme }) => ({
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
    <div style={{ textAlign: "center" }}>
      <Typography>
        My <StyledTitle>Services</StyledTitle>
      </Typography>
      <Typography variant="bodyL">What I Do</Typography>
      <Grid2
        container
        spacing={2}
        sx={{
          marginTop: "32px",
          padding: "16px",
        }}
      >
        {MY_SERVICES.map((item) => {
          return (
            <StyledBoxContent size={{ xs: 12, sm: 6, md: 6 }} key={item.id}>
              {item.id === "frontend" ? <Frontend /> : <Backend />}{" "}
              <StyledTitleContent variant="h5">{item.title}</StyledTitleContent>
              <StyledContent>{item.content}</StyledContent>
            </StyledBoxContent>
          );
        })}
      </Grid2>
    </div>
  );
};

export default MyServices;
