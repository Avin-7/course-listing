import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  userId: null,
  wishlistId: null,
  wishlistData: [""],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    storeWishlist: (state, action) => {
      state.wishlistId = action.payload.wishlistId;
      state.userId = action.payload.userId;
      state.wishlistData = action.payload.wishlist;
    },
    addToWishlist: (state, action) => {
      if (!state.wishlistData.includes(action.payload)) {
        state.wishlistData = [action.payload, ...state.wishlistData];
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistData = state.wishlistData.filter(
        (id) => id != action.payload
      );
    },
  },
});

export const {
  login,
  logout,
  storeWishlist,
  addToWishlist,
  removeFromWishlist,
} = authSlice.actions;

export default authSlice.reducer;
