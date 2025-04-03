import React, { useEffect } from "react";
import authService from "../../appwrite/auth";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import conf from "../../conf/conf";
import { adminlogin } from "../../store/adminSlice";
import { useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
function LoginSuccess() {
  return (
    <div className=" mt-56 -ml-7 w-full ">
      <h1 className=" text-center text-white text-2xl font-poppins">Login successful!!</h1>
    </div>
  );
}

export default LoginSuccess;
