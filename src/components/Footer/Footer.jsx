import { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { dataBase } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const getTime = () => {
  let currentDate = new Date();
  let formattedDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  return formattedDate;
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    addDoc(collection(dataBase, "users"), {
      email: email,
      time: getTime(),
    });

    setEmailError("");
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
          <h1 className=" text-xl max-md:text-xl text-black font-semibold font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-400">
            DotLib
          </h1>
            <p className="text-sm text-gray-400 tracking-wider font-figtree">
              Empowering digital innovation through cutting-edge solutions and
              exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors tracking-wider font-figtree">
                Home
              </a>
              <a
                href="#courses"
                className="text-gray-400 hover:text-purple-400 transition-colors tracking-wide font-figtree"
              >
                Courses
              </a>
              <Link
                to={"/wishlist"}
                className="text-gray-400 hover:text-purple-400 transition-colors tracking-wide font-figtree"
              >
                Wishlist
              </Link>
              <a
                href="#about"
                className="text-gray-400 hover:text-purple-400 transition-colors tracking-wide font-figtree"
              >
                About
              </a>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-purple-400" />
                <span className=" font-figtree tracking-wider text-gray-400">dotlibplatform@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-purple-400" />
                <span className=" font-figtree tracking-wider text-gray-400">+91 7204149678</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-400" />
                <span className=" font-figtree tracking-wider text-gray-400">574227 Moodabidri, Mangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">
              Subscribe for Updates
            </h3>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full font-figtree px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              {emailError && (
                <p className="text-red-400 text-sm">{emailError}</p>
              )}
              <button
                onClick={handleSubscribe}
                className="w-full bg-purple-500 hover:bg-purple-600 transition-colors py-2 rounded font-medium font-figtree"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaGithub, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="text-xl hover:text-purple-400 transition-colors ease-linear"
                >
                  <Icon />
                </button>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <button
                    key={link}
                    className="font-figtree tracking-wider hover:text-purple-400 transition-colors ease-linear"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="mt-8 text-center text-sm text-gray-400 font-poppins tracking-wider">
            © {new Date().getFullYear()} DotLib. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
