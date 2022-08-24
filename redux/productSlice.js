import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      products: [],
      product: {},
      loading: false,
      count: 0
}

const productSlice = createSlice({
      name: 'product',
      initialState,
      reducers: {
            // TESTING
            increment: (state, action) => {
                  state.count += 1;
            },
            decrement: (state, action) => {
                  state.count -= 1;
            },
      },
})

export const { increment, decrement } = productSlice.actions
export default productSlice.reducer