import React, { useEffect, useState } from "react";
import { RxHeart, RxHeartFilled, RxArrowTopRight } from "react-icons/rx";
import { useNavigate, Link } from "react-router-dom";
import service from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/authSlice";
import fullStar from "../../assets/fullStar.svg";
import halfStar from "../../assets/fourPointFiveStar.svg";
import fourPointTwoStar from "../../assets/fourPointTwoStar.svg";
import fourPointThreeStar from "../../assets/fourPointThreeStar.svg";
import fourPointFourStar from "../../assets/fourPointFourStar.svg";
import fourPointSixStar from "../../assets/fourPointSixStar.svg";
import fourPointSevenStar from "../../assets/fourPointSevenStar.svg";
import fourPointEightStar from "../../assets/fourPointEightStar.svg";
import fourPointNineStar from "../../assets/fourPointNineStar.svg";
function Card({ course }) {
  const dispatch = useDispatch();
  const [wishlisted, setWishlisted] = useState(course.wishlisted);
  // useEffect(() => {
  //   service.updateWishlistStatus(course.$id, wishlisted);
  // }, [wishlisted]);
  const [ratings, setRatings] = useState(5);

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
  return course ? (
    <div className="my-32 ml-12 w-[300px] h-[400px]">
      <div className=" bg-neutral-800 text-white w-full h-full rounded-lg">
        <div className=" w-full">
          <img
            src={service.getFilePreiview(course.image)}
            alt=""
            className=" h-[190px] w-full rounded-t-lg"
          />
        </div>
        <div className="relative p-3.5 text-gray-400 font-poppins ">
          <div className="absolute text-2xl top-7 right-5">
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
          <Link to={`/course/${course.$id}`}>
            <h2 className="font-figtree text-balance text-white text-[16px] my-2">
              {course.name.slice(0, 49)}...
            </h2>
            <p className=" font-thin text-[14px] my-0.5">
              {course.description.slice(0, 90)}...
            </p>
            <div className=" my-1.5 flex gap-1">
              <span>{course.ratings}</span>
              <span className=" mt-1">{showRatings()}</span>
            </div>
            <p className=" text-[16px] text-purple-50">
              {course.price == 0 ? "Free" : course.price}
            </p>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}

export default Card;
