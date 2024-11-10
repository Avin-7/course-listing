import React, { useState } from "react";
import Google from "../../assets/Google.png";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin, storeWishlist } from "../../store/authSlice";
import { adminlogin } from "../../store/adminSlice";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import conf from "../../conf/conf";
import service from "../../appwrite/config";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const adminStatus = useSelector((state) => state.adminauth.status);
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login({ email, password });
      if (user) {
        dispatch(authLogin(user));
        if (user.providerUid == conf.adminEmailId.toLowerCase()) {
          dispatch(adminlogin(true));
        }
        const userId = user.userId;
        const res = await service.getWishlists(userId);
        if (res) {
          const wishlist = res.documents[0].wishlist;
          const wishlistId = res.documents[0].$id;
          dispatch(storeWishlist({ userId, wishlist, wishlistId }));
        }
      }

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <form className="w-28 form-login " />
        <div className="flex bg-white h-5" id="container">
          <div className="pl-10 mr-5" id="col">
            <div className="h11 ">
              <h1 className=" pl-19 font-semibold p-4 font-pacifico">Login</h1>
            </div>
            <div className="mt-4" id="input_container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                id="he"
                value={email}
                className="bg-transparent outline-none  p-1 input-login"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-6" id="input_container2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                className="bg-transparent  mb-5 p-1 input-login"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src="hidden.png"
                alt=""
                onClick={() => pass()}
                className="pass-icon img-login"
                id="pass-icon"
              />
            </div>
            <div className="hl">
              <a href="">Forgot Password?</a>
            </div>
            <div className="relative">
              <button
                type="submit"
                className="sign_in_btn"
                onClick={(e) => login(e)}
              >
                Sign In
              </button>
            </div>
            <div className=" text-center my-2">OR</div>
            <button className="b2">
              <img src={Google} alt="" className="size-5 img" />
              <span className="span">Sign up with Google</span>
            </button>
            <div className="sign_up">
              <p>
                Dont't have an account <a href="#">Sign-up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
