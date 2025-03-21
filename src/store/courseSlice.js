import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "courseData",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { storeData } = courseSlice.actions;

export default courseSlice.reducer;
