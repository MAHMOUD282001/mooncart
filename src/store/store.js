import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import favouriteSlice from "./slice/favouriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favourite: favouriteSlice.reducer,
  },
});
