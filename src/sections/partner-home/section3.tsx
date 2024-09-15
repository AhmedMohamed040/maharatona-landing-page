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
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import Grid from "@mui/material/Unstable_Grid2";

function Section3(): React.JSX.Element {
  const t = useTranslations();
  const currentLang =useLocale()
  return (
    <Box sx={{ pt: 2, pb: 4, minHeight: 400 }}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="/assets/images/partner/section3/upLine.svg"
          sx={{
            width: "100%",
            top: 0,
            transform: { xs: "translate(0%, -10%)", md: "translate(0%, -5%)" },
            position: "absolute",
          }}
        />
      </Box>
      <Grid container spacing={1} sx={{bgcolor:'#feefd1',pt:12 , pb:0}}>
        <Grid xs={12} md={6} sx={{ display: "flex", alginItems: "center" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              disply: { md: "block", xs: "none" },
              height: 'auto',
              maxWidth: {md:110, xs:75},
              mt: "auto",
              overflow:'hidden',
              right:0,
              zIndex:{md:0, xs:0},
              position:{md:'relative', xs:'absolute'},
              ml:2,
            }}
            image={"/assets/images/partner/section3/background.svg"}
          />
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              objectFit: "contain",
              mx: { xs: "auto", md: 0 },
              height: "auto",
              width: "100%",
              zIndex:{md:1, xs:1},
              position:'relative',
              maxWidth:350,
            }}
            image={"/assets/images/partner/section3/kids.png"}
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          display="flex"
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ marginRight: "auto" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{
                display: "inline",
                mx: 0.5,
                objectFit: "contain",
                height: 90,
                width: 150,
              }}
              image={"/assets/images/partner/section3/arrow.svg"}
            />
          </span>
          <Typography
            fontWeight="600"
            variant="h4"
            color="primary.dark"
            sx={{
              unicodeBidi: "embed",
            ml:{xs:0,md:8},
            direction:currentLang === 'ar'?'rtl':'ltr',
              textAlign:"center",
              mt: 2,
             position:'relative',
             zIndex:4,
             top:{xs:-30,md:0},
              fontSize: { md: "60px", xs: "24px" },
              lineHeight: 2,
            }}
          >
            {t(`Global.partner.section3.mainText`)} {"❤️"}
        
          </Typography>
      
       
        </Grid>
      </Grid>

      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="/assets/images/partner/section3/underLine.svg"
          sx={{
            width: "100%",
            top: 0,
            transform: { xs: "translate(0%, -7%)", md: "translate(0%, -10%)" },
            position: "absolute",
          }}
        />
      </Box>
    </Box>
  );
}

export default Section3;
