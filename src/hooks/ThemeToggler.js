import { teal } from "@mui/material/colors";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

import React from "react";
import { ColorModeContext } from "./ColorModeContext";
export default function ThemeToggler({ children }) {
  const [mode, setMode] = React.useState("dark");
  const theme = responsiveFontSizes(createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: teal,
            contrastText: "#FFFFFF",
          }
        : {
            // palette values for dark mode
            primary: teal,
            contrastText: "#FFFFFF",
          }),
    },
  }));

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
