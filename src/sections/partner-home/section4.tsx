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

function Section4(): React.JSX.Element {
    const t = useTranslations();
    const currentLang = useLocale();
    return (
        <Box sx={{direction:currentLang === 'ar'? 'rtl':'ltr',my:7, minHeight: 300 }}>
         
            <Grid container spacing={2} sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Grid xs={12} display="flex" sx={{ justifyContent: 'center' }}>
                <Typography fontWeight="600" variant="h4" color="primary.dark" sx={{textAlign:'center', color:'#396b9e',fontSize: { md: '34px', xs:'21px' }, lineHeight: 1.7}}>
              {t("Global.partner.section4.mainText")}
                </Typography>
                </Grid>
                <Grid xs={12} display="flex" sx={{ justifyContent: 'center' }}>

                    <Box sx={{height:400, textAlign:'center', gap:4, my: 6,flexDirection:{md:'row', xs:'column'}, display: 'flex',justifyContent: "space-evenly", width:'100%'  }}>
                        <Box>
                            <Box component="img" src={'/assets/images/partner/section4/right.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                            {t("Global.partner.section4.subText1")}
                            </Typography>
                        </Box>
                        <Box sx={{alignSelf:{md:'flex-end',xs:'inhirt'}}}>
                            <Box component="img" src={'/assets/images/partner/section4/middle.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                            {t("Global.partner.section4.subText2")}
                            </Typography>
                        </Box>
                        <Box>
                            <Box component="img" src={'/assets/images/partner/section4/left.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                            {t("Global.partner.section4.subText3")}
                            </Typography>
                        </Box>
                       
                    </Box>
                </Grid>
            </Grid>
           
        </Box>
    );
}

export default Section4;
