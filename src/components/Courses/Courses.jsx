import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SkeletonCard from "../Card/SkeletonCard";
import Card from "../Card/Card.jsx";
import { RxArrowRight } from "react-icons/rx";
import SearchBar from "./SearchBar.jsx";
import Filter from "./Filter.jsx";
function Courses() {
  const courses = useSelector((state) => state.courseData.courses);

  return (
    <div
      id="courses"
      className=" bg-gray-900 font-poppins max-sm:8 pt-4 pb-20 px-5"
    >
      <h1 className=" text-center font-bold text-3xl max-md:text-2xl pt-14 text-transparent bg-clip-text bg-gradient-to-tr mb-20 from-purple-500 via-purple-600 to-blue-300">
        What would you like to learn?
      </h1>
      <div>
        <div className=" flex justify-center items-center gap-3.5 w-full mt-6 mb-2">
          <SearchBar />
          <Filter />
        </div>
        <div>
          <div>
            {courses?.length != 0 && (
              <div className="hidden max-md:block mt-10 mr-5">
                <Link to={"/courses/list"}>
                  <div className=" text-sm font-normal text-purple-600 flex justify-self-end gap-1">
                    <span>view all</span>
                    <RxArrowRight className=" text-lg" />
                  </div>
                </Link>
              </div>
            )}
            <div className=" grid grid-cols-4 place-items-center max-xl:grid-cols-3  max-lg:grid-cols-2 max-md:flex max-md:gap-4 max-md:overflow-auto max-md:pl-3">
              {courses &&
                courses.map((course) => {
                  return (
                    <div key={course.$id}>
                      <Card course={course} />
                    </div>
                  );
                })}
            </div>
            <div>
              {courses?.length == 0 && (
                <div className=" grid grid-cols-4 place-items-center  max-lg:grid-cols-2 max-md:grid-cols-4 gap-1 max-md:gap-72 max-md:pl-36 max-md:overflow-auto ">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
