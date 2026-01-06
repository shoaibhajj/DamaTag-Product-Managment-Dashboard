"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
