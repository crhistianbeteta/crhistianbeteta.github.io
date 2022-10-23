import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MaterialLink from "@mui/material/Link";
import { Link } from "react-router-dom";
import ThemeTogglerButton from "../themeTogglerButton/ThemeTogglerButton";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const pages = [
    { title: "Inicio", url: "/" },
    { title: "Experiencia", url: "/professional-experience" },
    { title: "Cursos", url: "/courses" },
    { title: "Formacion", url: "/academic-background" },
    { title: "Habilidades", url: "/skills" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex", lg: "flex" }, mr: 1 }}>
            <Link to={"/"}>
              <Avatar alt="Crhistian Beteta" src={logo} />
            </Link>
          </Box>

          <Typography
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ title, url }) => (
                <MenuItem key={title}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to={url}>
                      <MaterialLink
                        color="text.secondary"
                        sx={{ textDecoration: "none" }}
                      >
                        {title}
                      </MaterialLink>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1, flexGrow: 1 }}>
            <Link to={"/"}>
              <Avatar alt="Crhistian Beteta" src={logo} />
            </Link>
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <ThemeTogglerButton />
          </Box>

          {/* NOT MOBILE */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map(({ title, url }) => (
              <Button key={title} sx={{ my: 2, display: "block" }}>
                <Link style={{ textDecoration: "none" }} to={url}>
                  <MaterialLink
                    color="contrastText"
                    sx={{ textDecoration: "none" }}
                  >
                    {title}
                  </MaterialLink>
                </Link>
              </Button>
            ))}
            <ThemeTogglerButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
