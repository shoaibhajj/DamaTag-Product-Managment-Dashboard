import { RootState } from "../index";

export const selectWishlistIds = (state: RootState) => state.wishlist;


export const selectIsWishlisted =
  (productId: number) =>
  (state: RootState): boolean =>
    state.wishlist.includes(productId);
