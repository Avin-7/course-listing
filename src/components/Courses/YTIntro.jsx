import React from "react";

function YTIntro({ course }) {
  return (
    <>
      <div className=" w-full p-32 flex justify-center items-center bg-neutral-800 ">
        <div className=" w-[90%] ">
          <iframe
            className=" w-full h-[580px]"
            src={`${course.YTLink}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default YTIntro;
