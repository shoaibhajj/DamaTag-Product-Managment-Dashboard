import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
