import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { academicBackground } from "../../data/data";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function AcademicBackgroundTimeline() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Timeline
        id="hola"
        position={matches ? "alternate" : "right"}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: matches ? 1 : 0,
            padding: matches ? "1rem" : "inherit",
          },
        }}
      >
        {academicBackground.map((event) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                {event.title} ({event.beginYear} - {event.endYear})
              </Typography>
              <hr></hr>
              <Box style={{ textAlign: "justify" }}>{event.description}</Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
