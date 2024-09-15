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
  const currentLang = useLocale();
  
  return (
    <Box sx={{ my:{xs:2, lg:7} }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={7} sx={{ display: "flex", alginItems: "center" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
              display: { md: "block", xs: "none" },
              height: 100,
              maxWidth: 70,
              my: "auto",
            }}
            image={"/assets/images/section3/Icons.svg"}
          />
       
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{
                  objectFit: "contain",
                  mt: 4,
                  mx: { xs: "auto", md: 0 },
                  height: "auto",
                  width: "100%",
                  maxWidth: 500,
                }}
                image={"/assets/images/section3/Left.png"}
              />
        
        </Grid>
        <Grid
          xs={12}
          md={5}
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
              image={"/assets/images/section3/line.svg"}
            />
          </span>
          <Typography
            fontWeight="600"
            variant="h4"
            color="primary.dark"
            sx={{
              unicodeBidi: "embed",
              direction: currentLang === 'ar'? "rtl":"ltr" ,
              display: "inline",
              mt: 2,
              textOverflow: "nowrap",
              fontSize: { md: "40px", xs: "24px" },
              lineHeight: 2,
              textAlign: {md:"right", xs:'center'},
            }}
          >
            {t("Global.Section3.mainText")}{" "}
            <span style={{ fontSize: 60, color: "#ffd101" }}>!</span>
            <span>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{
                  display: "inline",
                  mx: 0.5,
                  objectFit: "contain",
                  height: 50,
                  width: 50,
                }}
                image={"/assets/images/section3/emoji.svg"}
              />
            </span>
          </Typography>
          <br />
      
              <Typography
                fontWeight="400"
                variant="h4"
                color="primary.dark"
                sx={{
                  unicodeBidi: "embed",
                  direction: currentLang === 'ar'? "rtl":"ltr" ,
                  mt: 2,
                  textAlign: {md:"right", xs:'center'},
                  textOverflow: "wrap",
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 2,
                  
                }}
              >
                {t("Global.Section3.subText")}
                <br />
                {t("Global.Section3.subText1")}
              </Typography>
           
        </Grid>
      </Grid>
    </Box>
  );
}

export default Section3;
/*   */
