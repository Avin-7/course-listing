import React, { useEffect, useState } from "react";
import { RxHeart, RxHeartFilled, RxArrowTopRight } from "react-icons/rx";
import { useNavigate, Link } from "react-router-dom";
import service from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/authSlice";

function Card({ course }) {
  const dispatch = useDispatch();
  const [wishlisted, setWishlisted] = useState(course.wishlisted);
  useEffect(() => {
    service.updateWishlistStatus(course.$id, wishlisted);
  }, [wishlisted]);
  return course ? (
    <div>
      <div className="container">
        <div className="card rounded-3xl">
          <div className=" p-4 rounded-2xl">
            <img
              src={service.getFilePreiview(course.image)}
              alt={course.title}
              className=" rounded-2xl p-6 object-cover"
            />
          </div>
          <div className="details relative">
            <div className="btn absolute text-2xl top-2 right-5">
              {!wishlisted ? (
                <RxHeart
                  onClick={(e) => {
                    setWishlisted(!wishlisted);
                    dispatch(addToWishlist(course.$id));
                  }}
                />
              ) : (
                <RxHeartFilled
                  className="text-[#f21b3f]"
                  onClick={() => {
                    setWishlisted(!wishlisted);
                    dispatch(removeFromWishlist(course.$id));
                  }}
                />
              )}
            </div>
            <h1 className="text-base text-balance font-poppins leading-[1.7rem]">
              {course.name}
            </h1>
            <p className=" my-1 font-roboto">{course.description}</p>
            <Link to={`/course/${course.$id}`}>
              <div className="flex justify-center align-middle gap-0.5 rounded-xl mt-4 px-4 py-3 bg-purple-400 hover:animate-vibrate w-full ease-in-out transition">
                <button className=" tracking-tight text-md ">
                  <span>View more</span>
                </button>
                <RxArrowTopRight className="mt-0.5 text-xl " />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Card;
