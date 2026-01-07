"use client";

import { Box, Typography, Button, Rating, Paper } from "@mui/material";
import Image from "next/image";
import { Product } from "../types";
import { useAppDispatch } from "@/store/hooks";
// import { addToCart } from "@/store/slices/cartSlice";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  const dispatch = useAppDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

  return (
    <Paper sx={{ p: 4, maxWidth: 900, mx: "auto"}}>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={4}
      >
        {/* Image */}
        <Box position="relative" height={300}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Info */}
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            ${product.price}
          </Typography>

          <Rating value={product.rating.rate} precision={0.5} readOnly />

          <Typography variant="body2" color="text.secondary" mt={2}>
            {product.description}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            // onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
