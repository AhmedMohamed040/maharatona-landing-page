"use client";

import { useCallback, useMemo } from "react";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Card, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onClose: VoidFunction;
  item?: any;
};
export default function CategoryDialog({ item, open, onClose }: Props) {
  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {borderRadius:3, maxWidth: 720 },
      }}
    >
      <DialogTitle sx={{pb:0,  m:0,display:'flex', justifyContent:"end"}}>
      

                <IconButton onClick={onClose}>
                  <Iconify width="60" height="60" icon="mi:close"/>
                </IconButton>
              
      </DialogTitle>
      <DialogContent>
     
          <Box
           
          >
            <Card  sx={{ boxShadow: 0 }}>
              <CardHeader sx={{pt:0,textAlign:'center'}} title="Item details" />
              <Box>
              </Box>
             

              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                sx={{mx:"auto", maxWidth: 200, borderRadius: 2 }}
                image={`/assets/images/categories/Bitmap1.png`}
              />
             
              <CardContent sx={{mt:2}}>
                <Typography gutterBottom fontWeight="bold" variant="h5" component="div">
                  Abu Zahra sunflower oil 1.5 liters
                </Typography>
                <Typography color="primary" fontWeight="bold" gutterBottom variant="h5" component="div">
                  26.00 SAR
                </Typography>
                <Typography  gutterBottom fontWeight="bold" variant="body1" component="div">
                Description
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Abu Zahra Sunflower Oil 1.5 liters is the ideal choice for preparing
                  your daily meals in a healthy and delicious way. It is extracted
                  from fresh sunflower seeds and has a natural, mild flavor that
                  enhances the taste of foods. It also contains a high percentage of
                  vitamin E, which helps maintain healthy skin and hair. It comes in a
                  1.5 liter bottle to last you a long time. Get Abu Zahra sunflower
                  oil and enjoy healthy and delicious meals.
                </Typography>
              </CardContent>

            </Card>

          </Box>
      </DialogContent>

     
    </Dialog>
  );
}
