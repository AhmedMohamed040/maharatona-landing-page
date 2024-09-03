"use client";


import { createTheme } from "@mui/material/styles";
import {useTranslations} from 'next-intl';

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  IconButton,
  Typography,

} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
  window?: () => Window;
};

const customTheme = createTheme({
  typography: {
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      main: "#ffdb00",
    },
  },
});
export default function Footer(props: Props) {
  const t = useTranslations();

  return (
    <Box sx={{position:'relative',mt:'auto',  bottom: 0, width:'100%' ,hieght:100}}>

      <Box >

          <Grid sx={{ px: 6 }} justifyContent="space-between" container alignItems="center" spacing={3}>
            <Grid xs={12} md={4} sx={{ display: "flex", justifyContent: { md: 'flex-start', xs: 'center' } }}>
              <Box sx={{ gap: 1, display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: "flex-end" } }}>

                <IconButton href="#" sx={{ boxShadow: 1 }} >
                  <Iconify color="primary.dark" icon="mdi:twitter" />
                </IconButton>
                <IconButton href="#" sx={{ boxShadow: 1 }}>
                  <Iconify color="primary.dark" icon="basil:instagram-outline" />
                </IconButton>
                <IconButton href="#" sx={{ boxShadow: 1 }}>
                  <Iconify color="primary.dark" icon="gg:facebook" />
                </IconButton>
              </Box>
            </Grid>


            <Grid xs={12} md={4} sx={{ display: "flex", justifyContent:   'center'  }}>
              <Typography variant="body2" color="primary.dark" fontWeight="600">
               {t('Global.Footer.Copyright')}
              </Typography>
            </Grid>
            <Grid xs={12} md={4} sx={{ display: "flex", justifyContent: { md: 'right', xs: 'center' } }} >
              <Box
                component="img"
                alt="auth"
                src={"/assets/logo/logo.svg"}
                sx={{
                  display: "block",
                  width: { xs: 70, md: 100 },
                  height: { xs: 70, md: 70 },
                }}
              />
            </Grid>
          </Grid>
      </Box>

    </Box>
  );
}
