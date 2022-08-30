import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUser, getUsers, patchUser, postUser } from "../../api/requestMethod";

export const getUsersList = createAsyncThunk(
      "admin/getUserList", async () => {
            const res = await getUsers();
            return res.data;
      });

export const createUser = createAsyncThunk(
      "admin/createUser", async (form) => {
            const res = await postUser(form);
            return res.data;
      });

export const updateUser = createAsyncThunk(
      "admin/updateuser", async (data) => {
            const res = await patchUser(data);
            return res.data;
      });
export const deleteOneUser = createAsyncThunk(
      "admin/deleteOneUser", async (id) => {
            const res = await deleteUser(id);
            return res.data;
      });

const initialState = {
      users: [],
      user: {},
      loading: false,
};

const userSlice = createSlice({
      name: "user",
      initialState,
      extraReducers: (builder) => {
            // GET USER LIST
            builder.addCase(getUsersList.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(getUsersList.fulfilled, (state, action) => {
                  state.users = action.payload;
                  state.loading = false;
            });

            // CREATE USER
            builder.addCase(createUser.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(createUser.fulfilled, (state, action) => {
                  state.users.unshift(action.payload);
                  state.loading = false;
            });

            // UPDATE USER
            builder.addCase(updateUser.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(updateUser.fulfilled, (state, action) => {
                  state.users = state.users.map(user => user._id === action.payload._id ? action.payload : user)
                  state.loading = false;
            });

            // DELETE USER
            builder.addCase(deleteOneUser.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(deleteOneUser.fulfilled, (state, action) => {
                  state.users = state.users.filter(user => user._id !== action.payload);
                  state.loading = false;
            });
      },
});

export default userSlice.reducer;
