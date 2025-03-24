import React from "react";
import courseImage from "../../assets/CourseImage.jpeg";
import { PiGlobeBold } from "react-icons/pi";
import { MdSubtitles } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import service from "../../appwrite/config";
import YTIntro from "./YTIntro";
function CourseDetails({ course }) {
  return (
    <>
      <div className=" p-11 w-full h-screen flex sm:p-12 bg-neutral-900 ">
        <div className=" hidden sm:block w-1/2 p-20 pb-28">
          <div>
            <h1 className="text-white font-roboto text-3xl font-bold text mb-4">
              {course.name}
            </h1>
          </div>
          <div>
            <p className="font-poppins text-slate-500 text-lg">
              {course.description}
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center mt-3">
              <p className=" text-white">{course.ratings}</p>
              <p>
                <FaRegStar fill="gold" size={16} />
              </p>
              <p>
                <FaRegStar fill="gold" size={16} />
              </p>
              <p>
                <FaRegStar fill="gold" size={16} />
              </p>
              <p>
                <FaRegStar fill="gold" size={16} />
              </p>
              <p>
                <FaRegStar fill="gold" size={16} />
              </p>
            </div>
            <div>
              <p className=" text-white">
                Course by{" "}
                <span className="text-purple-500">{course.author}</span>
              </p>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <h1 className="font-roboto text-white text-2xl font-bold">
                What's in the course?
              </h1>
            </div>
            <div className="hidden sm:block">
              <ul className="list-disc p-4 font-poppins text-slate-500 ">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step,hands-on project guidance</li>
                <li>Downloadable resources and scource code</li>
                <li>Quizzes to test your knowlwdge</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-1/2 p-20 flex items-start justify-center">
          <div className="bg-neutral-800 h-auto w-auto shadow-xl">
            <div>
              <img
                src={service.getFilePreiview(course.image)}
                alt="course-image"
                className="w-[350px] h-[250px] sm:w-[450px] sm:h-[350px] object-cover"
              />
            </div>
            <div className="text-white sm:hidden ml-3 mt-3 text-lg font-roboto font-bold">
              <h1>{course.name}</h1>
            </div>
            <div className="sm:hidden ml-3 mt-2 font-roboto text-slate-500 ">
              <p>{course.description}</p>
            </div>
            <div className="flex flex-row w-full p-3">
              <div className="flex items-center  justify-center mr-5 ">
                <FaRegStar fill="gold" size={16} />
                <p className="ml-1 text-white">{course.ratings}</p>
              </div>
              <div className="flex items-center justify-center mr-5">
                <LuClock size={15} className=" text-white" />{" "}
                <p className="text-purple-600 ml-1 font-roboto">
                  3hours,32minutes
                </p>
              </div>
              <div className="flex items-center justify-center mr-5 ">
                <PiGlobeBold className=" text-white" />
                <p className="ml-2 font-roboto text-white ">English</p>
              </div>
            </div>
            <div className="p-1 bg-red-400/50 w-[120px] flex items-center justify-center bg-opacity-4 ml-3 mb-3">
              {/* course free or paid goes here.. */}
              <h5 className="font-roboto font-semibold text-white">
                Free tutorial
              </h5>
            </div>
            <div>
              {" "}
              <p className="font-roboto ml-3 mb-3 text-white">
                Created by <span className="text-purple-600">Albert Lewis</span>
              </p>
            </div>
            <div className="flex items-center gap-2 ml-3 mb-3 text-white">
              <div>
                <PiGlobeBold size={20} className=" text-white" />
              </div>
              <div className="mr-3">
                <p>English</p>
              </div>
              <div>
                <MdSubtitles size={20} />
              </div>
              <div>
                <p>English [Auto]</p>
              </div>
            </div>
            <div className="flex flex-col ml-3 mb-3 mr-3">
              <h1 className="font-roboto font-semibold text-2xl mb-2 text-purple-200">
                Free
              </h1>
              {/* course redirect link goes here */}
              <a
                href={course.link}
                target="_blank"
                className="w- lg:w-f p-3 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-roboto rounded-sm"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {course.YTLink ? (
        <div className=" w-full p-32 flex flex-col justify-center items-center bg-neutral-800 ">
          <h1 className=" text-purple-400 font-semibold font-poppins track-wider text-4xl text-center">
            Introduction
          </h1>
          <YTIntro course={course} />
        </div>
      ) : null}
    </>
  );
}

export default CourseDetails;
