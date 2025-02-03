import React, { useState } from "react";
import authService from "../../appwrite/auth";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleForgotPassword = async () => {
    if (email == "") {
      setError("Please enter valid email!");
      return null;
    }
    try {
      const res = await authService.forgotPassword({ email });
      if (res) {
        setResult("Email has been sent");
      }
    } catch (err) {
      console.log("ERROR in forgot password", err);
    }
  };

  return (
    <div>
      <div className="text-black font-poppins">
        <div>
          <h1 className="  flex justify-center align-middle pt-36 pb-4 text-3xl">
            Forgot Password
          </h1>
        </div>
        <div className=" pt-30 flex justify-center align-middle ">
          <form
            action=" "
            className="p-2 pb-14 pt-2 flex-col flex w-1/4 max-lg:w-1/3 max-md:w-11/12 max-sm:w-3/4 max-[320px]:w-4/5 "
            onSubmit={(e) => {
              e.preventDefault();
              handleForgotPassword();
            }}
          >
            <input
              className=" border rounded-md bg-gray-200 outline-none px-3 py-2 mb-2"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              {error ? <h2 className=" text-red-500">{error}</h2> : null}
            </div>
            <div>
              {result ? <h2 className=" text-green-500">{result}</h2> : null}
            </div>

            <input
              className="bg-purple-400 hover:bg-purple-200 border px-3 py-2 text-black mt-2 rounded-lg transition-all ease-in-out"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
