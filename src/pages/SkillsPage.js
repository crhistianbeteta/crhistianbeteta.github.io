import React from "react";
import { skills } from "../data/data";
import SkillList from "../skill/SkillList";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function SkillsPage() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom >
        Habilidades
      </Typography>

      {skills.map((skills) => (
        <SkillList
          key={skills.title}
          skillList={skills.skills}
          title={skills.title}
        ></SkillList>
      ))}
    </Box>
  );
}
