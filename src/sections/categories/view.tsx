"use client";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Tab, Tabs, Typography } from '@mui/material';
import  { useState } from 'react';
import TabPanel from '@/components/tabs/panel';
import Slider from "../../components/shared/slider"
import CategoryDialog from '@/components/dialog/view-dialog';
import Grid from '@mui/material/Unstable_Grid2';
import Iconify from '@/components/iconify';
function View(): React.JSX.Element {
  const [value, setValue] = useState(0);
  const [layoutValue, setLayoutValue] = useState('grid');
  const [subValue, setSubValue] = useState(0);
  const [item, setItem] = useState();
  const [open , setOpen] = useState(false);
  
  const handleClose = ()=> {
    setOpen(false);
  };
  const handleOpen = (item:any)=> {
    setOpen(true);
    setItem(item)
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSubTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setSubValue(newValue);
  };
  const handleLayoutTabsChange = (event: React.SyntheticEvent, newValue: string) => {
    setLayoutValue(newValue);
  };
  const slides = Array.from({ length: 5 })?.map((_, index) => (
    <Box
      sx={{ display: 'flex', justifyContent: "center" }}
      key={index}
    >
      <Box sx={{ maxWidth: 750 }}>

        <img src="/assets/images/categories/silde1.png" alt="slide" loading="lazy" />
      </Box>
    </Box>
  ));
  const tabsItems1: { label: string, value: number }[] = [
    {
      label: 'Pizza',
      value: 0,
    },
    {
      label: 'Sandwich',
      value: 1,
    },
    {
      label: 'Soap',
      value: 2,
    },
    {
      label: 'Burger',
      value: 3,
    },
    {
      label: 'Plate',
      value: 4,
    },
    {
      label: 'Main dish',
      value: 5,
    },
    {
      label: 'Juice',
      value: 6,
    },
    {
      label: 'Category',
      value: 7,
    },
    {
      label: 'Category',
      value: 8,
    },
    {
      label: 'Category',
      value: 9,
    },
    {
      label: 'Category',
      value: 10,
    },
  ];
  const tabsItems2: { label: string, value: number }[] = [
    {
      label: 'Sub-Category',
      value: 0,
    },
    {
      label: 'Sub-Category',
      value: 1,
    },
    {
      label: 'Sub-Category',
      value: 2,
    },
    {
      label: 'Sub-Category',
      value: 3,
    },
    {
      label: 'Sub-Category',
      value: 4,
    },
    {
      label: 'Sub-Category',
      value: 5,
    },
    {
      label: 'Sub-Category',
      value: 6,
    },
    {
      label: 'Sub-Category',
      value: 7,
    },

  ]
  return (
    <Box >
      <Box sx={{ pb: 7, my: 10, bgcolor: '#f4f8fc' }}>

        <Container sx={{ pt: 5 }}>
          <Slider slides={slides} />
        </Container >
      </Box>
        <Container sx={{ pt: 5 }}>
      <Box>
     
          <Tabs
            sx={{ '&.MuiTabs-root span': { display: 'none' } }}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {
              tabsItems1.map((slide, index: number) => (
                <Tab sx={{ '&.Mui-selected': { bgcolor: '#1b76ba', color: '#fff' }, mx: 1, borderRadius: 2, border: 1, borderColor: '#1b76ba' }} key={index} label={slide.label} value={slide.value} />
              ))
            }
          </Tabs>
        
          <TabPanel value={value} index={0}  >
            <Tabs
              value={subValue}
              onChange={handleSubTabsChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {
                tabsItems2.map((slide, index: number) => (
                  <Tab key={index} label={slide.label} value={slide.value} />
                ))
              }
            </Tabs>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Typography>
              134 Product
            </Typography>
            <Box>
              <Tabs sx={{ borderRadius: 3, bgcolor: '#ccc', '&.MuiTabs-root span': { display: 'none' } }}
                value={layoutValue} onChange={handleLayoutTabsChange} aria-label="icon tabs">
                <Tab value="list" icon={<Iconify icon="tabler:layout-list-filled" />} aria-label="list" />
                <Tab value="grid" icon={<Iconify icon="eva:grid-fill" />} aria-label="grid" />
              </Tabs>
            </Box>
          </Box>
            <TabPanel value={subValue} index={0} >
              <Grid container spacing={4} justifyContent="center">
                {
                  Array.from({ length: 12 }).map((item, index) => (
                    <Grid key={index} xs={12} sm={6} md={4} lg={3}>
                      <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 4 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="250"

                          image={`/assets/images/categories/Bitmap${Math.floor(Math.random() * 8) + 1}.png`}
                        />
                        <CardContent sx={{ p: 0, px: 2, pt: 1 }}>
                          <Typography fontWeight="medium" gutterBottom variant="h6" >
                            Item name
                          </Typography>
                        </CardContent>
                        <CardActions sx={{ px: 2, mb: 1 }}>
                          <Button size="small" onClick={()=>handleOpen(item)}>26.00 SAR</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </TabPanel>
          </TabPanel>
          <TabPanel value={value} index={1} >
            item
          </TabPanel>
          <TabPanel value={value} index={2} >
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} >
            Item four
          </TabPanel>
          <TabPanel value={value} index={4} >
            Item five
          </TabPanel>
          <TabPanel value={value} index={5} >
            Item six
          </TabPanel>
          <TabPanel value={value} index={6} >
            Item seaven
          </TabPanel>
      
      </Box>
        </Container>
        <CategoryDialog item={item} onClose={handleClose} open={open} />
    </Box>
  )
}

export default View;
