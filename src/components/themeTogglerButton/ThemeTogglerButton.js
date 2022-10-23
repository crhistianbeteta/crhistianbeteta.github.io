import React, { useContext } from "react";
import { ColorModeContext } from "../../hooks/ColorModeContext";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeTogglerButton() {
  const { mode, setMode } = useContext(ColorModeContext);

  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <Brightness7Icon /> : <DarkModeIcon />}
    </IconButton>
  );
}
