"use client";

import { useState } from "react";
import { Button, Box } from "@mui/material";
import { ProductGrid } from "@/features/products/components/ProductGrid";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { useProductFilters } from "@/features/products/hooks/useProductFilters";
import { applyProductFilters } from "@/features/products/utils/applyProductFilters";



export default function HomePage() {
  const [pageSize, setPageSize] = useState(8);
  const { data = [], isLoading, isError } = useGetProductsQuery(pageSize);
  const { filters } = useProductFilters();

  const filteredProducts = applyProductFilters(data, filters);
 

  return (
    <>
      <ProductGrid
        products={filteredProducts}
        isLoading={isLoading}
        isError={isError}
      />

      {filteredProducts.length && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="outlined"
            onClick={() => setPageSize((v) => v + 8)}
          >
            Load More
          </Button>
        </Box>
      )}
    </>
  );
}
