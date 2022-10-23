import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Avatar, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            src="/me.jpg"
            sx={{ width: "200px !important", height: "200px !important" }}
          />
        </Box>

        <Typography align="center" variant="h1" gutterBottom>
          Crhistian Beteta
        </Typography>
      </Container>

      <Box
        justifyContent={"center"}
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          <Button
            onClick={() => {
              navigate("/professional-experience");
            }}
          >
            <Typography variant="h5">Experiencia profesional</Typography>
          </Button>
          <Button
            onClick={() => {
              navigate("/skills");
            }}
          >
            <Typography variant="h5">Habilidades</Typography>
          </Button>

          <Button
            onClick={() => {
              navigate("/courses");
            }}
          >
            <Typography variant="h5">Cursos</Typography>
          </Button>

          <Button
            onClick={() => {
              navigate("/academic-background");
            }}
          >
            <Typography variant="h5">Formación</Typography>
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
