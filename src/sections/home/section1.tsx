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
import {useTranslations} from 'next-intl';

import Grid from "@mui/material/Unstable_Grid2";

function Section1(): React.JSX.Element {
    const t = useTranslations();

  return (
    
    <Box>
      <Grid container spacing={1}>
        <Grid xs={12} md={6}>
        <CardMedia
            component="img"
             alt="green iguana"
            sx={{mx:{xs:'auto',md:0},height:'100%', maxWidth:{md:500,xs:600}}}
            image={"/assets/images/section1/kids.png"}
        />
        </Grid>
        <Grid xs={12} md={6} display="flex" sx={{alignItems:'center', justifyContent:'flex-end'}}>
         <Typography fontWeight="600" variant="h4" color="primary.dark" sx={{fontSize:{md:'34px',xs:'24px'},lineHeight: 2,textAlign:'right'}}>
            {t('Global.Section1.mainText')} <span style={{wordBreak:'break-word',background:'#3cb8bb', borderRadius:15}}>{t('Global.Section1.subText')}</span>
            <br />
            {t('Global.Section1.mainText1')}<span style={{backgroundColor:'#3cb8bb', borderRadius:15}}>{t('Global.Section1.subText1')}</span>
            <br />
            {t('Global.Section1.mainText2')}<span style={{backgroundColor:'#3cb8bb', borderRadius:15 }}>{t('Global.Section1.subText2')}</span>

         </Typography>
        </Grid>
      </Grid>

    </Box>
    
  );
}

export default Section1;
