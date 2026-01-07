import { Product, ProductFilters } from "../types";

export function applyProductFilters(
  products: Product[],
  filters: ProductFilters
) {

  let filtered = products.filter((product) => {
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


  if (filters.sort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  if (filters.sort === "rating-desc") {
    filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return filtered;
}
