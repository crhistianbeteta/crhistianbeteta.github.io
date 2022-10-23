import React from "react";
import PropTypes from "prop-types";
import SkillListItem from "./SkillListItem";
import { Divider, Typography } from "@mui/material";
import "animate.css";

function SkillList({ title, skillList }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Divider />
      <div>
        <ul>
          {skillList.map((skill) => (
            <li key={skill.name}>
              <SkillListItem name={skill.name}></SkillListItem>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  skillList: PropTypes.array.isRequired,
};

export default SkillList;
