import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
