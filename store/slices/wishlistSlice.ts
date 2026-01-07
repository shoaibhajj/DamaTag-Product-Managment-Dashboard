import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [] as number[],
  reducers: {
    toggleWishlist(state, action: PayloadAction<number>) {
      const index = state.indexOf(action.payload);
      if (index >= 0) state.splice(index, 1);
      else state.push(action.payload);
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
