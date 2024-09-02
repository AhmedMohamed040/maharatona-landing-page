"use client";
import { createTheme } from "@mui/material/styles";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily, // Set Poppins as the default font family
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXs: "1110px",
        maxWidthSm: "1110px",
        maxWidthMd: "1110px",
        maxWidthLg: "1110px",
        maxWidthXl: "1110px",
      },
      defaultProps: { style: { marginInline: "auto" } },
    },
  },

  // You can customize other parts of the theme as needed
});

const modifiedTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      dark: "#1b76ba",
    },
  },
  breakpoints: {
    ...theme.breakpoints,
    values: { ...theme.breakpoints.values, sm: 545 },
  },
};

export default modifiedTheme;
