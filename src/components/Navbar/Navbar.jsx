import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  // this below code is defining useNavigate hook to navigate user
  const navigate = useNavigate();

  return (
    <div>
      <nav className="w-full bg-slate-950 h-20 flex items-center justify-between border-b-2">
        <h1 className=" text-3xl text-slate-100 p-5 font-semibold ml-5 font-inter">
          DotLib
        </h1>

        {/* nav list start here */}
        <div className="text-black hidden text-xl lg:block font-Poppins">
          <a href="#" className="text-slate-100 mr-4 hover:text-cyan-500">
            HOME
          </a>
          <a href="#" className="text-slate-100 mr-4 hover:text-cyan-500">
            COURSES

          </a>
          <a href="#" className="text-slate-100 mr-4 hover:text-cyan-500">
            WISHLIST
          </a>

          <a href="#" className="text-slate-100 mr-4 hover:text-cyan-500">
            ABOUT US
          </a>
          <a href="#" className=" text-slate-100 mr-4 hover:text-cyan-500">
            LOG IN
          </a>
          
        </div>
        {/*nav list ends here */}

        {/*  hamburger starts here*/}


        <div className="lg:hidden" onClick={()=>setShowLinks(!showLinks)}>
        <IoMenu size={40} color="white"/>

        </div>
        {/* hamburger ends here */}

        {/* <!-- create account button statrs here --> */}
        <div className="hidden lg:block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 text-white rounded-lg mr-5 font-Poppins">
          <button>Create new account</button>
        </div>
        {/*create account button ends here */}

        {/*navbar for smaller devices */}
        {showLinks ? (
          <div
            id="toggleMenue"
            className=" bg-white fixed inset-0 lg:hidden">
            <div className="w-full h-20 bg-slate-950  flex items-center justify-between border-b-2">
              <h1 className=" text-3xl text-white p-5 font-semibold ml-5 font-inter">
                DotLib
              </h1>
              <div className="lg:block" onClick={() => setShowLinks(!showLinks)}>
              <RxCross2 size={40} color="white"/>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Home
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Courses
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Wishlist
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                About us
              </a>
              <a
                href="#"
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                log in
              </a>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className=" bg-cyan-600 px-2 py-4 text-white rounded-sm font-inter w-48 ml-5 mt-6 text-center">
              <button>Create new account</button>
            </div>
          </div>
        ) : null}
        {/*navbar for smaller devices*/}
      </nav>
      {/*navbar ends here*/}
    </div>
  );
}

export default Navbar;
