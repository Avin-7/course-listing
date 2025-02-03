import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import ForgotPassword from "./components/Login/ForgotPassword.jsx";
import ResetPassword from "./components/Login/ResetPassword.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Admin from "./components/Admin/Admin.jsx";
import conf from "./conf/conf.js";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CourseDetails from "./components/Courses/CourseDetails.jsx";
import Details from "./components/Courses/Details.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/course/:id",
        element: <Details />,
      },
      {
        path: conf.adminRouteLink,
        element: <Admin />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
