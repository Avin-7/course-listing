import React from 'react'
import Google from "../../assets/Google.png";
function Signup() {
  return (
    <>
    <div className="text-black flex justify-center h-screen items-center">
      <form action="#" className="w-full">
    <div className="flex bg-white h-5" id="container_sign_up">
      <div className="pl-10 mr-5" id="col">
          <div className="h11">
              <h1 className="font-semibold p-4 ">Sign-Up</h1>
          </div>
          <div id="input_container1">
            <label htmlFor="text">Username</label>
            <input type="text" name="" id="" required/>
          </div>
          <div className="mt-4" id="input_container">
              <label htmlFor="email">Email</label>
              <input type="email" name="Email" id="he" className="bg-transparent" required/>
          </div>
          <div className="mt-6" id="input_container2">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" className="bg-transparent" required/>
          </div>
          <div className="relative">
            <button className="sign_in_btn">Sign up</button>
          </div>
          <div className="option">OR</div>
            <button className="b2">
              <img src={Google} alt="" className="size-5"/>
              <span className="">Sign up  with Google</span>
            </button>
      </div>
     </div>
  </form>
    </div>
    </>

  )
}

export default Signup