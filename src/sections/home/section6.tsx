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
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
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
    <Box sx={{my:4, height:600}}>

    <Box id="Contact_Us" sx={{minHeight:200, pt:7 , mt:'auto' ,height:'100%'}}>
   <Box sx={{  perspective:{xs:'0',md:'604px'},
   perspectiveOrigin: {md:'30% 50%',xs:'0% 0%'},
   position:'relative',
    top:'45%',
    bgcolor: "#fff",display:'flex', alignItems:"end"}}>
      
        <Box sx={{mx:'auto', transform:{xs:` skewX(0deg) rotateX(0deg)`,md:` skewX(165deg) rotateX(15deg)`},bgcolor:"#3cb8bb", width:'100%',maxWidth:'811px', height:{xs:300,md:'320px'},borderRadius:6,}}>
     
        </Box>
        <Box
          component="img"
          src="/assets/images/section6/line1.png"
          sx={{
            width: 500,
            height: 300,
            right:0,
            transform:'translate(-60%, -10%)',
            position: "absolute",
          }}
        />
      
        <Card raised sx={{borderRadius:4, width:'100%', maxWidth:'350px', position:'absolute',transform:{md:'translateX(50%)',xs:'translateX(0%)'}, bottom:60}}>
          <form style={{direction:currentLang==="ar"? "rtl":"ltr"}}>

          <CardContent >
            <Stack sx={{my:2}}>

          <TextField 
                    placeholder={`${t('Global.Section6.name')}`}

          />
            </Stack>
            <Stack  sx={{my:2}}>

          <TextField 
                   placeholder={`${t('Global.Section6.email')}`}

          />
            </Stack>
            <Stack  sx={{mt:2}}>

           <TextField 
          placeholder={`${t('Global.Section6.message')}`}
          rows={4}
          multiline
          />
            </Stack>
          </CardContent>
          <CardActions sx={{p:2,pt:0,  display:'flex',flexDirection:'column', alignItems:'end'}}>
          
          <FormControlLabel sx={{pb:1}} labelPlacement="start" label={`${t('Global.Section6.terms')}`} control={<Checkbox />} />
          <br />
          <Button variant="contained" sx={{alignSelf:'flex-start',boxShadow:3, borderRadius:2,bgcolor:'#3cb8bb'}}>{`${t('Global.Section6.send')}`}</Button>

          </CardActions>
          </form>
        </Card>
   </Box>
    </Box>
    </Box>
  );
}

export default Section6;
/* matrix3d matrix3d */