import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/material/styles";

import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Logo = styled("img")(({ theme }) => ({
  height: "80%",
  marginRight: "16px",
  transition: "filter 0.3s ease",
  "&:hover": {
    filter: `drop-shadow(0 0 10px ${theme.heySonCustom.palette.highlightColor})`,
  },
}));

const Header = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttons = [
    { to: "/", label: "Trang chủ" },
    { to: "/services", label: "Dịch Vụ" },
    { to: "/products", label: "HeySon Shop" },
  ];

  const toggleDrawer = useCallback(
    (open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    },
    []
  );

  const menuItems = buttons.map(({ to, label }) => (
    <Button
      key={to}
      color="inherit"
      component={Link}
      to={to}
      onClick={toggleDrawer(false)}
      sx={{
        width: "100%",
        justifyContent: "flex-start",
        padding: "16px",
        backgroundColor:
          location.pathname === to
            ? (theme) => theme.heySonCustom.palette.highlightColor
            : "transparent",
        "&:hover": {
          backgroundColor: (theme) => theme.heySonCustom.palette.highlightColor,
        },
      }}
    >
      {label}
    </Button>
  ));

  return (
    <AppBar
      position="static"
      sx={{
        height: (theme) => theme.heySonCustom.appBarHeight,
      }}
    >
      <Container
        sx={{
          height: "100%",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              height: "100%",
            }}
          >
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Logo src="/static/favicons/logo.png" alt="HeySon Logo" />
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {buttons.map(({ to, label }) => (
                <Button
                  key={to}
                  color="inherit"
                  component={Link}
                  to={to}
                  className={`header-button ${
                    location.pathname === to && !hovered ? "active" : ""
                  }`}
                  onMouseOver={() => setHovered(true)}
                  onMouseOut={() => setHovered(false)}
                  sx={{
                    marginX: 1,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "2px",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease",
                      backgroundColor: (theme) =>
                        theme.heySonCustom.palette.highlightColor,
                    },
                    "&.active::after, &:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon
                  sx={{
                    color: (theme) => theme.heySonCustom.palette.highlightColor,
                    fontSize: "2rem",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        aria-hidden={!drawerOpen}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
