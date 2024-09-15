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
import { motion, Variants } from "framer-motion";

import Grid from "@mui/material/Unstable_Grid2";

function Section4(): React.JSX.Element {
  const t = useTranslations();

  const downSide: Variants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
        delay: 0.5
      }
    }
  };
  const upSide: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
        delay: 0.5
      }
    }
  };
  const leftSide: Variants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
        delay: 0,
      },
    },
  };
  return (
    <Box sx={{ my: 7 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={6} sx={{ display: "flex", alginItems: "center" }}>
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div variants={leftSide}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  sx={{
                    objectFit: "contain",
                    mx: { xs: "auto", md: 0 },
                    height: "auto",
                    width: "100%",
                    maxWidth: 500,
                    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
                  }}
                  image={"/assets/images/section4/Mobile-App.png"}
                />
              </motion.div>
            </motion.div>
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
            
            <Grid container spacing={5} gap={5} sx={{mr:{md:7,xs:0},width: '100%' }} flexDirection="column" justifyContent="center" alignItems="center">
              <Grid xs={12}>
                <Typography
                  fontWeight="600"
                  component="div"
                  variant="body1"
                  sx={{ fontSize: { md: "34px", xs: "24px" }, mt: 4 }}
                  color="primary.dark"
                >
                  {t("Global.Section4.title")}
                  <span>
                    {t("Global.Section4.title1")}
                    <br />
                    <Box
                      component="img"
                      src={"/assets/images/section4/underLine.svg"}
                      sx={{ width: "100%" }}
                      height={{ md: 20, xs: 10 }}
                    />
                  </span>
                </Typography>
              </Grid>
              <Grid xs={12} gap={7} sx={{ width: { xs: 'auto', md: '100%' }, display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alginItems: "center" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'end' }, flexDirection: 'column' }}>
                  <Box
                    component="img"
                    src={"/assets/images/section4/3dcube.svg"}

                    height={{ md: 70, xs: 70 }}
                  />
                  <br />
                  <Typography
                    fontWeight="600"
                    variant="body1"
                    sx={{ fontSize: { md: "24px", xs: "17px" } }}
                    color="primary.dark"
                  >
                    {t("Global.Section4.browserCourses")}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'end' }, flexDirection: 'column' }}>
                  <Box
                    component="img"
                    src={"/assets/images/section4/mouse-square.svg"}

                    height={{ md: 70, xs: 70 }}
                  />
                  <br />
                  <Typography
                    fontWeight="600"
                    variant="body1"
                    sx={{ fontSize: { md: "24px", xs: "17px" } }}
                    color="primary.dark"
                  >
                    {t("Global.Section4.getCourses")}
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} gap={7} sx={{ width: { xs: 'auto', md: '100%' }, display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alginItems: "center" }}>
                <Box sx={{ width: { xs: 'auto', md: '40%' }, display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'end' }, flexDirection: 'column' }}>
                  <Box
                    component="img"
                    src={"/assets/images/section4/heart.svg"}
                    height={{ md: 70, xs: 70 }}
                  />
                  <br />
                  <Typography
                    fontWeight="600"
                    variant="body1"
                    sx={{ fontSize: { md: "24px", xs: "17px" } }}
                    color="primary.dark"
                  >
                    {t("Global.Section4.support")}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: 'center', md: 'end' }, flexDirection: 'column' }}>
                  <Box
                    component="img"
                    src={"/assets/images/section4/card.svg"}
                    height={{ md: 70, xs: 70 }}
                  />
                  <br />
                  <Typography
                    fontWeight="600"
                    variant="body1"
                    sx={{ fontSize: { md: "24px", xs: "17px" } }}
                    color="primary.dark"
                  >
                    {t("Global.Section4.payment")}
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12}>
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
              <Grid xs={12} gap={3} sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, alginItems: "center" }}>
              <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div variants={upSide}>
              
                <Box
                  component="img"
                  src={"/assets/images/section4/play-store.svg"}
                  height={{ md: 50, xs: 40 }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div variants={downSide}>
              
              <Box
                  component="img"
                  src={"/assets/images/section4/app-store.svg"}
                  height={{ md: 50, xs: 40 }}
                />
              </motion.div>
            </motion.div>
              
              </Grid>
            </Grid>
          </Grid>
        </Grid>


    </Box>
  );
}

export default Section4;
