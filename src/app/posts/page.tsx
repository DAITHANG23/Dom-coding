"use client";
import React from "react";
import WarraperComponent from "@/share/components/WarraperComponent/WarraperComponent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
  },
}));

const Posts = () => {
  const classes = useStyles();

  return (
    <WarraperComponent className={classes.container}>
      <p>Posts</p>
    </WarraperComponent>
  );
};

export default Posts;
