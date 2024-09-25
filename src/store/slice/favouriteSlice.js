import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesList: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourites(state, action) {
      const newItem = action.payload;

      const existingItemIndex = state.favouritesList.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        state.favouritesList = state.favouritesList.filter(
          (item) => item.id !== newItem.id
        );
      } else {
        state.favouritesList.push({
          id: newItem.id,
          price: Number(newItem.price),
          totalPrice: Number(newItem.price),
          name: newItem.title,
          images: newItem.images,
        });
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;

      state.favouritesList = state.favouritesList.filter(
        (item) => item.id !== id
      );
    },
  },
});

// Export Actions

export const { addToFavourites, removeFromCart } = favouriteSlice.actions;

export const favouritesItems = (state) => state.favourite.favouritesList;

export default favouriteSlice;
