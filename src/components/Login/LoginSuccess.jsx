import React from "react";
import { useNavigate } from "react-router-dom";
function LoginSuccess() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 800);
  return (
    <div className=" mt-56 -ml-7 w-full ">
      <h1 className=" text-center text-white text-2xl font-poppins">
        Login successful!!
      </h1>
    </div>
  );
}

export default LoginSuccess;
