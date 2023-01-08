import React from "react";
import AcademicBackgroundTimeline from "../components/academicBackgroundTimeline/AcademicBackgroundTimeline";
import { Box, Typography } from "@mui/material";

export default function AcademicBackgroundPage() {
  return (
    <>
      <Box>
        <Typography variant="h2" gutterBottom>
          Formación
        </Typography>
        <AcademicBackgroundTimeline></AcademicBackgroundTimeline>
      </Box>
    </>
  );
}
