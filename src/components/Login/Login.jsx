import React, { useState } from "react";
import Google from "../../assets/Google.png";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin, storeWishlist } from "../../store/authSlice";
import { adminlogin } from "../../store/adminSlice";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../appwrite/auth";
import conf from "../../conf/conf";
import service from "../../appwrite/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage("Invalid email or password");
    }
  };
  return (
    <>
      <div className="text-black flex justify-center items-center w-full py-5  bg-neutral-900 pt-24">
        <div className=" w-[35%] text-left flex justify-center max-md:hidden ">
          <div className=" ml-36">
            <h1 className=" text-7xl max-lg:text-5xl tracking-wide text-balance px-10 py-2 break-words mb-3 text-transparent bg-clip-text bg-gradient-to-br from-purple-800 via-pink-600 to-purple-900  font-poppins font-semibold">
              Login your account.
            </h1>
          </div>
        </div>
        <div className="w-[65%] max-lg:w-11/12 max-[375px]:w-[94%] flex justify-center">
          <form className="w-[50%] max-xl:w-[65%] max-md:w-[90%]">
            <div className="flex rounded-xl px-6 max-sm:px-1 bg-neutral-800 font-poppins">
              <div className="pl-10 max-lg:pl-6 max-sm:pl-6 mr-5 w-full" id="">
                <div className=" -ml-4 mt-6 mb-12 w-full">
                  <h1 className=" text-3xl max-lg:text-2xl text-black p-5 font-semibold text-center max-[375px]:ml-6 font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-pink-600 to-purple-900">
                    DotLib
                  </h1>
                </div>
                <div className="mt-4 mb-10 ">
                  <label
                    htmlFor="email"
                    className="text-white font-normal mb-2 tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={email}
                    id="he"
                    className="bg-transparent border-b-[2px] py-2 outline-none w-full border-b-purple-700 focus:border-b-purple-400 text-white transition-all ease-in"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 mb-10">
                  <label
                    htmlFor="password"
                    className="text-white font-normal mb-6 tracking-wider"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    className="bg-transparent border-b-[2px] py-2 outline-none w-full border-b-purple-700 focus:border-b-purple-400 text-white transition-all ease-in "
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessage != "" && !adminStatus ? (
                  <div className=" mb-2">
                    <h3 className=" text-red-500 font-figtree text-lg">
                      {errorMessage}
                    </h3>
                  </div>
                ) : null}

                <div className="w-full flex">
                  <Link
                    to="/forgot-password"
                    className=" no-underline text-white hover:text-purple-500 transition-all ease-linear tracking-wider"
                  >
                    Forgot password
                  </Link>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    className=" w-full my-5 bg-violet-900 text-white py-3 px-2 rounded-xl hover:bg-violet-800 transition ease-linear tracking-wider"
                    onClick={(e) => login(e)}
                  >
                    Login
                  </button>
                </div>
                <div className="option">OR</div>
                <button className="w-full flex justify-center items-center text-white gap-2 my-10 py-3 px-2 border-2 border-purple-700 rounded-xl bg-neutral-800 transition-all ease-linear">
                  <img src={Google} alt="" className="size-5 img" />
                  <span className="span">Login with Google</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
