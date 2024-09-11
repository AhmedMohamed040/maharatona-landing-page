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
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";

import Grid from "@mui/material/Unstable_Grid2";

function Section1(): React.JSX.Element {
  const t = useTranslations();
  const currentLang = useLocale();
  return (

    <Box id="home" sx={{mt:10}}>

      <Container >
        <Grid  container spacing={0} justifyContent={{md:'space-between',xs:'center'}}>
          <Grid xs={12} sx={{direction:currentLang === 'ar'?'rtl':'ltr' ,display:'flex',alignItems:'center', justifyContent:'center',position:'relative', mt:{xs:4,md:0}}}>
              <Box sx={{left:'50%',rigth:0,top:'50%', transform:'translate(-50%, -50%)',position:'absolute'}}>
              <Typography fontWeight="600" variant="h4" color="primary.dark" sx={{textAlign:'center', color:'#fff',fontSize: { md: '34px', xs:'21px' }, lineHeight: 1.7}}>
              {t("Global.partner.section1.mainText")}
                </Typography>
                <Typography fontWeight="600" variant="h6" color="primary.dark" sx={{ textAlign:'center',color:'#fff', fontSize: { md: '24px',xs:'15px' }, lineHeight: 1.7}}>
                {t("Global.partner.section1.subText")}
                </Typography>
              </Box>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ mx: { xs: 'auto', md: 0 }, height: '100%',  }}
              image={"/assets/images/partner/section1/hero.png"}
            />
          </Grid>
         
        </Grid>
      </Container>
    </Box>

  );
}

export default Section1;
/*  imageRendering
imageOrientation
imageResolution */
