import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/getMethod";

const initialState = {
  products: [],
  product: {},
  loading: false,

};

export const getProductList = createAsyncThunk(
  "admin/getProducts",
  async () => {
    const res = await getProducts();

    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;
