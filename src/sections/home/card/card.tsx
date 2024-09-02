import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  title: string;
  image: string;
};
const CategoryCard = ({ title, image }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100px",
        py: 1,
        border: "1px solid #4FACF1",
        borderRadius: "8px",
        backgroundColor: "#DFF1FF",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#DFF1F5",
        },
      }}
    >
      <Link
        href={`/categories?category=${title}`}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography variant="body1" color="initial">
          {title}
        </Typography>
        <Image src={image} alt={title} width={1000} height={150} />
      </Link>
    </Box>
  );
};

export default CategoryCard;
