import React, { useEffect, useState } from "react";
import SkeletonCard from "../Card/SkeletonCard";
import Card from "../Card/Card.jsx";
import { RxMagnifyingGlass } from "react-icons/rx";
function Courses() {
  const [data, setData] = useState([
    {
      title: "Dummy title",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perferendis. Iusto assumenda at tempore incidunt, a numquam et voluptatibus?",
      image:
        "https://th.bing.com/th/id/OIP.zmDZPFvLFIiT3PfNxgkS7gHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Dummy title",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perferendis. Iusto assumenda at tempore incidunt, a numquam et voluptatibus?",
      image:
        "https://th.bing.com/th/id/OIP.zmDZPFvLFIiT3PfNxgkS7gHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Dummy title",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perferendis. Iusto assumenda at tempore incidunt, a numquam et voluptatibus?",
      image:
        "https://th.bing.com/th/id/OIP.zmDZPFvLFIiT3PfNxgkS7gHaEK?rs=1&pid=ImgDetMain",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    console.log(searchQuery);
  };

  /*
  ***************************************
  Search bar suggesstions code starts here 
  ***************************************
  */
  const smartQueries = [
    {
      A: ["Angular"],
      a: ["Angular"],
    },
    {
      C: ["C", "C++", "C#", "CSS", "Cloud Computing"],
      c: ["C", "C++", "C#", "CSS", "Cloud Computing"],
    },
    {
      D: ["Django"],
      d: ["Django"],
    },
    {
      H: ["HTML"],
      h: ["HTML"],
    },
    {
      J: ["Java", "Javascript"],
      j: ["Java", "Javascript"],
    },
    {
      M: ["MongoDB", "Mongoose"],
      m: ["MongoDB", "Mongoose"],
    },
    {
      N: ["Next JS"],
      n: ["Next JS"],
    },
    {
      P: ["Python"],
      p: ["Python"],
    },
    {
      R: ["React JS", "Rust", "R"],
      r: ["React JS", "Rust", "R"],
    },
    {
      S: ["SQL"],
      s: ["SQL"],
    },
    {
      T: ["Tailwind CSS", "Typescript"],
      t: ["Tailwind CSS", "Typescript"],
    },
    {
      V: ["Vue JS"],
      v: ["Vue JS"],
    },
  ];

  const handleSuggestions = () => {
    if (searchQuery.length == 0) setSuggestions([]);
    smartQueries.map((obj) => {
      for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
          if (item == searchQuery.substring(0, 1)) {
            obj[item].map((query) => {
              if (!suggestions.includes(query)) {
                if (suggestions.length < 5) {
                  setSuggestions((prev) => [query, ...prev]);
                }
              }
            });
          }
        }
      }
    });
  };

  const displaySuggestions = () => {
    let i = 0;
    return suggestions.map((query) => {
      if (i < 5) {
        i++;
        return (
          <button
            key={Math.random()}
            className="bg-transparent bg-gradient-to-tr from-purple-300 to-purple-400 px-4 py-2 m-1 rounded-md text-left"
          >
            {query}
          </button>
        );
      }
    });
  };

  useEffect(() => {
    handleSuggestions();
  }, [searchQuery]);

  /*
  ***************************************
  Search bar suggesstions code ends here 
  ***************************************
  */

  return (
    <div id="courses" className=" bg-gray-50 min-h-96 font-poppins  max-sm:8">
      <h1 className=" text-center font-bold text-3xl pt-14">Courses</h1>
      {/* From here search options starts */}
      <div>
        <div>
          <div className=" flex justify-center align-middle mt-5 flex-wrap gap-2">
            <button className=" px-2 py-2 rounded-lg bg-purple-300 hover:bg-gray-200 transition ease-in-out text-black text-sm">
              HTML
            </button>
            <button className=" px-2 py-2  rounded-lg bg-purple-300 hover:bg-gray-200 transition  ease-in-out text-black text-sm">
              CSS
            </button>
            <button className=" px-2 py-2  rounded-lg bg-purple-300 hover:bg-gray-200 transition ease-in-out text-black text-sm">
              Javascript
            </button>
            <button className=" px-2 py-2  rounded-lg bg-purple-300 hover:bg-gray-200 transition ease-in-out text-black text-sm">
              Python
            </button>
            <button className=" px-2 py-2  rounded-lg bg-purple-300 hover:bg-gray-200 transition ease-in-out text-black text-sm">
              Java
            </button>
            <button className=" px-2 py-2  rounded-lg bg-purple-300 hover:bg-gray-200 transition ease-in-out text-black text-sm">
              Frontend development
            </button>
            <button className=" px-2  py-2 rounded-lg bg-purple-300 hover:bg-gray-200 transition ease-in-out  text-black text-sm">
              Backend development
            </button>
          </div>
        </div>
        {""}
        {""}
        {""}
        {""}
        {/* Search bar starts from here  */}
        <div className=" grid grid-rows-1 place-content-center mt-10 ">
          <div className="flex align-middle justify-center mb-2">
            <input
              type="text"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              placeholder="Enter Keywords"
              className="w-96 max-lg:w-72 max-md:w-60 border border-purple-500 outline-1 outline-purple-800 py-3 px-2 rounded-lg rounded-tr-none rounded-ee-none bg-gray-50 text-black my-0"
            />
            <button
              onClick={() => {
                handleSearch();
              }}
              className="px-4 bg-purple-100 rounded-tr-lg rounded-ee-lg border border-purple-500 border-l-0"
            >
              <RxMagnifyingGlass size={"1.5em"} />
            </button>
          </div>
          {/* 
          ************************************************
          Search Suggestions panel code starts from here
          ************************************************
          */}
          <div className="flex  flex-col relative align-middle justify-center">
            {searchQuery ? (
              <div className="flex flex-col absolute top-1 w-full text-black bg-violet-100 rounded-b-lg rounded-t-md transition-transform ease-in-out z-10 ">
                {suggestions.length > 0 ? (
                  displaySuggestions()
                ) : (
                  <button
                    key={Date.now()}
                    className="bg-transparent bg-gradient-to-tr from-purple-200 to-purple-300 rounded-md px-4 py-2 m-1  text-left"
                  >
                    No results found
                  </button>
                )}
              </div>
            ) : null}
          </div>

          {/* 
          ************************************************
          Search Suggestions panel code ends here
          ************************************************
          */}
        </div>
        {""}
        {""}
        {""}
        {""}
        {/* Course display layout starts from here */}
        <div className="">
          {loading ? (
            <SkeletonCard />
          ) : (
            <div>
              <div className=" grid grid-cols-3 place-items-center  max-lg:grid-cols-2 max-md:grid-cols-1 gap-1">
                {data.map((course) => {
                  return (
                    <div>
                      <Card course={course} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
