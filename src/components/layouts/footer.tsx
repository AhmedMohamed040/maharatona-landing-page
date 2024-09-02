"use client";


import { createTheme } from "@mui/material/styles";

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
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

  return (
    <Box sx={{bgcolor: '#1b76ba'}}>
      <Container >
        <Grid sx={{py:4, px:6}} container alignItems="center" spacing={3}>
          <Grid xs={12} sm={6} >
          <Box sx={{gap:0.5,display:'flex', flexDirection:'column', alignItems:{md:'start', xs:'center'}}}>
              <Typography fontWeight="bold" variant="h5" color="#fff">
                Contact Us
              </Typography>
              <Typography variant="body2"  color="#fff">
                Address here
              </Typography>
              <Typography variant="body2"  color="#fff">
                +1234567890123
              </Typography>
              <Typography variant="body2"  color="#fff">
                user@asdasd.com
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={6}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:{md:'end', xs:'center'}}}>
              <Typography variant="body2"  color="#fff">
                Download the app
              </Typography>
              <Link href="#">
                <Image
                  src="/assets/footer/app-store.svg"
                  alt="playstore"
                  width={110}
                  height={50}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/footer/play-store.svg"
                  alt="playstore"
                  width={110}
                  height={50}
                />
              </Link>
            </Box>
          </Grid>
          
        </Grid>
        
      </Container>
      <Box sx={{bgcolor:'#f4f6f8'}}>
      <Container>

      <Grid  sx={{ px:6}} justifyContent="space-between"  container alignItems="space" spacing={3}>
          <Grid xs={12} md={4} sx={{order:{md:1, xs:2},textAlign:{xs:'center',md: "left" }}}>
            <Typography variant="body2" color="text.secondary">
            Elma © Copyright 2020, Inc. All rights reserved 
            </Typography>
          </Grid>
          <Grid xs={12} md={4} sx={{order:{md:2, xs:1}}}>
            <Box sx={{ gap:1,display:'flex',alignItems:'center', justifyContent:{xs:'center',md:"flex-end"} }}>
              <Link href="#">
              <Iconify color="text.secondary" icon="streamline:facebook-1-solid" />
              </Link>
              <Link  href="#">
              <Iconify  color="text.secondary" icon="mdi:twitter" />
              </Link>
              <Link  href="#">
              <Iconify  color="text.secondary" icon="mdi:linkedin" />
              </Link>
              <Link  href="#">
              <Iconify  color="text.secondary" icon="ant-design:instagram-outlined" />
              </Link>
              <Link  href="#">
              <Iconify  color="text.secondary" icon="uiw:github" />
              </Link>
            </Box>
            </Grid>
          </Grid>
      </Container>
      </Box>

    </Box>
  );
}
