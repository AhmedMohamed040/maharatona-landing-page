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

function Section3(): React.JSX.Element {
    const t = useTranslations();

  return (
    
    <Box sx={{my:7}}>
      <Grid container spacing={1}>
        <Grid xs={12} md={7} sx={{display:'flex' , alginItems:'center'}}>
        <CardMedia
            component="img"
             alt="green iguana"
            sx={{disply:{md:'block', xs:'none'},height:100, maxWidth:70,my:'auto'}}
            image={"/assets/images/section3/Icons.svg"}
        />
        <CardMedia
            component="img" 
             alt="green iguana"
            sx={{objectFit:'contain',mx:{xs:'auto',md:0},height:'auto', width:'100%',maxWidth:500}}
            image={"/assets/images/section3/left.png"}
        />
        </Grid>
        <Grid xs={12} md={5} display="flex" sx={{flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
        <span style={{marginRight:'auto'}}>
            <CardMedia
            component="img" 
             alt="green iguana"
            sx={{ display:'inline', mx:0.5, objectFit:'contain',height:90, width:150}}
            image={"/assets/images/section3/line.svg"}
        />
            </span>
         <Typography fontWeight="600" variant="h4" color="primary.dark" sx={{unicodeBidi: 'embed', direction: 'rtl',display:'inline',mt:2,textOverflow:'nowrap',fontSize:{md:'40px',xs:'24px'},lineHeight: 2,textAlign:'right'}}>
            {t('Global.Section3.mainText')} 
            <span>
            <CardMedia
            component="img" 
             alt="green iguana"
            sx={{ display:'inline', mx:0.5, objectFit:'contain',height:50, width:50}}
            image={"/assets/images/section3/emoji.svg"}
        />
            </span>

         </Typography>
         <br />
         <Typography fontWeight="400" variant="h4" color="primary.dark" sx={{unicodeBidi: 'embed', direction: 'rtl',mt:2,textOverflow:'wrap',fontSize:{md:'18px',xs:'16px'},lineHeight: 2,textAlign:'right'}}>
            {t('Global.Section3.subText')}
            <br />
            {t('Global.Section3.subText1')}

         </Typography>
        </Grid>
      </Grid>

    </Box>
    
  );
}

export default Section3;
