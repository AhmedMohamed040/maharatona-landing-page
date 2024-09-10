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

import Grid from "@mui/material/Unstable_Grid2";

function Section2(): React.JSX.Element {
    const t = useTranslations();

    return (
        <Box sx={{my:7, minHeight: 300 }}>
         
            <Grid container spacing={2} sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Grid xs={12} display="flex" sx={{ justifyContent: 'center' }}>
                <Typography fontWeight="600" variant="h4" color="primary.dark" sx={{textAlign:'center', color:'#396b9e',fontSize: { md: '34px', xs:'21px' }, lineHeight: 1.7}}>
              {t("Global.partner.section2.mainText")}
                </Typography>
                </Grid>
                <Grid xs={12} display="flex" sx={{ justifyContent: 'center' }}>
                    <Container>

                    <Box sx={{textAlign:'center', gap:4, my: 6,flexDirection:{md:'row', xs:'column'}, display: 'flex',justifyContent: "space-evenly", width:'100%'  }}>
                        <Box>
                            <Box component="img" src={'/assets/images/partner/section2/test.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                            {t("Global.partner.section2.subText1")}
                            </Typography>
                        </Box>
                        <Box>
                            <Box component="img" src={'/assets/images/partner/section2/cash.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                            {t("Global.partner.section2.subText2")}
                            </Typography>
                        </Box>
                        <Box>
                            <Box component="img" src={'/assets/images/partner/section2/shield.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                            {t("Global.partner.section2.subText3")}
                            </Typography>
                        </Box>
                       
                    </Box>
                    </Container>
                </Grid>
            </Grid>
           
        </Box>
    );
}

export default Section2;
