"use client";

import { useState } from "react";
import CartDrawer from "@/features/cart/components/CartDrawer";
import Navbar from "@/features/layout/components/Navbar";


export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      {children}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
