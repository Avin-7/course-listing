import React, { useState } from "react";
import Google from "../../assets/Google.png";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import { adminlogin } from "../../store/adminSlice";
import conf from "../.././conf/conf";
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
  const signupWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.loginWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-black flex justify-center items-center w-full bg-gradient-to-br bg-gray-900 pt-24 pb-10 min-h-lvh">
        <div className=" w-[35%] max-md:hidden text-left flex justify-center ">
          <div className="py-52 ml-36">
            <h1 className=" text-7xl max-lg:text-5xl tracking-wide text-balance px-10 py-2 break-words mb-3 text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-200 to-gray-500  font-poppins font-semibold">
              Create new account.
            </h1>
          </div>
        </div>
        <div className="w-[65%] max-lg:w-11/12 max-[375px]:w-[94%] flex justify-center">
          <form className=" w-[50%] max-xl:w-[65%] max-md:w-[90%]">
            <div className="w-full bg-[#1a2230dc] py-1 px-5 max-sm:px-1 rounded-xl">
              <div className="pl-8 max-lg:pl-4 max-[375px]:pl-4 mr-5">
                <div className=" text-4xl -ml-4 my-6 ">
                  <h1 className=" text-3xl text-black p-5 font-semibold text-center font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">
                    DotLib
                  </h1>
                </div>
                <div className="mt-4 mb-6 text-white font-poppins">
                  <label
                    htmlFor="email"
                    className=" font-normal mb-2 tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={name}
                    className="bg-transparent border-b-[2px] py-2 outline-none w-[98%]  border-b-purple-700 focus:border-b-purple-400 text-white transition-all ease-in"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-4 mb-6 text-white font-poppins">
                  <label
                    htmlFor="email"
                    className=" font-normal mb-2 tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={email}
                    className="bg-transparent border-b-[2px] py-2 outline-none w-[98%]  border-b-purple-700 focus:border-b-purple-400 text-white transition-all ease-in"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 mb-6 text-white font-poppins">
                  <label
                    htmlFor="password"
                    className=" font-normal mb-6 tracking-wider"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={password}
                    className="bg-transparent border-b-[2px] py-2 outline-none w-[98%]  border-b-purple-700 focus:border-b-purple-400 text-white transition-all ease-in"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className=" w-72 px-4">
                  <h2 className=" text-red-500 my-2 text-pretty break-words font-sans">
                    {error}
                  </h2>
                </div>

                <div className="relative text-white font-poppins">
                  <button
                    type="submit"
                    className=" w-[98%] my-5 rounded-xl hover:bg-[#2121adee] bg-violet-900 text-white py-3 px-2  hover:bg-violet-800 transition ease-linear tracking-wider"
                    onClick={(e) => signup(e)}
                  >
                    Create new account
                  </button>
                </div>
                <div className="option ">OR</div>
                <button
                  className="w-full flex justify-center items-center text-white gap-2 my-10 py-3 px-2 border-2 border-purple-700 rounded-xl bg-neutral-800 transition-all ease-linear font-poppins"
                  onClick={(e) => signupWithGoogle(e)}
                >
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
