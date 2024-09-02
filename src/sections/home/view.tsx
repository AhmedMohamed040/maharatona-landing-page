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

import Slider from "../../components/shared/slider/index";
import Grid from "@mui/material/Unstable_Grid2";
import CategoryCard from "./card/card";

function HomeView(): React.JSX.Element {
  const slides = Array.from({ length: 5 })?.map((_, index) => (
    <Box sx={{ display: "flex", justifyContent: "center" }} key={index}>
      <Box sx={{ maxWidth: 750 }}>
        <img
          src="/assets/images/categories/silde1.png"
          alt="slide"
          loading="lazy"
        />
      </Box>
    </Box>
  ));
  const CATEGORIES = [
    { image: "/assets/images/home/new.png", title: "new" },
    { image: "/assets/images/home/bread.png", title: "bread" },
    { image: "/assets/images/home/candy.png", title: "candy" },
    { image: "/assets/images/home/cleaners.png", title: "powders" },
    { image: "/assets/images/home/drinks.png", title: "drinks" },
    { image: "/assets/images/home/food.png", title: "food" },
    { image: "/assets/images/home/fruits.png", title: "fruits" },
    { image: "/assets/images/home/meat.png", title: "meat" },
    { image: "/assets/images/home/milk.png", title: "milk" },
    { image: "/assets/images/home/oils.png", title: "oils" },
    { image: "/assets/images/home/products.png", title: "products" },
    { image: "/assets/images/home/snacks.png", title: "snacks" },
  ];
  return (
    <Box>
      <Box sx={{ pb: 7, my: 10, bgcolor: "#f4f8fc" }}>
        <Container sx={{ pt: 5 }}>
          <Slider slides={slides} />
        </Container>
      </Box>
      <Container sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(5, 1fr)",
              sm: "repeat(3, 1fr)",
              xs: "repeat(2, 1fr)",
            },
            gap: 2,
          }}
        >
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HomeView;
