import React, { useState } from "react";
import tum from "../../assets/tum.jpg";
import { RxHeart, RxHeartFilled, RxArrowTopRight } from "react-icons/rx";


function Card({ course }) {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="card ">
          <img src={tum} alt="" />
          <div className="details relative">
            <div className="btn absolute text-2xl top-4 right-5">
              {wishlist ? (
                <RxHeart onClick={() => setWishlist(!wishlist)} />
              ) : (
                <RxHeartFilled
                  className="text-purple-700"
                  onClick={() => setWishlist(!wishlist)}
                />
              )}
            </div>
            <h1 className=" text-lg text-balance ">{course.title}</h1>
            <p className=" my-1">
             {course.desc}
            </p>
            <div className="flex justify-end ml-36 rounded-lg mt-4 px-4 py-3 bg-purple-400 hover:animate-vibrate ease-in-out transition">
              <button className=" tracking-tight text-md">View more</button>
              <RxArrowTopRight className="mt-0.5 ml-0.5 text-xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
