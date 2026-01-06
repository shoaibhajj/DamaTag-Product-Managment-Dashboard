"use client";
import { Grid, Alert, Box } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./ProductSkeleton";
import { useGetProductsQuery } from "@/store/api/productsApi";

export const ProductGrid = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            flex={{
              xs: "100%",
              sm: "calc(50% - 12px)",
              md: "calc(25% - 18px)",
            }}
          >
            <ProductSkeleton />
          </Box>
        ))}
      </Grid>
    );
  }

  if (isError) {
    return <Alert severity="error">Failed to load products</Alert>;
  }

  if (!data?.length) {
    return <Alert severity="info">No products found</Alert>;
  }

  return (
    <Grid container spacing={3}>
      {data.map((product) => (
        <Box
          key={product.id}
          flex={{ xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 18px)" }}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Grid>
  );
};
