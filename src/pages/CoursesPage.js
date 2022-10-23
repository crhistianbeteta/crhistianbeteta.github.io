import React from "react";
import CourseList from "../course/CourseList";
import { courses } from "../data/data";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function CoursesPage() {
  return (
    <Box className="animate__animated animate__fadeIn animate__slow">
      <Typography variant="h2" gutterBottom>
        Cursos
      </Typography>
      <div>
        <CourseList title="Cursos" courses={courses}></CourseList>
      </div>
    </Box>
  );
}
