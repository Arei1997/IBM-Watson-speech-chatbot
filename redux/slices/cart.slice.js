import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearCart: () => {
      return initialState;
    },
    addItem: (state, action) => {
      let { products } = state;
      if (products.findIndex((x) => (x.id === action.payload.id)) > -1) {
        const itemIndex = products.findIndex((x) => x.id === action.payload.id);
        products[itemIndex].qt = products[itemIndex].qt + action.payload.qt;
      } else {
        products.push(action.payload);
      }
      state.products = products;
    },
    removeItem: (state, action) => {
      let { products } = state;
      if (products.findIndex((x) => (x.id === action.payload.id)) > -1) {
        products = products.filter((x) => x.id !== action.payload.id);
      }

      state.products = products;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
