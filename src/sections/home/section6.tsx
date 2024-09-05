/* eslint-disable @next/next/no-img-element */
"use client";

import {
    Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { useTranslations } from "next-intl";

import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "@/components/iconify";

function Section6(): React.JSX.Element {
  const t = useTranslations();

  return (
    <Box sx={{my:4, minHeight: 550, bgcolor: "#fff",display:'flex', alignContent:"center", alignItems:"flex-end"}}>
        <Box sx={{bgcolor:"#3cb8bb", width:'100%', height:400,borderRadius:6,}}>
        <Box
          component="img"
          src="/assets/images/section6/line1.png"
          sx={{
            width: 500,
            height: 400,
            right:0,
            transform:'translate(-80%, -4%)',
            position: "absolute",
          }}
        />
        </Box>
    </Box>
  );
}

export default Section6;
