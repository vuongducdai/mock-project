import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsReUse: [],
    count: 0,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        listProductData: (state, action) => {
            state.products = action.payload;
        },
        listProductReUse: (state, action) => {
            state.productsReUse = action.payload;
        }
    },
});

export const { listProductData, listProductReUse } = productSlice.actions;
export default productSlice.reducer;
