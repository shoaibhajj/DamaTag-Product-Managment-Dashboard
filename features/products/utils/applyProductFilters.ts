import { Product, ProductFilters } from "../types";

export function applyProductFilters(
  products: Product[],
  filters: ProductFilters
) {
  return products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory =
      !filters.category || product.category === filters.category;

    const matchesPrice =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;

    const matchesRating = product.rating.rate >= filters.rating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
}
