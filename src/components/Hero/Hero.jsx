import React from "react";

function Hero() {
  return (
    <div>
      <div className=" flex flex-col justify-center align-middle text-white py-56 bg-slate-200">
        <div className=" text-center font-poppins">
          <h1 className="text-blue-900 text-6xl my-4 font-semibold mx-32 max-md:mx-20 max-sm:mx-14 max-md:text-4xl break-words tracking-wide">
            Many Courses, At one Place
          </h1>
          <p className="text-md break-words text-xl px-28 max-md:px-24 max-sm:px-10 text-zinc-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur optio odit accusantium quo itaque reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
