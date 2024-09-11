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

import { motion, Variants } from "framer-motion";

function Section1(): React.JSX.Element {
  const t = useTranslations();

  const cardVariants: Variants = {
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
        delay:0.3
      }
    }
  };
  const leftSide: Variants = {
    offscreen: {
      x:-200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,

      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
        delay:0
     }
    }
  };
 
  return (

    <Box sx={{ my: 10 }}>

      <Container >
        <Grid id="home" container spacing={0} justifyContent={{ md: 'space-between', xs: 'center' }}>
          <Grid xs={12} md={6} sx={{ mt: { xs: 4, md: 10 } }}>
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
              sx={{ mx: { xs: 'auto', md: 0 }, height: '100%', maxWidth: { md: 500, xs: 600 } }}
              image={"/assets/images/section1/kids.png"}
            />
                
              </motion.div>
            </motion.div>
           
          </Grid>
          <Grid xs={12} md={6} display="flex" sx={{
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-end' },
            mt: { xs: 10, md: 17 }
          }}>
            <Box sx={{ display: { md: 'block', xs: 'none' }, position: 'absolute', }}>
              <Box component="img" src="/assets/images/section1/background.svg" sx={{ zIndex: -1, height: "auto", width: 600, transform: 'translate(22%, 4%)', }} />
            </Box>
            <Typography fontWeight="600" variant="h4" color="primary.dark" sx={{ fontSize: { md: '34px', xs: '24px' }, lineHeight: 1.7, textAlign: 'right' }}>
              {t('Global.Section1.mainText')} <span style={{ wordBreak: 'break-word', background: '#ebf8f8', borderRadius: 15 }}>{t('Global.Section1.subText')}</span>
              <br />
              <Box component={'span'} sx={{ fontSize: { md: '24px', xs: '17px' } }}>

                {t('Global.Section1.mainText1')}
                <span style={{ backgroundColor: '#ebf8f8', borderRadius: 15 }}>{t('Global.Section1.subText1')}</span>
              </Box>
              <Box component={'span'} sx={{ fontSize: { md: '24px', xs: '17px' } }}>

                {t('Global.Section1.subText1-2')}
              </Box>
              <br />
              <Box component={'span'} sx={{ fontSize: { md: '24px', xs: '17px' } }}>

                {t('Global.Section1.mainText2')}<span style={{ backgroundColor: '#ebf8f8', borderRadius: 15 }}>{t('Global.Section1.subText2')}</span>
              </Box>


            </Typography>

          </Grid>
          <Grid xs={12} display="flex" sx={{
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-end' },
            mt: { xs: 4, md: 0 }
          }}>
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 1 }}
            >
              <motion.div variants={cardVariants}>

                <Button variant="contained" sx={{ fontSize: { md: '19px', xs: '14px' }, borderRadius: 2, borderTopLeftRadius: 50, py: 2, px: 4, bgcolor: '#3cb8bb' }}>
                  {t('Global.Section1.register')}
                </Button>
              </motion.div>
            </motion.div>

          </Grid>
        </Grid>
      </Container>
    </Box>

  );
}

export default Section1;
/*   */
