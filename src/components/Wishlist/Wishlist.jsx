import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import service from "../../appwrite/config";
import magnifier from "../../assets/magnifier.png";
function Wishlist() {
  const wishlistData = useSelector((state) => state.auth.wishlistData);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   service.getWishlistedCourses(wishlistData).then((res) => {
  //     if (res) {
  //       setData(res.documents);
  //     }
  //   });
  // }, [wishlistData]);
  return (
    <div className="">
      <div >
        <h1 className=" text-3xl font-semibold font-poppins tracking tracking-wide mt-10 ml-24">
          Wishlist
        </h1>
      </div>
      <div className=" ">
        <div className=" grid grid-cols-3 place-items-center  max-lg:grid-cols-2 max-md:grid-cols-1 gap-1">
          {data.length != 0 ? (
            data.map((course) => {
              return (
                <div key={course.$id}>
                  <Card course={course} />
                </div>
              );
            })
          ) : (
            <div className="  absolute top-1/4 left-[35%]">
              <div className=" w-1/3 h-1/3">
                <img src={magnifier} className="w-full h-full" alt="" />{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
