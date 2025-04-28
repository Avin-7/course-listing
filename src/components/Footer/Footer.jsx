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
            <p className="text-sm">
              Empowering digital innovation through cutting-edge solutions and
              exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a
                href="#courses"
                className="hover:text-blue-400 transition-colors"
              >
                Courses
              </a>
              <Link
                to={"/wishlist"}
                className="hover:text-blue-400 transition-colors"
              >
                Wishlist
              </Link>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>dotlibplatform@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <span>+91 7204149678</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>574227 Moodabidri, Mangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe for Updates
            </h3>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {emailError && (
                <p className="text-red-400 text-sm">{emailError}</p>
              )}
              <button
                onClick={handleSubscribe}
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-2 rounded font-medium"
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
                  className="text-2xl hover:text-blue-400 transition-colors"
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
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} DotLib. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
