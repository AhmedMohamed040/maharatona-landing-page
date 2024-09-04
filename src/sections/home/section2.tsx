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
        <Box sx={{ pt: 10, pb: 10, minHeight: 300 }}>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box component="img" src="/assets/images/section2/top.svg" sx={{ width: '100%', top: 0, transform: {xs:'translate(0%, -20%)',md:'translate(0%, -10%)'}, position: 'absolute' }} />

            </Box>
            <Grid container spacing={2} sx={{ bgcolor: "#3CB8BB1A", alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Grid xs={12} display="flex" sx={{ justifyContent: 'center' }}>
                    <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '34px', xs: '24px' }, mt: 14 }} color="primary.dark" >

                        {t('Global.Section2.title')}
                        <span>
                            {t('Global.Section2.title1')}
                            <br />
                            <Box component="img" src={'/assets/images/section2/underLine.svg'} sx={{ width: '100%' }} height={{ md: 20, xs: 10 }} />
                        </span>
                    </Typography>
                </Grid>
                <Grid xs={12} display="flex" sx={{ justifyContent: 'center' , }}>
                    <Container>

                    <Box sx={{textAlign:'center', gap:4, my: 6,flexDirection:{md:'row', xs:'column'}, display: 'flex',justifyContent: "space-evenly", width:'100%'  }}>
                        <Box>
                            <Box component="img" src={'/assets/images/section2/shield.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                                {t('Global.Section2.payment')}
                            </Typography>
                        </Box>
                        <Box>
                            <Box component="img" src={'/assets/images/section2/skyscrapper.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                                {t('Global.Section2.branches')}
                            </Typography>
                        </Box>
                        <Box>
                            <Box component="img" src={'/assets/images/section2/target.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                                {t('Global.Section2.use')}
                            </Typography>
                        </Box>
                        <Box>
                            <Box component="img" src={'/assets/images/section2/template.svg'} sx={{ width: '100%' }} height={{ md: 120, xs: 70 }} />
                            <br />
                            <Typography fontWeight="600" component="div" variant="body1" sx={{ fontSize: { md: '24px', xs: '17px' } }} color="primary.dark" >
                                {t('Global.Section2.design')}
                            </Typography>
                        </Box>
                    </Box>
                    </Container>
                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box component="img" src="/assets/images/section2/upLine.svg" sx={{ width: '100%', top: 0, transform: {xs:'translate(0%, 0%)',md:'translate(0%, -10%)'}, position: 'absolute' }} />

            </Box>
        </Box>
    );
}

export default Section2;
