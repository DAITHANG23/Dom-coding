"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Calendar from "@/icons/Calendar";
import { Box, styled, Typography } from "@mui/material";
import { LIST_EXPERIENCES } from "@/constant/constants";
import useBreakpoints from "@/share/useBreakPoint";

const StyledTimeLineOppositeContent = styled(TimelineOppositeContent)(() => ({
  display: "flex",
  gap: "8px",
  textAlign: "right",
  justifyContent: "flex-end",
}));

const StyledTitle = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.applyStyles("dark", {
    color: theme.palette.primary.main,
  }),
}));

const StyledTimelineItem = styled(TimelineItem)(() => ({
  "&::before": {
    content: "none",
    padding: 0,
    flex: 0,
  },
}));

const StyledBoxContentInMoble = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  textAlign: "left",
  justifyContent: "flex-start",
  color: theme.palette.primary.main,
}));

const StyledTitleContent = styled(Typography)(() => ({
  fontWeight: "bold",
}));

const StyledContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[800],
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const MyAchievements = () => {
  const { isTabletSize } = useBreakpoints();
  return (
    <div style={{ textAlign: "center" }}>
      <Typography>
        My <StyledTitle>Achievements</StyledTitle>
      </Typography>
      <Typography variant="bodyL" pb={2}>
        Work Experiences
      </Typography>
      <Timeline>
        {LIST_EXPERIENCES.map((item) => {
          return (
            <StyledTimelineItem key={item.title}>
              {!isTabletSize && (
                <StyledTimeLineOppositeContent color="primary">
                  <Box>
                    <Calendar />
                  </Box>
                  <Box>{item.time}</Box>
                </StyledTimeLineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <StyledTimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {isTabletSize && (
                  <StyledBoxContentInMoble>
                    <Box>
                      <Calendar />
                    </Box>
                    <Box>{item.time}</Box>
                  </StyledBoxContentInMoble>
                )}
                <StyledTitleContent variant="h5">
                  {item.title}
                </StyledTitleContent>

                <StyledContent>{item.content}</StyledContent>
              </TimelineContent>
            </StyledTimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default MyAchievements;
