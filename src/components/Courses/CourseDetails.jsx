import React from "react";
import courseImage from "../../assets/CourseImage.jpeg";
import { PiGlobeBold } from "react-icons/pi";
import { MdSubtitles } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { LuClock } from "react-icons/lu";
import service from "../../appwrite/config";

import fullStar from "../../assets/fullStar.svg";
import halfStar from "../../assets/fourPointFiveStar.svg";
import fourPointTwoStar from "../../assets/fourPointTwoStar.svg";
import fourPointThreeStar from "../../assets/fourPointThreeStar.svg";
import fourPointFourStar from "../../assets/fourPointFourStar.svg";
import fourPointSixStar from "../../assets/fourPointSixStar.svg";
import fourPointSevenStar from "../../assets/fourPointSevenStar.svg";
import fourPointEightStar from "../../assets/fourPointEightStar.svg";
import fourPointNineStar from "../../assets/fourPointNineStar.svg";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
function CourseDetails({ course }) {
  const cloudName = "dxigz92ht";
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  const showRatings = () => {
    if (course.ratings == 4) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.1 || course.ratings == 4.2) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointTwoStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.3) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointThreeStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.4) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointFourStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.5) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={halfStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.6) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointSixStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.7) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointSevenStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.8) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointEightStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 4.9) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fourPointNineStar} alt="" className="size-3" />
        </span>
      );
    } else if (course.ratings == 5) {
      return (
        <span className=" flex gap-0.5 text-sm">
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
          <img src={fullStar} alt="" className="size-3" />
        </span>
      );
    }
  };
  return (
    <>
      <div className= " min-h-screen px-11 max-lg:p-6 w-full flex sm:p-12 bg-neutral-900">
        <div className=" max-lg:hidden w-1/2 pt-6 px-20 pb-28  mt-12">
          <div>
            <h1 className="text-gray-400  text-4xl font-DMsan font-semibold text mb-4">
              {course.name}
              <span className=" text-purple-500">.</span>
            </h1>
          </div>
          <div className="flex gap-2 items-center mt-3 mb-5">
            <p className=" text-gray-300">{course.ratings}</p>
            <span>{showRatings()}</span>
          </div>
          <div>
            <p className="font-figtree text-gray-400 text-lg mb-10">
              {course.description}
            </p>
          </div>
          <div>
            <div>
              <p className=" text-gray-400 my-3.5 font-figtree tracking-wide">
                Course by
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.platform}
                </span>
              </p>
              <p className=" text-gray-400  my-3.5 font-figtree tracking-wide">
                Author
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.author}
                </span>
              </p>
              <p className=" font-figtree tracking-wide text-gray-400 my-3.5">
                Duration
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.duration}
                </span>
              </p>
              <p className=" font-figtree tracking-wide text-gray-400 my-3.5">
                Uploaded date
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.uploaded}
                </span>
              </p>
            </div>
          </div>
          {course.benefits.length !== 0 ? (
            <div>
              <div className="mt-5">
                <h1 className="font-roboto text-white text-2xl font-bold">
                  What's in the course?
                </h1>
              </div>
              <div className="hidden sm:block">
                <ul className="list-disc p-4 font-poppins text-slate-500 ">
                  {course.benefits
                    ? course.benefits.map((item) => (
                        <li className=" font-figtree">{item}</li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          ) : null}
          <div
            className=" p-2.5 my-3.5 text-center font-figtree text-orange-500
             bg-[#623d114f] rounded-xl"
          >
            Displayed price may vary from current prices.
          </div>
        </div>
        <div className=" w-1/2 max-lg:w-full flex items-start justify-center mt-16">
          <div className="bg-neutral-800 shadow-xl rounded-xl">
            <div className="image-preview">
              <AdvancedImage
                className=" h-[250px] sm:h-[300px] w-full rounded-t-lg object-cover"
                cldImg={cld.image(course.image)}
                plugins={[responsive(), placeholder()]}
              />
            </div>
            <div className="hidden max-lg:block ml-3 mt-3 ">
              <h1 className="text-lg text-[#d1d5dbf0]  font-poppins font-semibold tracking-wide">
                {course.name}
                <span className=" text-purple-500">.</span>
              </h1>
            </div>
            <div className="hidden max-lg:block ml-3 mt-2">
              <p className=" font-figtree tracking-wide text-sm text-gray-500">
                {course.description}
              </p>
            </div>
            <div className=" w-full p-3">
              <div className="flex mr-5 ">
                <PiGlobeBold className=" text-gray-300 mt-1" />
                <p className="ml-2 font-roboto text-gray-400 ">English</p>
              </div>
            </div>

            <div className=" ml-3">
              {" "}
              <p className="font-figtree mb-3 text-gray-400 tracking-wide">
                Created by{" "}
                <span className="text-[#a955f7dc] font-figtree ">
                  {course.author}
                </span>
              </p>
              <p className=" text-gray-400 my-3.5 font-figtree tracking-wide">
                Course by
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.platform}
                </span>
              </p>
              <p className="lg:hidden text-gray-400  my-3.5 font-figtree tracking-wide">
                Author
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.author}
                </span>
              </p>
              <p className="lg:hidden font-figtree tracking-wide text-gray-400 my-3.5">
                Duration
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.duration}
                </span>
              </p>
              <p className="lg:hidden font-figtree tracking-wide text-gray-400 my-3.5">
                Uploaded date
                <span className=" font-figtree tracking-wide ml-1.5 text-[#a955f7dc]">
                  {course.uploaded}
                </span>
              </p>
            </div>

            <div className="flex flex-col ml-3 mb-3 mr-3">
              {course.price == 0 ? (
                <span className="font-figtree  font-semibold text-2xl my-2 text-purple-300 ">
                  Free
                </span>
              ) : (
                <span className="font-figtree  font-semibold text-2xl my-2 text-purple-300 ">
                  &#8377; {course.price}
                </span>
              )}
              {/* course redirect link goes here */}
              <a
                href={course.link}
                target="_blank"
                className="lg:w-full p-3 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-800  text-white font-figtree rounded-xl font-semibold"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
