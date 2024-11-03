import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const adminSlice = createSlice({
  name: "adminauth",
  initialState,
  reducers: {
    adminlogin: (state) => {
      state.status = true;
    },
  },
});

export const { adminlogin } = adminSlice.actions;

export default adminSlice.reducer;
