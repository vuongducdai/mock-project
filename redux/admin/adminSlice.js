import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMethod } from '../../api/getMethod'

const initialState = {
  products: [],
  users: [],
  product: {},
  loading: false,
  count: 0,
};

export const getAdminData = createAsyncThunk(
  'admin/getdata',
  async () => {
    const res = await getMethod.getData();
    return res.data
  }
)

const adminSlice = createSlice({
  name: "product",
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
  extraReducers: {
    [getAdminData.fulfilled]: (state, action) => (
      { ...state, products: action.payload }
    )
  }
});

export const { increment, decrement } = adminSlice.actions;
export default adminSlice.reducer;
