import { Stack, Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = () => {
  return (
    <Stack pt={4} sx={{ alignItems: "center" }}>
      <Pagination count={10} variant="outlined" color="primary" />
    </Stack>
  );
};

export default PaginationComponent;
