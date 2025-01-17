"use client";
import WarraperComponent from "@/share/components/WarraperComponent/WarraperComponent";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <WarraperComponent className={classes.container}>
      <p>Search</p>
    </WarraperComponent>
  );
};

export default Search;
