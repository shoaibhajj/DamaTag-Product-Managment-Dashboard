"use client";

import ProductFilters from "@/features/products/components/ProductFilters";
import { ProductGrid } from "@/features/products/components/ProductGrid";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { useProductFilters } from "@/features/products/hooks/useProductFilters";
import { applyProductFilters } from "@/features/products/utils/applyProductFilters";

export default function HomePage() {
  const { data = [], isLoading, isError } = useGetProductsQuery();
  const { filters } = useProductFilters();

  const filteredProducts = applyProductFilters(data, filters);

  const categories = Array.from(
    new Set(data.map((product) => product.category))
  );

  return (
    <main className="p-6">
      <ProductFilters categories={categories} />
      <ProductGrid
        products={filteredProducts}
        isLoading={isLoading}
        isError={isError}
      />
    </main>
  );
}
