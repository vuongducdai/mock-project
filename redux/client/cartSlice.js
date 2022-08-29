import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.count += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
