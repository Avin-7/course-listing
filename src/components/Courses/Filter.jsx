import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import service from "../../appwrite/config";
import { storeData } from "../../store/courseSlice";
function Filter() {
  const dispatch = useDispatch();
  const [filterTopic, setFilterTopic] = useState("none");
  const filterByTopics = async () => {
    try {
      if (filterTopic == "all") {
        const res = await service.getCourses();
        if (res) dispatch(storeData(res.documents));
      } else if (filterTopic != "none") {
        const topic = filterTopic.toLowerCase();
        const res = await service.getCourseByTopic(topic);
        if (res) dispatch(storeData(res.documents));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterByTopics();
  }, [filterTopic]);

  return (
    <div>
      <div>
        <div className=" flex justify-center align-middle mt-5 flex-wrap gap-4 font-figtree text-gray-300">
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out  text-sm "
            value="html"
            onClick={(e) => {
              setFilterTopic(e.target.value);
            }}
          >
            HTML
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4  bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out text-sm "
            value="css"
            onClick={(e) => {
              setFilterTopic(e.target.value);
            }}
          >
            CSS
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out text-sm "
            value="css"
            onClick={(e) => {
              setFilterTopic(e.target.value);
            }}
          >
            Javascript
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out text-sm "
            value="python"
            onClick={(e) => setFilterTopic(e.target.value)}
          >
            Python
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out text-sm "
            value="java"
            onClick={(e) => setFilterTopic(e.target.value)}
          >
            Java
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out text-sm "
            value="frontend development"
            onClick={(e) => setFilterTopic(e.target.value)}
          >
            Frontend development
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-zinc-800 hover:border-purple-600 tracking-wide border-purple-400 transition ease-in-out text-sm "
            value="backend development"
            onClick={(e) => setFilterTopic(e.target.value)}
          >
            Backend development
          </button>
          <button
            className=" px-2  py-2 rounded-lg  border-b-4 bg-purple-900 hover:border-zinc-800 tracking-wide border-zinc-700 transition ease-in-out text-sm "
            value="backend development"
            onClick={(e) => setFilterTopic("all")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
