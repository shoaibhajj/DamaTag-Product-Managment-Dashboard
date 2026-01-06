"use client";

import { useGetProductsQuery } from "@/store/api/productsApi";
export default function Home() {
  const { data, isLoading, error } = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Products Count</h1>
      <p>Total products: {data?.length}</p>
    </main>
  );
}
