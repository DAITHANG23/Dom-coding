"use client";
import Calendar from "@/icons/Calendar";
import { Typography, Box } from "@mui/material";
import React from "react";
import { StyledTitle } from "./FeaturedList.styles";
import PaginationComponent from "@/share/components/Pagination/Pagination";

const FeaturedList = () => {
  const date = new Date();

  return (
    <div>
      <Typography variant="bodyL">Featured</Typography>
      <Box pt={4}>
        <StyledTitle variant="h5">[Rq] Series of React Query</StyledTitle>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            paddingTop: "16px",
            fontStyle: "italic",
          }}
        >
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="bodyS">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
          facere minus, nulla commodi similique, deleniti eos nihil aut
          quibusdam dolor atque qui iste ipsum doloremque modi recusandae, vel
          et?
        </Typography>
      </Box>

      <Box sx={{ paddingTop: "32px" }}>
        <StyledTitle variant="h5">[Rq] Series of React Query</StyledTitle>
        <Box sx={{ display: "flex", gap: "8px", paddingTop: "16px" }}>
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="bodyS">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
          facere minus, nulla commodi similique, deleniti eos nihil aut
          quibusdam dolor atque qui iste ipsum doloremque modi recusandae, vel
          et?
        </Typography>
      </Box>

      <Box sx={{ paddingTop: "32px" }}>
        <StyledTitle variant="h5">[Rq] Series of React Query</StyledTitle>
        <Box sx={{ display: "flex", gap: "8px", paddingTop: "16px" }}>
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="bodyS">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
          facere minus, nulla commodi similique, deleniti eos nihil aut
          quibusdam dolor atque qui iste ipsum doloremque modi recusandae, vel
          et?
        </Typography>
      </Box>

      <Box sx={{ paddingTop: "32px" }}>
        <StyledTitle variant="h5">[Rq] Series of React Query</StyledTitle>
        <Box sx={{ display: "flex", gap: "8px", paddingTop: "16px" }}>
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="bodyS">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
          facere minus, nulla commodi similique, deleniti eos nihil aut
          quibusdam dolor atque qui iste ipsum doloremque modi recusandae, vel
          et?
        </Typography>
      </Box>

      <Box sx={{ paddingTop: "32px" }}>
        <StyledTitle variant="h5">[Rq] Series of React Query</StyledTitle>
        <Box sx={{ display: "flex", gap: "8px", paddingTop: "16px" }}>
          <Calendar />
          <Typography sx={{ lineHeight: 1.75 }}>
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Box>

        <Typography variant="bodyS">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
          facere minus, nulla commodi similique, deleniti eos nihil aut
          quibusdam dolor atque qui iste ipsum doloremque modi recusandae, vel
          et?
        </Typography>
      </Box>

      <PaginationComponent />
    </div>
  );
};

export default FeaturedList;
