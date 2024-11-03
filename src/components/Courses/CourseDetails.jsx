import React from "react";
import courseImage from "../../assets/CourseImage.jpeg";
import { PiGlobeBold } from "react-icons/pi";
import { MdSubtitles } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import service from "../../appwrite/config";

function CourseDetails({ course }) {
  return (
    <div>
      <div className="bg-neutral-100 h-screen w-full relative flex flex-col lg:flex-row items-center justify-center p-20 gap-9">
        {/* left box.. */}
        <div className=" w-4/5 h-[482px]">
          {/* course image goes here.. */}
          <img
            src={service.getFilePreiview(course.image)}
            alt={course.title}
            className="h-full w-full object-contain"
          />
          {/* lg:h-[400px] lg:w-[670px] */}
        </div>
        {/* left box ends here.. */}

        {/* right box */}
        <div className="flex flex-col gap-2">
          {/* course title goes here..*/}
          <h2 className="font-roboto text-black text-3xl lg:text-6xl font-bold">
            {course.name}
          </h2>
          {/* course discription goes here.. */}
          <p className="font-sans text-xl ">{course.description}</p>
          <div className="flex gap-1">
            <div>
              <PiVideoBold size={25} />
            </div>
            {/* course duration goes here.. */}
            <div>
              <p className="text-purple-600">3hr-32min of on-demand video</p>
            </div>
          </div>
          <div className="p-1 bg-red-400/50 w-[120px] flex items-center justify-center bg-opacity-4">
            {/* course free or paid goes here.. */}
            <h5 className="font-roboto font-semibold">Free tutorial</h5>
          </div>
          {/* course author details goes here.. */}
          <p className="font-roboto ">
            Created by <span className="text-purple-600">Albert Lewis</span>
          </p>
          <div className="flex items-center gap-2">
            <div>
              <PiGlobeBold size={20} />
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
          <h1 className="font-roboto font-semibold text-2xl">Free</h1>
          {/* course redirect link goes here */}
          <a
            href={course.link}
            target="_blank"
            className="w- lg:w-full p-3 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-roboto rounded-xl"
          >
            Enroll Now
          </a>
        </div>
        {/* right box ends here */}
      </div>
    </div>
  );
}

export default CourseDetails;
