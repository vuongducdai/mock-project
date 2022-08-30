import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteCart, getCarts } from "../../api/requestMethod";

export const getCartList = createAsyncThunk(
      "admin/getCartList", async () => {
            const res = await getCarts();
            return res.data;
      });

export const deleteOneCart = createAsyncThunk(
      "admin/deleteOneCart", async (id) => {
            const res = await deleteCart(id);
            return res.data;
      });

const initialState = {
      carts: [],
      loading: false,
};

const adminCartSlice = createSlice({
      name: "cart",
      initialState,
      extraReducers: (builder) => {
            // GET CART LIST
            builder.addCase(getCartList.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(getCartList.fulfilled, (state, action) => {
                  state.carts = action.payload;
                  state.loading = false;
            });

            // DELETE CART
            builder.addCase(deleteOneCart.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(deleteOneCart.fulfilled, (state, action) => {
                  state.carts = state.carts.filter(cart => cart._id !== action.payload);
                  state.loading = false;
            });
      },
});

export default adminCartSlice.reducer;
