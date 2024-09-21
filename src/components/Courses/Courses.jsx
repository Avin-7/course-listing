import React from "react";

function Courses() {
  return (
    <div className=" bg-gray-50 min-h-96 font-poppins">
      <h1 className=" text-center font-bold text-3xl pt-14">Courses</h1>
      {/* From here search options starts */}
      <div>
        <div>
          <div className=" flex justify-center align-middle mt-5 ">
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-gray-200 transition  text-black mx-2 ">
              HTML
            </button>
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-purple-200 transition  text-black mx-2">
              CSS
            </button>
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-gray-200 transition  text-black mx-2">
              Javascript
            </button>
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-gray-200 transition  text-black mx-2">
              Python
            </button>
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-gray-200 transition  text-black mx-2">
              Java
            </button>
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-gray-200 transition  text-black mx-2">
              Frontend development
            </button>
            <button className=" px-3 py-3 rounded-sm bg-purple-300 hover:bg-gray-200 transition  text-black mx-2">
              Backend development
            </button>
          </div>
        </div>
        {""}
        {""}
        {""}
        {""}
        {/* Search bar starts from here  */}
        <div>
          <div className=" flex justify-center align-middle my-6">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter Keywords"
              className="w-96 border border-purple-500 outline-1 outline-offset-1 outline-purple-800 py-3 px-2 rounded-lg bg-gray-50 text-black "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
