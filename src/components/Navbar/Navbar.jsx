import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as authLogout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { adminlogin } from "../../store/adminSlice";
import conf from "../../conf/conf";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const adminStatus = useSelector((state) => state.adminauth.status);

  // this below code is defining useNavigate hook to navigate user
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = async () => {
    try {
      const res = await authService.logout();
      dispatch(authLogout(res));
      dispatch(adminlogin(false));
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <nav className="w-full h-16 flex items-center justify-between fixed top-0 bg-transparent backdrop-blur-3xl z-[100] ">
        <Link to={"/"} className=" border-none outline-none">
          <h1 className=" text-xl max-md:text-xl text-black p-5 font-semibold ml-5 font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">
            DotLib
          </h1>
        </Link>

        {/* nav list start here */}
        <div className="hidden text-sm tracking-wider lg:block font-figtree ml-8 ">
          <Link
            to={"/"}
            className="mr-4 text-gray-200 hover:text-gray-400 transition-all ease-linear"
          >
            Home
          </Link>
          <Link
            to={"/courses"}
            className=" mr-4 text-gray-200 hover:text-gray-400 transition-all ease-linear"
          >
            Courses
          </Link>
          <Link
            to={"/wishlist"}
            className=" mr-4 text-gray-200 hover:text-gray-400 transition-all ease-linear "
          >
            Wishlist
          </Link>

          <Link
            to={"/about"}
            className=" mr-4 text-gray-200 hover:text-gray-400 transition-all ease-linear"
          >
            About
          </Link>
          {adminStatus ? (
            <Link
              className=" mr-4 text-gray-200 hover:text-gray-400 transition-all ease-linear"
              to={conf.adminRouteLink}
            >
              Admin
            </Link>
          ) : (
            false
          )}
          {!authStatus ? (
            <Link
              to={"/login"}
              className="  mr-4 text-gray-200 hover:text-gray-400 transition-all ease-linear"
            >
              Login
            </Link>
          ) : null}
        </div>
        {/*nav list ends here */}

        {/*  hamburger starts here*/}

        {!showLinks ? (
          <div
            className="lg:hidden absolute top-4 right-12 text-3xl"
            onClick={() => setShowLinks(!showLinks)}
          >
            <IoMenu color="white" />
          </div>
        ) : null}
        {/* hamburger ends here */}

        {/* <!-- create account button statrs here --> */}
        <div className="hidden lg:block p-3 text-white mr-5 font-poppins">
          {authStatus ? (
            <button
              className="rounded-xl font-medium px-4 py-2 bg-purple-500  text-white"
              onClick={() => logoutUser()}
            >
              Sign out
            </button>
          ) : (
            <Link to={"/signup"}>
              <button className="text-[15px] rounded-lg btn-hover-animation color-7 text-gray-100">
                Create new account
              </button>
            </Link>
          )}
        </div>
        {/*create account button ends here */}

        {/*navbar for smaller devices */}
        {showLinks ? (
          <div
            id="toggleMenue"
            className="fixed top-0 bg-transparent backdrop-blur-xl inset-0 lg:hidden z-[100]"
          >
            <div className="w-full h-16 flex items-center justify-between inset-0">
              <Link to={"/"}>
                <h1 className=" text-2xl max-md:text-xl p-5 font-semibold ml-5  font-inter font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">
                  DotLib
                </h1>
              </Link>
              <div
                className="lg:block mr-5 absolute top-4 right-7 text-3xl "
                onClick={() => setShowLinks(!showLinks)}
              >
                <RxCross2 color="white" />
              </div>
            </div>

            <div className="py-6 bg-neutral-800 text-white flex flex-col justify-center items-center font-figtree z-[100] ">
              <Link
                to={"/"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 text-md tracking-wide lg:block  block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Home
              </Link>
              <Link
                to={"/courses"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 text-md tracking-wide lg:block block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Courses
              </Link>
              <Link
                to={"/wishlist"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 text-md tracking-wide lg:block  block"
                onClick={() => setShowLinks(!showLinks)}
              >
                Wishlist
              </Link>
              <Link
                to={"/about"}
                className="mr-4 hover:text-cyan-500 hover:bg-gray-50 rounded-lg m-4 p-3 text-md tracking-wide lg:block  block"
                onClick={() => setShowLinks(!showLinks)}
              >
                About us
              </Link>

              <div className="mt-6">
                {adminStatus ? (
                  <Link
                    to={conf.adminRouteLink}
                    className=" m-4 hover:text-purple-600 p-3 text-md tracking-wide lg:block  "
                    onClick={() => setShowLinks(!showLinks)}
                  >
                    Admin
                  </Link>
                ) : (
                  false
                )}
                {!authStatus ? (
                  <Link
                    to={"/login"}
                    onClick={() => setShowLinks(!showLinks)}
                    className=" mr-4 m-4 p-3 hover:text-purple-600 ease-in-out transition "
                  >
                    Login
                  </Link>
                ) : null}
              </div>
            </div>

            {/* <div className="w-full h-[1px] bg-gray-300 mt-6 mb-5"></div> */}

            <div className="lg:hidden p-0 bg-neutral-800 flex justify-center items-center font-figtree text-white rounded-b-3xl">
              {authStatus ? (
                <button
                  className="rounded-xl font-medium px-2 py-0 bg-purple-500  "
                  onClick={() => logoutUser()}
                >
                  Sign out
                </button>
              ) : (
                <Link to={"/signup"} onClick={() => setShowLinks(!showLinks)}>
                  <button className="">Create new account</button>
                </Link>
              )}
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
