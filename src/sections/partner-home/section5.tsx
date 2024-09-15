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

function Section5(): React.JSX.Element {
  const t = useTranslations();
  const currentLang = useLocale();
  return (
    <Box sx={{ my: 7 }}>
      
      <Grid container spacing={4}>
        <Grid xs={12} md={6} sx={{ display: "flex", alginItems: "center" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              objectFit: "contain",
                    mx: { xs: "auto", md: 0, lg:0, xl:0 },
                    height: "auto",
                    width: "100%",
                    right:0,
                    maxWidth: 500,
              filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
            }}
            image={"/assets/images/partner/section5/Mobile-App.png"}
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          display="flex"
          sx={{
            flexDirection: "row",
            justifyContent: 'center',
          }}
        >

          <Grid container spacing={5} gap={5} sx={{ml:{md:7,xs:0},direction:currentLang === 'ar'?'rtl':'ltr', width: '100%' }} flexDirection="column" justifyContent="center" alignItems="center">
            <Grid xs={12} >
              <Typography
                fontWeight="600"
                component="div"
                variant="body1"
                sx={{textAlign:'center', fontSize: { md: "34px", xs: "24px" }, mt: 4 }}
                color="primary.dark"
              >
                {t("Global.partner.section5.mainText")}
                <span>
                {t("Global.partner.section5.mainText2")}
                  <br />
                  <Box
                    component="img"
                    src={"/assets/images/partner/section5/underLine.svg"}
                    sx={{ width: "100%" }}
                    height={{md:"17px",xs:'12px'}}
                  />
                </span>
              </Typography>
            </Grid>
            <Grid xs={12} gap={7} sx={{ width: { xs: 'auto', md: '100%' }, display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alginItems: "center" }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'start' }, flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={"/assets/images/partner/section5/user.svg"}

                  height={{ md: 70, xs: 70 }}
                />
                <br />
                <Typography
                  fontWeight="600"
                  variant="body1"
                  sx={{ fontSize: { md: "24px", xs: "17px" } }}
                  color="primary.dark"
                >
                   {t("Global.partner.section5.subText1")}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'start' }, flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={"/assets/images/partner/section5/mange.svg"}

                  height={{ md: 70, xs: 70 }}
                />
                <br />
                <Typography
                  fontWeight="600"
                  variant="body1"
                  sx={{ fontSize: { md: "24px", xs: "17px" } }}
                  color="primary.dark"
                >
                     {t("Global.partner.section5.subText2")}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} gap={7} sx={{ width: { xs: 'auto', md: '100%' }, display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alginItems: "center" }}>
              <Box sx={{  display: 'flex', justifyContent: 'end', alignItems: { xs: 'center', md: 'start' }, flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={"/assets/images/partner/section5/chart.svg"}
                  height={{ md: 70, xs: 70 }}
                />
                <br />
                <Typography
                  fontWeight="600"
                  variant="body1"
                  sx={{ fontSize: { md: "24px", xs: "17px" } }}
                  color="primary.dark"
                >
                    {t("Global.partner.section5.subText3")}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'start' }, flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={"/assets/images/partner/section5/like.svg"}
                  height={{ md: 70, xs: 70 }}
                />
                <br />
                <Typography
                  fontWeight="600"
                  variant="body1"
                  sx={{ fontSize: { md: "24px", xs: "17px" } }}
                  color="primary.dark"
                >
                    {t("Global.partner.section5.subText4")}
                </Typography>
              </Box>
            </Grid>
            <Grid id="download" xs={12}>
              <Typography
                fontWeight="600"
                component="div"
                variant="body1"
                sx={{ fontSize: { md: "24px", xs: "17px" }, mt: 4 }}
                color="primary.dark"
              >
                {t("Global.Section4.download")}

              </Typography>
            </Grid>
            <Grid xs={12} gap={3} sx={{  display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alginItems: "center" }}>
       
            <Box
                component="img"
                src={"/assets/images/partner/section5/App-Store.svg"}
                height={{ md: 50, xs: 40 }}
              />
              <Box
                component="img"
                src={"/assets/images/partner/section5/Play-Store.svg"}
                height={{ md: 50, xs: 40 }}
              />
             
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    

    </Box>
  );
}

export default Section5;
