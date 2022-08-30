import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getProducts, patchProduct, postProduct } from "../../api/requestMethod";

export const getProductList = createAsyncThunk(
      "admin/getProductList",
      async () => {
            const res = await getProducts();
            return res.data;
      }
);

export const createProduct = createAsyncThunk(
      "admin/createProduct",
      async (form) => {
            const res = await postProduct(form);
            return res.data;
      }
);

export const updateProduct = createAsyncThunk(
      "admin/updateProduct",
      async (data) => {
            const res = await patchProduct(data);
            return res.data;
      }
);

export const deleteOneProduct = createAsyncThunk(
      "admin/deleteProduct",
      async (id) => {
            const res = await deleteProduct(id);
            return res.data;
      }
);

const initialState = {
      products: [],
      loading: false,
};

const productSlice = createSlice({
      name: "product",
      initialState,
      extraReducers: (builder) => {
            // GET PRODUCT LIST
            builder.addCase(getProductList.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(getProductList.fulfilled, (state, action) => {
                  state.products = action.payload;
                  state.loading = false
            });

            // CREATE PRODUCT
            builder.addCase(createProduct.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(createProduct.fulfilled, (state, action) => {
                  state.products.unshift(action.payload);
                  state.loading = false
            });

            // UPDATE PRODUCT
            builder.addCase(updateProduct.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(updateProduct.fulfilled, (state, action) => {
                  state.products = state.products.map(product => product._id === action.payload._id ? action.payload : product);
                  state.loading = false;
            });


            // DELETE PRODUCT
            builder.addCase(deleteOneProduct.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(deleteOneProduct.fulfilled, (state, action) => {
                  state.products = state.products.filter(product => product._id !== action.payload);
                  state.loading = false;
            });
      },
});

export default productSlice.reducer;
