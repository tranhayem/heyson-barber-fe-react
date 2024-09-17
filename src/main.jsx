import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
