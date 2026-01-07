"use client";

import { useQueryStates, parseAsString, parseAsInteger } from "nuqs";
import { useDebouncedCallback } from "use-debounce";
import { ProductFilters } from "../types";

export function useProductFilters() {
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(""),
    category: parseAsString,
    minPrice: parseAsInteger.withDefault(0),
    maxPrice: parseAsInteger.withDefault(1000),
    rating: parseAsInteger.withDefault(0),
    sort: parseAsString.withDefault(""),
  });

  const setFilter = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => {
    setFilters({ [key]: value });
  };

  const setSearchDebounced = useDebouncedCallback((value: string) => {
    setFilter("search", value);
  }, 500);

  return {
    filters,
    setFilter,
    setSearchDebounced,
  };
}
