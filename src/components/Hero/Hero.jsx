import React from "react";

function Hero() {
  return (
    <div>
      <div className=" flex flex-col justify-center align-middle text-white py-40 max-sm:py-24 border bg-[#fffefa]">
        <div className=" text-center font-poppins">
          <h1 className="text-6xl my-4 font-semibold pb-10 mx-32 max-md:mx-20 max-sm:mx-8 max-md:text-4xl break-words tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-600">
            Curating the best courses for effortless, distraction free learning
          </h1>
          {/* <p className="text-md break-words text-lg px-28 max-md:px-24 max-sm:px-10 text-zinc-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur optio odit accusantium quo itaque reprehenderit.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
