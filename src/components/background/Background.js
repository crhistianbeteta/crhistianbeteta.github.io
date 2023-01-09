//Background.js
import React from "react";
import { Box } from "@mui/system";
import { Container, Paper } from "@mui/material";

const Background = ({ children }) => {
  return (
    <Paper style={{ minHeight: "100vh", borderRadius: 0, paddingTop: "5rem" }}>
      <Box sx={{ padding: "1rem" }}>
        <Container>
          <div>{children}</div>
        </Container>
      </Box>
    </Paper>
  );
};

export default Background;
