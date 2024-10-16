import React from "react";

function Form({ formToAdmin, showAddCourseForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data added");
  };

  return (
    <div className="">
      <form
        className="text-black flex justify-center align-middle gap-2"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col w-[48%]">
          <label className="mt-2 mb-0 ">Enter name </label>
          <input
            type="text"
            placeholder="Enter name"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter description </label>
          <input
            type="text"
            placeholder="Enter description"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter category </label>
          <input
            type="text"
            placeholder="eg: coding/data analysis"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter keywords</label>
          <input
            type="text"
            placeholder="eg: frontend/database/fullstack"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />
        </div>
        <div className=" flex flex-col w-[48%]">
          <label className="mt-2 mb-0 ">Enter course link </label>
          <input
            type="text"
            placeholder="eg:www.udemy.com/webdev-course/"
            className=" py-2 mb-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter uploaded date </label>
          <input
            type="text"
            placeholder="eg:12/02/2023"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter duration </label>
          <input
            type="text"
            placeholder="Enter duration eg:02:20(2hrs & 20 min)"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter author </label>
          <input
            type="text"
            placeholder="Enter author"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter platform </label>
          <input
            type="text"
            placeholder="Enter platform"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />
        </div>
      </form>
      <div className=" flex justify-end gap-2 my-2">
        <button
          type="submit"
          onClick={() => {
            formToAdmin(!showAddCourseForm);
          }}
          className="w-1/4 px-2 py-3 bg-transparent border border-red-600 rounded-md text-red-600 hover:bg-red-600 hover:text-white transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-2/5 px-2 py-3 bg-blue-800 rounded-md text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
