import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../api/getMethod";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

export const getUsersList = createAsyncThunk("admin/getUsers", async () => {
  const res = await getUsers();

  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
