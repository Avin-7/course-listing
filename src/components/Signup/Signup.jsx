import React, { useState } from "react";
import Google from "../../assets/Google.png";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";

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
      const user = await authService.createAccount({ email, password, name });
      if (user) {
        dispatch(authLogin(user));
        alert("Logged in");
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="text-black flex justify-center h-screen items-center">
        <form className="w-full form-signup">
          <div className="flex bg-white h-5" id="container_sign_up">
            <div className="pl-10 mr-5" id="col">
              <div className="h11">
                <h1 className="font-semibold p-4 ">Sign-Up</h1>
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
          <div>{error}</div>
        </form>
      </div>
    </>
  );
}

export default Signup;
