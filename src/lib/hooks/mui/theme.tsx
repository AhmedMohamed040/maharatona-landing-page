"use client";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import {  Barlow } from "next/font/google";
import { useMemo } from "react";
import { MenuItem } from "@mui/material";
import { Baloo_Bhaijaan_2  } from "next/font/google";

export const primaryFont = localFont({
  src: [
  
    {
      path: "./../../../../public/fonts/baloo-bhaijaan2-extra-bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../../../../public/fonts/baloo-bhaijaan2-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../../../public/fonts/baloo-bhaijaan2-semi-bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../../../public/fonts/baloo-bhaijaan2-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../../../public/fonts/baloo-bhaijaan2-regular.ttf",
      weight: "400",
      style: "normal",
    },
    
  ],
});

export const secondaryFont = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
const baloo = Baloo_Bhaijaan_2({
  weight: ["400", "500", "600", "700", "800", ],
  subsets: ["arabic"],
})
const typography = {
  fontFamily:baloo.style.fontFamily,
  fontSecondaryFamily: secondaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,

};
const memoizedValue = {
    typography,
   

};
const theme = createTheme(

  {
    typography,
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
  } as ThemeOptions);

const modifiedTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      lightest: "#EBF8F8",
      light: "#B8D0DF",
      main: '#84A7C5',
      dark: "#1D5691",
      darkest: "#1D5691"
    },
    warning: {
     
        ...theme.palette.warning,
        lightest: "#FEEFD1",
        light: "#FCCF76",
        main: '#faaf1b',
        dark: "#E39F19",
        darkest: "#CE9117"
      
    }
  },
  breakpoints: {
    ...theme.breakpoints,
    values: { ...theme.breakpoints.values, sm: 545 },
  },
};

export default modifiedTheme;
