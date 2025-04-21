import React, { useState, useEffect } from "react";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
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

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

import { Modal, ConfigProvider } from "antd";

function Card({ course }) {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.status);
  const wishlistData = useSelector((state) => state.auth.wishlistData);
  const [wishlisted, setWishlisted] = useState(course.wishlisted);

  const [publicId, setPublicId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const updateWishlist = async () => {
    try {
      await service.updateWishlistStatus(course.$id, wishlisted);
    } catch (error) {
      console.log(error);
    }
  };
  const checkWishlisted = () => {
    if (wishlistData.length > 0) {
      setWishlisted(wishlistData.includes(course.$id));
    }
  };
  useEffect(() => {
    updateWishlist();
    checkWishlisted();
  }, [wishlisted, wishlistData]);
  const [ratings, setRatings] = useState(5);

  const cloudName = "dxigz92ht";
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  const addCourseToWishlist = (id) => {
    if (loginStatus) {
      setWishlisted(true);
      dispatch(addToWishlist(id));
    } else {
      setIsModalOpen(true);
    }
  };
  const removeCourseFromWishlist = (id) => {
    if (loginStatus) {
      setWishlisted(false);
      dispatch(removeFromWishlist(id));
    } else {
      setIsModalOpen(true);
    }
  };
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
    <>
      {isModalOpen ? (
        <>
          <ConfigProvider
            theme={{
              components: {
                Modal: {
                  contentBg: "#0d1b2a",
                },
              },
            }}
          >
            ...
            <Modal
              title=""
              open={isModalOpen}
              onOk={handleOk}
              centered={true}
              contentBg="#212121"
              footerBg="#000"
            >
              <h1 className=" text-white text-lg">Please Login or signup</h1>
            </Modal>
          </ConfigProvider>
        </>
      ) : (
        ""
      )}
      <div className="relative mt-10 max-md:mt-5 mb-1.5 ml-12 w-[300px] h-[400px] max-md:h-[245px] max-md:w-[190px] ">
        <div className="absolute top-1 right-1">
          <div className=" bg-neutral-800 text-white p-2 rounded-full text-xl">
            {!wishlisted ? (
              <RxHeart
                onClick={(e) => {
                  addCourseToWishlist(course.$id);
                }}
              />
            ) : (
              <RxHeartFilled
                className=" text-[#f21b3f]"
                onClick={() => {
                  removeCourseFromWishlist(course.$id);
                }}
              />
            )}
          </div>
        </div>
        <div className=" bg-neutral-900 text-white w-full h-full rounded-lg">
          <div className=" w-full">
            <div className="image-preview">
              <AdvancedImage
                className=" h-[190px] max-md:h-[100px] w-full rounded-t-lg object-cover"
                cldImg={cld.image(course.image)}
                plugins={[responsive(), placeholder()]}
              />
            </div>
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
                {course.price == 0 ? (
                  "Free"
                ) : (
                  <span>&#8377; {course.price}</span>
                )}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default Card;
