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
      <div className="text-black flex justify-center items-center w-full bg-gradient-to-br from-purple-700  via-fuschia-500 to-rose-400">
        <div className=" w-2/4 text-left flex justify-center ">
          <div className="py-52 text-white ">
            <h1 className=" text-7xl font-figtree font-extralight tracking-wide text-balance px-20 break-words mb-3">
              Login
            </h1>
            <h3 className=" text-7xl font-figtree tracking-wide font-extralight  text-balance px-20 mb-3">
              to your
            </h3>
            <h2 className="text-7xl font-figtree tracking-wide font-extralight  text-balance px-20 mb-1">
              account.
            </h2>
          </div>
        </div>
        <div className="w-2/4 flex justify-center">
          <form>
            <div className="flex bg-white rounded-xl px-6">
              <div className="pl-10 mr-5 " id="">
                <div className=" text-4xl -ml-4 mt-6 mb-12 w-full">
                  <h1 className=" text-3xl text-black p-5 font-semibold ml-14 font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">
                    DotLib
                  </h1>
                </div>
                <div className="mt-4 mb-10">
                  <label htmlFor="email" className=" font-normal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={email}
                    id="he"
                    className="bg-transparent border-b-[2px] border-b-neutral-800 py-2 outline-none w-[90%] focus:border-b-blue-700"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 mb-10">
                  <label htmlFor="password" className=" font-normal mb-6">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    className="bg-transparent border-b-[2px] border-b-neutral-800 py-2 outline-none w-[90%] focus:border-b-blue-700"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessage != "" && (
                  <div className=" mb-2">
                    <h3 className=" text-red-500 font-figtree text-lg">
                      {errorMessage}
                    </h3>
                  </div>
                )}

                <div className="w-[90%] flex">
                  <a href="#" className=" no-underline text-blue-900 ">
                    Forgot password
                  </a>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    className=" w-[90%] my-5 bg-[#2121ad] text-white py-3 px-2 rounded-xl hover:bg-[#2121adee] transition ease-linear"
                    onClick={(e) => login(e)}
                  >
                    Login
                  </button>
                </div>
                <div className="option">OR</div>
                <button className="w-[90%] flex justify-center items-center gap-2 my-10 py-3 px-2 border-b-2 border-blue-700 rounded-xl bg-gray-200 hover:border-blue-900 hover:bg-neutral-100 transition-all ease-linear">
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
