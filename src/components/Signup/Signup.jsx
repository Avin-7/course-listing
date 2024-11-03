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
      if (validation.username_validation(name)) {
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
                "with 2 lowercase characters," +
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
      <div className="text-black flex justify-center h-screen items-center">
        <form className="w-full form-signup">
          <div className="flex bg-white h-5" id="container_sign_up">
            <div className="pl-10 mr-5" id="col">
              <div className="h11">
                <h1 className="font-semibold p-4 font-pacifico">Sign-Up</h1>
              </div>
              <div id="input_container1">
                <label htmlFor="text">Username</label>
                <input
                  className="input"
                  type="text"
                  name=""
                  value={name}
                  id=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-4" id="input_container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  value={email}
                  id="he"
                  className="bg-transparent input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-6" id="input_container2">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  className="bg-transparent input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2 className=" text-red-500 my-2 font-sans">{error}</h2>
              </div>

              <div className="relative">
                <button
                  type="submit"
                  className="sign_in_btn"
                  onClick={(e) => signup(e)}
                >
                  Sign up
                </button>
              </div>
              <div className="option">OR</div>
              <button className="b2">
                <img src={Google} alt="" className="size-5 img" />
                <span className="span">Sign up with Google</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
