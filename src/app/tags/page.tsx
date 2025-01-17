"use client";
import WarraperComponent from "@/share/components/WarraperComponent/WarraperComponent";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
  },
}));
const Tags = () => {
  const classes = useStyles();
  return (
    <WarraperComponent className={classes.container}>
      <p>Tags</p>
    </WarraperComponent>
  );
};

export default Tags;
