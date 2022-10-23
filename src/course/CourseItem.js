import React from "react";
import PropTypes from "prop-types";
import "./skill.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyledChip from "../components/styledComponents/StyledChip";

function CourseItem({ name, link, img, skillsLearned }) {
  const card = (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
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
