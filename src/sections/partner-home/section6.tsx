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
import { useLocale } from "next-intl";

function Section6(): React.JSX.Element {
  const t = useTranslations();
  const currentLang = useLocale();
  return (
    <Box id="FQA" sx={{direction: currentLang==='ar'?'rtl':'ltr', minHeight: 400, bgcolor: "#ebf8f8" }}>
   
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
            id="FQA"
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
              <Accordion   sx={{p:{md:2,xs:1},textAlign:currentLang==='ar'?'right':'left', '&.MuiAccordion-root':{borderRadius:2},}}>
                <AccordionSummary
               
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                    {t("Global.partner.section6.question1")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.partner.section6.answer1")}
                   
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1},textAlign:currentLang==='ar'?'right':'left',  '&.MuiAccordion-root':{borderRadius:2},}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                {t("Global.partner.section6.question2")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.partner.section6.answer2")}
                   
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1}, textAlign:currentLang==='ar'?'right':'left', '&.MuiAccordion-root':{borderRadius:2},}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                {t("Global.partner.section6.question3")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.partner.section6.answer3")}
                <br />
                <br />

                <ul>
                <li>
                  {t("Global.partner.section6.answer3-1")}
                  </li>
                  <li>
                  {t("Global.partner.section6.answer3-2")}
                  </li>
                </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{ p:{md:2,xs:1},textAlign:currentLang==='ar'?'right':'left', '&.MuiAccordion-root':{borderRadius:2},}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                {t("Global.partner.section6.question4")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.partner.section6.answer4")}
             
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1}, textAlign:currentLang==='ar'?'right':'left', '&.MuiAccordion-root':{borderRadius:2},}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                {t("Global.partner.section6.question5")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.partner.section6.answer5")}
             
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion   sx={{p:{md:2,xs:1}, textAlign:currentLang==='ar'?'right':'left', '&.MuiAccordion-root':{borderRadius:2},}}>
                <AccordionSummary
                 
                  expandIcon={<Iconify color="#c434d5" icon="ph:caret-down-bold" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                <Typography  color="#2578bd" sx={{fontWeight:500,fontSize:{md:'22px',xs:'18px'}}}>
                {t("Global.partner.section6.question6")}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography  color="#2578bd" sx={{fontWeight:400,fontSize:{md:'16px',xs:'12px'}}}>
                {t("Global.partner.section6.answer6")}
             
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

export default Section6;
