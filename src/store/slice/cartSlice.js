import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += Number(newItem.price);
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: Number(newItem.price),
          quantity: 1,
          totalPrice: Number(newItem.price),
          name: newItem.title,
          images: newItem.images,
        });
      }
      state.totalQuantity++;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },

    removeProductWithItsCountFromCart(state, action) {
      const id = action.payload;
      state.itemsList = state.itemsList.filter((item) => item.id !== id);

      state.totalQuantity = state.itemsList.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    clearCart(state) {
      state.itemsList = [];
      state.totalQuantity = 0;
    },
  },
});

// Export Actions

export const {
  addToCart,
  removeItemFromCart,
  removeProductWithItsCountFromCart,
  clearCart
} = cartSlice.actions;

export const cartTotalQuantity = (state) => state.cart.totalQuantity;

export const cartItems = (state) => state.cart.itemsList;

export const totalPrice = (state) =>
  state.cart.itemsList.reduce((total, item) => total + item.totalPrice, 0);

export default cartSlice;
