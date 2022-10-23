import React from "react";
import PropTypes from "prop-types";
import "./skill.css";
import { Typography } from "@mui/material";

function SkillListItem({ name }) {
  return (
    <>
      <Typography variant="body1" gutterBottom>
        {name}
      </Typography>
    </>
  );
}

SkillListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SkillListItem;
