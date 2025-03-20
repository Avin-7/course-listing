import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice";
import courseSlice from "./courseSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    adminauth: adminSlice,
    courseData: courseSlice,
  },
});

export default store;
