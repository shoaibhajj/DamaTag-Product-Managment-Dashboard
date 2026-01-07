"use client";

import { useParams } from "next/navigation";
import { Alert, CircularProgress, Box } from "@mui/material";
import { useGetProductByIdQuery } from "@/store/api/productsApi";
import ProductDetails from "@/features/products/components/ProductDetails";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const { data, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return <Alert severity="error">Failed to load product</Alert>;
  }

  return <ProductDetails product={data} />;
}
