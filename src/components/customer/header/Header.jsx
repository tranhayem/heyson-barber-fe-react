import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/material/styles";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Logo = styled("img")(({ theme }) => ({
  height: "40px",
  marginRight: "16px",
  transition: "filter 0.3s ease",
  "&:hover": {
    filter: `drop-shadow(0 0 10px ${theme.palette.highlight.main})`,
  },
}));

const Header = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  const buttons = [
    { to: "/", label: "Trang chủ" },
    { to: "/services", label: "Dịch Vụ" },
    { to: "/products", label: "HeySon Shop" },
  ];

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link to="/">
              <Logo src="/static/favicons/logo.png" alt="Logo" />
            </Link>

            <Box sx={{ flexGrow: 1 }} />

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
                    backgroundColor: (theme) => theme.palette.highlight.main,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
