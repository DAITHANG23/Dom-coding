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
import { motion } from "framer-motion";
import WarraperComponent from "@/share/components/WarraperComponent/WarraperComponent";

const StyledTimeLineOppositeContent = styled(TimelineOppositeContent)(() => ({
  display: "flex",
  gap: "8px",
  textAlign: "right",
  justifyContent: "flex-end",
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
    <WarraperComponent title="Achievements" content="Work Experiences">
      <Timeline>
        {LIST_EXPERIENCES.map((item) => {
          return (
            <StyledTimelineItem key={item.title}>
              {!isTabletSize && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{ width: isTabletSize ? "100%" : "50%" }}
                >
                  <StyledTimeLineOppositeContent color="primary">
                    <Box>
                      <Calendar />
                    </Box>
                    <Box>{item.time}</Box>
                  </StyledTimeLineOppositeContent>
                </motion.div>
              )}
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <StyledTimelineConnector />
              </TimelineSeparator>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: isTabletSize ? "100%" : "50%" }}
              >
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
              </motion.div>
            </StyledTimelineItem>
          );
        })}
      </Timeline>
    </WarraperComponent>
  );
};

export default MyAchievements;
