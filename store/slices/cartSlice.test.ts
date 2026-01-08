import { describe, expect, it } from 'vitest';
import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "./cartSlice";

const product = {
  id: 1,
  title: "Test Product",
  price: 10,
  category: "test",
  description: "desc",
  image: "",
  rating: { rate: 4, count: 10 },
};

describe("cartSlice", () => {
  it("should add item to cart", () => {
    const state = cartReducer(undefined, addToCart(product));
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(1);
  });

  it("should increase quantity if item exists", () => {
    const state1 = cartReducer(undefined, addToCart(product));
    const state2 = cartReducer(state1, addToCart(product));
    expect(state2.items[0].quantity).toBe(2);
  });

  it("should update quantity", () => {
    const state1 = cartReducer(undefined, addToCart(product));
    const state2 = cartReducer(state1, updateQuantity({ id: 1, quantity: 5 }));
    expect(state2.items[0].quantity).toBe(5);
  });

  it("should remove item", () => {
    const state1 = cartReducer(undefined, addToCart(product));
    const state2 = cartReducer(state1, removeFromCart(1));
    expect(state2.items.length).toBe(0);
  });

  it("should clear cart", () => {
    const state1 = cartReducer(undefined, addToCart(product));
    const state2 = cartReducer(state1, clearCart());
    expect(state2.items.length).toBe(0);
  });
});
