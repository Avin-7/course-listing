import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./appwrite/auth";
import service from "./appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import conf from "./conf/conf";
import { login, logout, storeWishlist } from "./store/authSlice";
import { adminlogin } from "./store/adminSlice";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/react';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.status);
  const wishlistData = useSelector((state) => state.auth.wishlistData);
  const userData = useSelector((state) => state.auth.userData);
  const userId = useSelector((state) => state.auth.userId);
  const wishlistId = useSelector((state) => state.auth.wishlistId);
  const [user, setUser] = useState("");

  const queryClient = new QueryClient();

  useEffect(() => {
    if (!loginStatus) {
      authService
        .getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
          if (userData.email == conf.adminEmailId.toLowerCase()) {
            dispatch(adminlogin(true));
          }
        })
        .catch((error) => console.log(error));
    }
  }, [loginStatus]);

  const fetchWishlists = async (userId) => {
    try {
      const res = await service.getWishlists(userId);
      if (res) {
        const wishlist = res.documents[0].wishlist;
        const wishlistId = res.documents[0].$id;
        dispatch(storeWishlist({ userId, wishlist, wishlistId }));
      }
    } catch (error) {
      console.log("Error in fetchWishlists :: App.jsx" + error);
    }
  };

  const createWishlists = async (userId) => {
    try {
      const wishlist = [];
      const res = await service.createWishlist({ userId, wishlist });
      if (res) {
        console.log(res);
        const wishlistId = res.$id;
        dispatch(storeWishlist({ userId, wishlist, wishlistId }));
      }
    } catch (error) {
      console.log("Error in createWishlists :: App.jsx" + error);
    }
  };

  useEffect(() => {
    if (loginStatus) {
      const userId = userData?.targets[0]?.userId;
      service
        .checkWishlistExists(userId)
        .then((res) => {
          if (res?.documents.length > 0) {
            fetchWishlists(userId);
          } else {
            createWishlists(userId);
          }
        })
        .catch((err) =>
          console.log("Error :: checkWishlistExists : App.jsx" + err)
        );
    }
  }, [loginStatus]);

  useEffect(() => {
    service.updateWishlist(wishlistId, userId, wishlistData);
  }, [wishlistData]);

  return (
    <>
      <Navbar />{" "}
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Outlet />
        <Analytics />
      </QueryClientProvider>
    </>
  );
}

export default App;
