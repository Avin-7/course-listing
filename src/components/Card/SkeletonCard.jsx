import React from "react";

function SkeletonCard() {
  return (
    <>
      <div className=" flex justify-center align-middle">
        <div className="bg-gray-100 rounded-lg w-52 h-56 m-14 animate-pulsate">
          <div className=" flex align-middle justify-center flex-col p-2">
            <div className=" bg-gray-300 w-full h-32 rounded-lg text-gray-500 ">
              {/* img  */}
            </div>
            <div className=" bg-gray-300 w-3/5 h-4 rounded-xl text-gray-500 my-1">
              {/* text */}
            </div>
            <div className=" bg-gray-300 w-2/6 h-4 rounded-xl text-gray-500">
              {/* text */}
            </div>
          </div>
          <div className=" flex justify-end align-bottom p-2">
            <div className="bg-gray-300 px-2 py-3 rounded-md w-14">
              {/* button */}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg w-52 h-56 m-14 animate-pulsate">
          <div className=" flex align-middle justify-center flex-col p-2">
            <div className=" bg-gray-300 w-full h-32 rounded-lg text-gray-500 ">
              {/* img  */}
            </div>
            <div className=" bg-gray-300 w-3/5 h-4 rounded-xl text-gray-500 my-1">
              {/* text */}
            </div>
            <div className=" bg-gray-300 w-2/6 h-4 rounded-xl text-gray-500">
              {/* text */}
            </div>
          </div>
          <div className=" flex justify-end align-bottom p-2">
            <div className="bg-gray-300 px-2 py-3 rounded-md w-14">
              {/* button */}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg w-52 h-56 m-14 animate-pulsate">
          <div className=" flex align-middle justify-center flex-col p-2">
            <div className=" bg-gray-300 w-full h-32 rounded-lg text-gray-500 ">
              {/* img  */}
            </div>
            <div className=" bg-gray-300 w-3/5 h-4 rounded-xl text-gray-500 my-1">
              {/* text */}
            </div>
            <div className=" bg-gray-300 w-2/6 h-4 rounded-xl text-gray-500">
              {/* text */}
            </div>
          </div>
          <div className=" flex justify-end align-bottom p-2">
            <div className="bg-gray-300 px-2 py-3 rounded-md w-14">
              {/* button */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonCard;
