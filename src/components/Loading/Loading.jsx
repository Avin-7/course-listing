import React from "react";
import Rocket from "../../assets/Rocket.gif";
function Loading() {
  return (
    <div className=" w-full h-screen z-50 bg-white">
      <div className=" absolute top-1/3 left-2/4">
        <img src={Rocket} alt="" className="transition w-14 h-14 " />
      </div>
    </div>
  );
}

export default Loading;
