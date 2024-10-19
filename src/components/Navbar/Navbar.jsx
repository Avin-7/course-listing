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
        <Link to={"/"}>
          <h1 className=" text-3xl text-slate-100 p-5 font-semibold ml-5 font-inter">
            DotLib
          </h1>
        </Link>

        {/* nav list start here */}
        <div className="text-black hidden text-xl lg:block font-Poppins">
          <Link to={"/"} className="text-slate-100 mr-4 hover:text-cyan-500">
            HOME
          </Link>
          <Link
            to={"/courses"}
            className="text-slate-100 mr-4 hover:text-cyan-500"
          >
            COURSES
          </Link>
          <Link
            to={"/wishlist"}
            className="text-slate-100 mr-4 hover:text-cyan-500"
          >
            WISHLIST
          </Link>

          <Link
            to={"/about"}
            className="text-slate-100 mr-4 hover:text-cyan-500"
          >
            ABOUT US
          </Link>
          <Link
            to={"/login"}
            className=" text-slate-100 mr-4 hover:text-cyan-500"
          >
            LOG IN
          </Link>
        </div>
        {/*nav list ends here */}

        {/*  hamburger starts here*/}

        <div className="lg:hidden" onClick={() => setShowLinks(!showLinks)}>
          <IoMenu size={40} color="white" />
        </div>
        {/* hamburger ends here */}

        {/* <!-- create account button statrs here --> */}
        <div className="hidden lg:block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 text-white rounded-lg mr-5 font-Poppins">
          <Link to={"/signup"}>
            <button>Create new account</button>
          </Link>
        </div>
        {/*create account button ends here */}

        {/*navbar for smaller devices */}
        {showLinks ? (
          <div id="toggleMenue" className=" bg-white fixed inset-0 lg:hidden">
            <div className="w-full h-20 bg-slate-950  flex items-center justify-between border-b-2">
              <Link to={"/"}>
                <h1 className=" text-3xl text-white p-5 font-semibold ml-5 font-inter">
                  DotLib
                </h1>
              </Link>
              <div
                className="lg:block"
                onClick={() => setShowLinks(!showLinks)}
              >
                <RxCross2 size={40} color="white" />
              </div>
            </div>
            <div className="mt-6">
              <Link
                to={"/"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Home
              </Link>
              <Link
                to={"/courses"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Courses
              </Link>
              <Link
                to={"/wishlist"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Wishlist
              </Link>
              <Link
                to={"/aboutus"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                About us
              </Link>
              <Link
                to={"/login"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 font-medium font-inter block"
                onClick={() => setShowLinks(!showLinks)}
              >
                log in
              </Link>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className=" bg-cyan-600 px-2 py-4 text-white rounded-sm font-inter w-48 ml-5 mt-6 text-center">
              <Link to={"/signup"}>
                <button>Create new account</button>
              </Link>
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
