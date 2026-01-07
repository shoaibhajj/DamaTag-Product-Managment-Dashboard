"use client";

import { ProductGrid } from "@/features/products/components/ProductGrid";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { useProductFilters } from "@/features/products/hooks/useProductFilters";
import { applyProductFilters } from "@/features/products/utils/applyProductFilters";

export default function HomePage() {
  const { data = [], isLoading, isError } = useGetProductsQuery();
  const { filters } = useProductFilters();

  const filteredProducts = applyProductFilters(data, filters);

  return (
    <ProductGrid
      products={filteredProducts}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
