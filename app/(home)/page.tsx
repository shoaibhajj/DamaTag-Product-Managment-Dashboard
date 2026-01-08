"use client";

import { useState } from "react";
import { Button, Box } from "@mui/material";
import { ProductGrid } from "@/features/products/components/ProductGrid";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { useProductFilters } from "@/features/products/hooks/useProductFilters";
import { applyProductFilters } from "@/features/products/utils/applyProductFilters";

const PAGE_SIZE = 8;

export default function HomePage() {
  const { data = [], isLoading, isError } = useGetProductsQuery();
  const { filters } = useProductFilters();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredProducts = applyProductFilters(data, filters);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      <ProductGrid
        products={visibleProducts}
        isLoading={isLoading}
        isError={isError}
      />

      {visibleCount < filteredProducts.length && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="outlined"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
          >
            Load More
          </Button>
        </Box>
      )}
    </>
  );
}
