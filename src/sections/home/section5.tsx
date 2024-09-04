/* eslint-disable @next/next/no-img-element */
"use client";

import {
    Accordion,
  AccordionDetails,
  AccordionSummary,
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

import Grid from "@mui/material/Unstable_Grid2";
import Iconify from "@/components/iconify";

function Section5(): React.JSX.Element {
  const t = useTranslations();

  return (
    <Box sx={{ minHeight: 400, bgcolor: "#e6dbec" }}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="/assets/images/section5/topClouds.svg"
          sx={{
            width: "100%",
            top: 0,
            transform: { xs: "translate(0%, -50%)", md: "translate(0%, -50%)" },
            position: "absolute",
          }}
        />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
        
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid xs={12} display="flex" sx={{ justifyContent: "center" }}>
          <Typography
            fontWeight="600"
            component="div"
            variant="body1"
            sx={{ fontSize: { md: "40px", xs: "24px" }, mt: 14 }}
            color="primary.dark"
          >
            {t("Global.Section5.title")}
          </Typography>
        </Grid>
        <Grid xs={12} display="flex" sx={{ justifyContent: "center" }}>
          <Container>
            <Box
              sx={{
                textAlign: "center",
                gap: 4,
                my: 6,
                flexDirection: "column" ,
                display: "flex",
              }}
            >
              <Accordion   sx={{p:{md:2,xs:1},textAlign:"right", '&.MuiAccordion-root':{borderRadius:2},direction:'rtl'}}>
                <AccordionSummary
               
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                    {t("Global.Section5.question1")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.Section5.answer1")}
                   
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1},textAlign:"right",  '&.MuiAccordion-root':{borderRadius:2},direction:'rtl'}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                    {t("Global.Section5.question2")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.Section5.answer2")}
                   
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1}, textAlign:"right", '&.MuiAccordion-root':{borderRadius:2},direction:'rtl'}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                    {t("Global.Section5.question3")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.Section5.answer3")}
                <br />
                <br />

                  {t("Global.Section5.answer3-2")} <strong style={{color:'#eab3d4'}}>  {t("Global.Section5.answer3-3")}</strong>.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{ p:{md:2,xs:1},textAlign:"right", '&.MuiAccordion-root':{borderRadius:2},direction:'rtl'}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                    {t("Global.Section5.question4")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.Section5.answer4")}
             
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1}, textAlign:"right", '&.MuiAccordion-root':{borderRadius:2},direction:'rtl'}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                    {t("Global.Section5.question5")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.Section5.answer5")}
             
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Section5;