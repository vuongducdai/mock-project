import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
      deleteUser,
      getUsers,
      patchUser,
      postLogin,
      postRegister,
} from "../../api/requestMethod";

const initialState = {
      users: [],
      user: null,
      loading: false,
};
export const loginUser = createAsyncThunk("admin/loginUser", async (form) => {
      const res = await postLogin(form);
      return res.data;
});

export const createUser = createAsyncThunk("admin/createUser", async (form) => {
      const res = await postRegister(form);
      return res.data;
});

export const getUsersList = createAsyncThunk("admin/getUserList", async () => {
      const res = await getUsers();
      return res.data;
});

export const updateUser = createAsyncThunk("admin/updateuser", async (data) => {
      const res = await patchUser(data);
      return res.data;
});
export const deleteOneUser = createAsyncThunk(
      "admin/deleteOneUser",
      async (id) => {
            const res = await deleteUser(id);
            return res.data;
      }
);
export const googleLogin = createAsyncThunk(
      "auth/googleLogin",
      async (user) => {
            // localStorage.setItem('user',JSON.stringify(user))
            return user;
      }
);

const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
            logout(state) {
                  state.user = null;
            },
            updateUserFromLogin(state, action) {
                  state.user = action.payload;
            },
      },
      extraReducers: (builder) => {
            // GET USER LIST
            builder.addCase(getUsersList.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(getUsersList.fulfilled, (state, action) => {
                  state.users = action.payload;
                  state.loading = false;
            });

            // LOGIN USER
            builder.addCase(loginUser.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(loginUser.fulfilled, (state, action) => {
                  state.user = action.payload;
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
                  state.users = state.users.map((user) =>
                        user._id === action.payload._id ? action.payload : user
                  );
                  state.loading = false;
            });

            // DELETE USER
            builder.addCase(deleteOneUser.pending, (state, action) => {
                  state.loading = true;
            });
            builder.addCase(deleteOneUser.fulfilled, (state, action) => {
                  state.users = state.users.filter((user) => user._id !== action.payload);
                  state.loading = false;
            });
            // GOOGLE LOGIN
            builder.addCase(googleLogin.fulfilled, (state, action) => {
                  state.user = action.payload;
            });
      },
});
export const getUser = state => state.userSlice.user;
export const { logout, updateUserFromLogin } = userSlice.actions;
export default userSlice.reducer;
