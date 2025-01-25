"use client";
import Calendar from "@/icons/Calendar";
import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { StyledTitle } from "./FeaturedList.styles";
import FeaturesData from "@/constant/FeaturesData";

const FEATURE_PER_PAGE = 3;

const FeaturedList = () => {
  const [isAddMore, setIsAddMore] = useState(false);

  const displayFeatures = isAddMore
    ? FeaturesData
    : FeaturesData.slice(0, FEATURE_PER_PAGE);

  const onClickAddMore = () => {
    setIsAddMore((prev) => !prev);
  };

  return (
    <div>
      <Typography variant="bodyL">Featured</Typography>
      {displayFeatures.map((item) => (
        <Box pt={4} key={item.id}>
          <StyledTitle variant="h5">{item.title}</StyledTitle>
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
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Typography>
          </Box>

          <Typography variant="bodyS">{item.description}</Typography>
        </Box>
      ))}
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{
            marginTop: "24px",
            padding: "12px 16px",
          }}
          onClick={onClickAddMore}
        >
          {isAddMore ? "Show less" : "Add more"}
        </Button>
      </div>
    </div>
  );
};

export default FeaturedList;
