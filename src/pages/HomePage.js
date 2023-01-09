import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Avatar, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function HomePage() {
  const navigate = useNavigate();
  return (<>
    <header>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Fotografía de Crhistian Beteta Navarro"
            src="/me.jpg"
            sx={{ width: "175px !important", height: "175px !important" }}
          />
        </Box>

        <Typography align="center" variant="h1" >
          Crhistian Beteta
        </Typography>
      </Container>
    </header>
    <main>
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
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" }}}>Experiencia profesional</Typography>
          </Button>
          <Button
            onClick={() => {
              navigate("/skills");
            }} 
          >
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" }}}>Habilidades</Typography>
          </Button>

          <Button
            onClick={() => {
              navigate("/courses");
            }}
          >
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" }}}>Cursos</Typography>
          </Button>

          <Button
            onClick={() => {
              navigate("/academic-background");
            }}
          >
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" }}}>Formación</Typography>
          </Button>
        </ButtonGroup>
      </Box>
    </main>
  </>
  );
}
