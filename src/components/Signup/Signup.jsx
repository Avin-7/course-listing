import React, { useState } from "react";
import Google from "../../assets/Google.png";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login as authLogin, storeWishlist } from "../../store/authSlice";
import { adminlogin } from "../../store/adminSlice";
import conf from "../.././conf/conf";
import validation from "../../validation";
import service from "../../appwrite/config";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async (e) => {
    e.preventDefault();
    try {
      if (name.length > 2) {
        if (validation.email_validation(email)) {
          if (validation.password_validation(password)) {
            const user = await authService.createAccount({
              email,
              password,
              name,
            });
            if (user) {
              dispatch(authLogin(user));
              // console.log(user);
              const userId = user.userId;
              const wishlist = [];
              const res = await service.createWishlist({ userId, wishlist });
              const wishlistId = res.$id;
              dispatch(storeWishlist({ userId, wishlist, wishlistId }));
            }
            if (email == conf.adminEmailId && password == conf.adminPassword) {
              dispatch(
                adminlogin(
                  email == conf.adminEmailId && password == conf.adminPassword
                )
              );
            }

            navigate("/");
          } else {
            setError(
              "Enter valid password:" +
                "minimum 8 characters " +
                "2 lowercase characters," +
                " 1 number, 1 special character, 1 uppercase"
            );
          }
        } else {
          setError("Enter valid email");
        }
      } else {
        setError("Enter valid name");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="text-black flex justify-center items-center w-full bg-gradient-to-br from-fuchsia-600  via-purple-600 to-indigo-500">
        <div className=" w-2/4 text-left flex justify-center ">
          <div className="py-52 text-white ">
            <h1 className=" text-7xl font-figtree font-extralight tracking-wide text-balance px-20 break-words mb-3">
              Create
            </h1>
            <h3 className=" text-7xl font-figtree tracking-wide font-extralight  text-balance px-20 mb-3">
              your new
            </h3>
            <h2 className="text-7xl font-figtree tracking-wide font-extralight  text-balance px-20 mb-1">
              account.
            </h2>
          </div>
        </div>
        <div className="w-2/4 flex justify-center">
          <form>
            <div className=" bg-white py-1 px-5 rounded-xl">
              <div className="pl-10 mr-5">
                <div className=" text-4xl -ml-4 my-6 w-full">
                  <h1 className=" text-3xl text-black p-5 font-semibold ml-14 font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">
                    DotLib
                  </h1>
                </div>
                <div className="mt-4 mb-6">
                  <label htmlFor="email" className=" font-normal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={name}
                    id="he"
                    className="bg-transparent border-b-[2px] border-b-neutral-800 py-2 outline-none w-[90%] focus:border-b-blue-700"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-4 mb-6">
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
                <div className="mt-4 mb-6">
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
                <div className=" w-72 px-4">
                  <h2 className=" text-red-500 my-2 text-pretty break-words font-sans">
                    {error}
                  </h2>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    className=" w-[90%] my-5 bg-[#2121ad] text-white py-3 px-2 rounded-xl hover:bg-[#2121adee] transition ease-linear"
                    onClick={(e) => signup(e)}
                  >
                    Create new account
                  </button>
                </div>
                <div className="option ">OR</div>
                <button className="w-[90%] flex justify-center items-center gap-2 my-10 py-3 px-2 border-b-2 border-blue-700 rounded-xl bg-gray-200 hover:border-blue-900 hover:bg-neutral-100 transition-all ease-linear">
                  <img src={Google} alt="" className="size-5 img" />
                  <span className="span">Signup with Google</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
