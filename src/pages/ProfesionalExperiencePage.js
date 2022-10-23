import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import StyledChip from "components/styledComponents/StyledChip";
import React from "react";
import { professionalExperience } from "../data/data";
import { calculateTime } from "../utilities/DateFormatter";

export default function ProfesionalExperiencePage() {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Experiencia profesional
      </Typography>

      <Box>
        {professionalExperience.map((experience) => (
          <Card variant="outlined" sx={{ mb: 1 }}>
            <CardContent>
              <p>{calculateTime(experience.beginDate, experience.endDate)}</p>
              <Typography variant="h5" component="div">
                {experience.companyName}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "light" }}>
                {experience.jobTitle}
              </Typography>
              <Divider sx={{ mt: 1, mb: 1 }}></Divider>
              <Typography variant="body2">
                <Box>
                  {experience.technologies.map((skill, index) => (
                    <StyledChip key={index} text={skill}></StyledChip>
                  ))}
                </Box>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
