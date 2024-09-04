/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Section1 from "./section1";
import Slider from "../../components/shared/slider/index";
import Grid from "@mui/material/Unstable_Grid2";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";


function HomeView(): React.JSX.Element {


  return (
    <Box>
      <Container >
      <Section1/>
      </Container>
      <Section2/>
      <Container>
        <Section3 />
      </Container>
        <Section4 />
      <Section5 />
    </Box>
  );
}

export default HomeView;
