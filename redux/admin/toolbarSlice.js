import { createSlice } from "@reduxjs/toolkit";

const toolbarSlice = createSlice({
      name: "toolbar",
      initialState: {
            isOpen: false,
            isEdit: false,
            formData: {},
      },
      reducers: {
            openToolbar: (state, action) => {
                  state.isOpen = true;
            },
            closeToolbar: (state, action) => {
                  state.isOpen = false;
            },
            setEdit: (state, action) => {
                  state.isEdit = true;
            },
            setAdd: (state, action) => {
                  state.isEdit = false;
            },
            setFormData: (state, action) => {
                  state.formData = action.payload
            },
            clearFormData: (state, action) => {
                  state.formData = { isAdmin: false, size: '', color: '', cat: '' };
            }
      },
});

export const { openToolbar, closeToolbar, setEdit, setAdd, setFormData, clearFormData } = toolbarSlice.actions;
export default toolbarSlice.reducer;
