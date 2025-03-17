import React, { useState } from "react";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import service from "../../appwrite/config";
import { useDispatch } from "react-redux";
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
    <div className="relative mt-12 mb-24 ml-12 w-[300px] h-[400px] max-md:h-[245px] max-md:w-[190px] ">
      <div className="absolute top-1 right-1">
        <div className=" bg-neutral-800 text-white p-2 rounded-full text-xl">
          {!wishlisted ? (
            <RxHeart
              onClick={(e) => {
                setWishlisted(!wishlisted);
                dispatch(addToWishlist(course.$id));
              }}
            />
          ) : (
            <RxHeartFilled
              className=" text-[#f21b3f]"
              onClick={() => {
                setWishlisted(!wishlisted);
                dispatch(removeFromWishlist(course.$id));
              }}
            />
          )}
        </div>
      </div>
      <div className=" bg-neutral-800 text-white w-full h-full rounded-lg">
        <div className=" w-full">
          <img
            src={service.getFilePreiview(course.image)}
            className=" h-[190px] max-md:h-[100px] w-full rounded-t-lg object-cover"
          />
        </div>
        <div className=" p-3.5 text-gray-400 font-poppins ">
          <Link to={`/course/${course.$id}`}>
            <h2 className="font-figtree text-balance text-white text-[16px] max-md:text-[14px] my-2 max-md:my-0.5 max-md:mr-4">
              {course.name.slice(0, 49)}...
            </h2>
            <p className=" font-thin text-[14px] my-0.5 max-md:hidden">
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
