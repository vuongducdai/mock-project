import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartList = createAsyncThunk(
      "admin/getCartList", async () => {
            const res = await getCarts();
            return res.data;
      });

export const deleteOneCart = createAsyncThunk(
      "admin/deleteOneCart", async (id) => {
            const res = await deleteOneCart(id);
            return res.data;
      });

const initialState = {
      carts: [],
      loading: false,
};

const adminCartSlice = createSlice({
      name: "user",
      initialState,
      extraReducers: (builder) => {
            // GET USER LIST
            builder.addCase(getCartList.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(getCartList.fulfilled, (state, action) => {
                  state.carts = action.payload;
                  state.loading = false;
            });

            // DELETE USER
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
