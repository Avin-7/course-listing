import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
