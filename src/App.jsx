import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet, useNavigate } from "react-router-dom";
import authService from "./appwrite/auth";
import service from "./appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import conf from "./conf/conf";
import { login, logout, storeWishlist } from "./store/authSlice";
import { adminlogin } from "./store/adminSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.userData);
  const wishlistData = useSelector((state) => state.auth.wishlistData);
  const userId = useSelector((state) => state.auth.userId);
  const wishlistId = useSelector((state) => state.auth.wishlistId);

  const adminStatus = useSelector((state) => state.adminauth.status);

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
        const userId = userData.$id;
        service.getWishlists(userId).then((res) => {
          if (res) {
            // console.log(res);
            const wishlist = res.documents[0].wishlist;
            const wishlistId = res.documents[0].$id;
            dispatch(storeWishlist({ userId, wishlist, wishlistId }));
          }
        });
      } else {
        dispatch(logout());
      }
      if (userData.email == conf.adminEmailId.toLowerCase()) {
        dispatch(adminlogin(true));
      }
    });
  }, []);

  // useEffect(() => {
  //   service.updateWishlist(wishlistId, userId, wishlistData);
  // }, [wishlistData]);

  const loading = () => {
    navigate("/loading");
    setTimeout(function () {
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    loading();
  }, [user]);

  return (
    <>
      {console.log(adminStatus)}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
