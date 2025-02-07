"use client";
import { MY_TECHNOLOGIES } from "@/constant/constants";
import {
  Box,
  Grid2,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledContainerBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[600]}`,
  height: "200px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "6px",
  ...theme.applyStyles("dark", {
    border: `1px solid ${theme.palette.common.white}`,
  }),
}));

const StyledBoxTitle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "40px",
  backgroundColor: theme.palette.grey[600],
  textAlign: "center",
  paddingTop: "10px",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.common.white,
  }),
}));

const StyledTitle = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: `${theme.palette.primary.main}`,
  }),
}));

const StyledTitleTechnology = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  ...theme.applyStyles("dark", {
    color: `${theme.palette.primary.main}`,
  }),
}));

const MyTechnologies = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleOpen = (title: string) => {
    setOpen(title);
  };
  return (
    <Box sx={{ padding: "8px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography>
          My <StyledTitle>Technologies</StyledTitle>
        </Typography>
        <Typography variant="bodyL" pb={4}>
          Technologies I&apos;ve worked with
        </Typography>
      </Box>
      <Grid2 container spacing={2}>
        {MY_TECHNOLOGIES.map((item) => {
          return (
            <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <StyledContainerBox>
                <StyledBoxTitle>
                  <StyledTitleTechnology>{item.title}</StyledTitleTechnology>
                </StyledBoxTitle>
                {item?.technologies.map((i) => {
                  return (
                    <Box key={i.title}>
                      <StyledTooltip
                        title={i.title}
                        onMouseLeave={() => setOpen(null)}
                        onClick={() => setOpen(i.title)}
                        onMouseEnter={() => handleOpen(i.title)}
                        open={open === i.title}
                      >
                        <img
                          src={i.image}
                          alt={i.title}
                          width={"40px"}
                          height={"40px"}
                          style={{ borderRadius: "4px" }}
                        />
                      </StyledTooltip>
                    </Box>
                  );
                })}
              </StyledContainerBox>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
};

export default MyTechnologies;
