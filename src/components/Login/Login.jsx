import React from 'react'
import Google from "../../assets/Google.png";

function Login() {
  return (
    <>
    <div className='flex items-center justify-center mt-8'>
      <form action="#" className="w-28"/>
    <div className="flex bg-white h-5" id="container">
      <div className="pl-10 mr-5" id="col">
          <div className="h11">
              <h1 className=" pl-19 font-semibold p-4 ">Login</h1>
          </div>
          <div className="mt-4" id="input_container">
              <label htmlfor="email">Email</label>
              <input type="email" name="Email" id="he" className="bg-transparent outline-none  p-1" required/>
          </div>
          <div className="mt-6" id="input_container2">
              <label htmlfor="password">Password</label>
              <input type="password" name="password" id="password" className="bg-transparent  mb-5 p-1" required/>
              <img src="hidden.png" alt="" onclick="pass()" className="pass-icon" id="pass-icon"/>
          </div>
          <div className="hl">
            <a href="">Forgot Password?</a>
          </div>
          <div className="relative">
            <button className="sign_in_btn">Sign In</button>
          </div>
          <div className="option2">OR</div>
            <button className="b2">
              <img src={Google} alt="" className="size-5"/>
              <span className="">Sign in  with Google</span>
            </button>
            <div className="sign_up">
              <p>Dont't have an account <a href="#">Sign-up</a></p>
            </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Login