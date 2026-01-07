export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ProductFilters = {
  search: string;
  category: string | null;
  minPrice: number;
  maxPrice: number;
  rating: number;
  sort?: string;
};
