import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

let nowDate = new Date();
let copyRightYear = nowDate.getFullYear();

export const Footer = () => {
  return (
    <div className="bg-gray-950 mx-auto sm:p-10 flex flex-col items-center justify-center gap-4 py-10">
      {/* ******Social media icons wrapper******  */}
      <div className="socialIcons flex items-center justify-evenly gap-6 ">
        <a href="#" className="bg-white p-2 rounded-full hover:bg-purple-600">
          <FaFacebook size={25} />
        </a>
        <a href="#" className="bg-white p-2 rounded-full hover:bg-purple-600">
          {" "}
          <FaInstagram size={25} />
        </a>
        <a href="#" className="bg-white p-2 rounded-full hover:bg-purple-600">
          <FaSquareTwitter size={25} />
        </a>
        <a href="#" className="bg-white p-2 rounded-full hover:bg-purple-600">
          <FaLinkedin size={25} />
        </a>
      </div>
      {/* ******Routes wrapper****** */}
      <div className="flex items-center py-5">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7 text-slate-400 text-smsm:text-lg">
          <li className="hover:text-purple-600 font-roboto">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-purple-600 font-roboto">
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li className="hover:text-purple-600 font-roboto">
            <Link to={"/wishlist"}>Wishlist</Link>
          </li>
          <li className="hover:text-purple-600 font-roboto">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-purple-600 font-roboto">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>

      {/* ******copyright container****** */}
      <div>
        <p className=" text-slate-400 text-sm sm:text-base font-roboto">
          copyright@{copyRightYear}{" "}
          <span className="text-purple-600">Dotlib.in</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
