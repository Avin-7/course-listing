import React from "react";

function Hero(){
  return (
    <div>
      <div className=" flex flex-col relative justify-center align-middle  h-screen" id="bgimg44 ">
      <div className="absolute right- top-10">
        <div className="bg-purple-500 w-72 h-72 rounded-full top-0 -left-4 absolute mix-blend-multiply filter blur-3xl"> 
        </div>
        <div className="bg-yellow-300 w-72 h-72 rounded-full top-10 left-32 absolute mix-blend-multiply filter blur-3xl"> 
        </div>
        <div className="bg-pink-300 w-72 h-72 rounded-full top-17 left-9 absolute mix-blend-multiply filter blur-3xl"> 
        </div>
        </div>
        <div className="absolute right-96 top-24">
        <div className="bg-purple-400 w-72 h-72 rounded-full top-0 -left-4 absolute mix-blend-multiply filter blur-3xl"> 
        </div>
        <div className="bg-yellow-300 w-72 h-72 rounded-full top-10 left-32 absolute mix-blend-multiply filter blur-3xl"> 
        </div>
        <div className="bg-pink-300 w-72 h-72 rounded-full top-17 left-9 absolute mix-blend-multiply filter blur-3xl"> 
        </div>




        
        </div>
        <div className=" font-poppins relative  h-96 bottom-3 ">
          <h1 className="text-6xl my-8 font-semibold pb-10 mx-32 max-md:mx-20 max-sm:mx-8 max-md:text-4xl break-words tracking-wider bg-clip-text   mb-20 drop-shadow-md text-transparent bg-black ">
          No more jumping <br />between platforms 
          <p className="text-base">find everything you need right here for focused, <br />hassle-free learning.</p>
          </h1>
          <div className="bg-white/60 h-72 right-32 top-0 w-48 bottom-10 absolute rounded-xl shadow-2xl transform transition-all hover:-translate-y-2 duration-200">
          <div className="h-32 bg-white/30 rounded-xl border-none">
              <img src="https://images.pexels.com/photos/11035474/pexels-photo-11035474.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="p-2 rounded-lg opacity-60" />
          </div>
          <h1 className="text-center font-poppins font-bold">The Complete Python Developer</h1>
          <button className="bg-blue-300 h text-sm p-2 justify-center flex rounded-md ml-24 text-white/70 mt-16">view more</button>
        </div>
        <div className="bg-white/90 h-72 right-56 top-10 w-48 bottom-10 absolute rounded-xl shadow-2xl transform transition-all hover:-translate-y-2 duration-200">
          <div className="h-32 bg-white/90 rounded-xl">
              <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="opacity-90 p-2 rounded-lg " />
          </div>
          <h1 className="text-center font-poppins font-bold">React - The Complete Guide 2025 (incl. Next.js, Redux)</h1>
          <button className="bg-blue-400 h text-sm p-2 justify-center flex rounded-md ml-24 text-white/90 mt-10">view more</button>
        </div>
        <div className="bg-white h-72  top-20 w-48  right-80 absolute rounded-xl shadow-2xl transform transition-all hover:-translate-y-2 duration-300">
          <div className="h-32 bg-white rounded-xl">
              <img src="https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className=" rounded-lg p-2 " />
          </div>
          <h1 className="text-center font-poppins font-bold">Git Complete: The definitive, step-by-step guide to Git</h1>
          
          <button className="bg-blue-600  text-sm p-2 justify-center flex rounded-md ml-24 text-white mt-10">view more</button>
        </div>
        </div>
        <button className="rounded-full font-sans btn-hover-animation color-7 absolute bottom-36 left-64 h-16 shadow-lg">
                Get started
              </button>
      </div>
    </div>
  );
}

export default Hero;
