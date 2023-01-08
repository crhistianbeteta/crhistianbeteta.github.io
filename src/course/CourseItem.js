import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import StyledChip from "../components/styledComponents/StyledChip";
import "./skill.css";

function CourseItem({ name, skillsLearned }) {
  const card = (
    <Card>
      <CardContent>
        <Typography fontSize={"1.5rem"} component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          <Box>
            {skillsLearned.map((skill, index) => (
              <StyledChip key={index} text={skill}></StyledChip>
            ))}
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ir al curso</Button>
      </CardActions>
    </Card>
  );

  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  skillsLearned: PropTypes.array.isRequired,
};

export default CourseItem;
