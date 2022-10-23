import React from "react";
import PropTypes from "prop-types";
import CourseItem from "./CourseItem";
import "animate.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function CourseList({ title, courses }) {
  return (
    <>
      <div>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid key={course.name} xs={12} sm={12} md={6} lg={6} xl={6}>
              <CourseItem
                name={course.name}
                link={course.link}
                img={course.img}
                skillsLearned={course.skillsLearned}
              ></CourseItem>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

CourseList.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
};

export default CourseList;
