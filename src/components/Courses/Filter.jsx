import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import service from "../../appwrite/config";
import { storeData } from "../../store/courseSlice";

import { LiaFilterSolid } from "react-icons/lia";
import { MdOutlineClear } from "react-icons/md";
function Filter() {
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState({
    topic: null,
    category: null,
    platform: null,
    price: null,
    rating: null,
  });

  const [showFilter, setShowFilter] = useState(false);
  const user = useSelector((state) => state.auth.status);
  const admin = useSelector((state) => state.adminauth.status);
  const wishlist = useSelector((state) => state.auth.wishlistData);

  function keepSingleProp(obj, propertyToKeep, propertyValue) {
    const newObj = {};

    // Loop through all properties in the original object
    for (const key in obj) {
      if (key === propertyToKeep) {
        // Keep the specified property's value
        newObj[propertyToKeep] = propertyValue;
      } else {
        // Set all other properties to null
        newObj[key] = null;
      }
    }
    setShowFilter(false);
    return newObj;
  }

  function findTheNotNullProp(obj) {
    // Loop through all properties in the original object
    for (const key in obj) {
      if (obj[key] != null) {
        return { name: key, val: obj[key] };
      }
    }

    return null;
  }

  const handleFilter = async () => {
    try {
      const filterOption = findTheNotNullProp(filterBy);
      if (!filterOption) {
        const res = await service.getCourses();
        if (res) {
          dispatch(storeData(res.documents));
        }
      } else {
        const { name, val } = filterOption;
        if (name == "topic") {
          const res = await service.getCourseByTopic(val);
          if (res) dispatch(storeData(res.documents));
        } else if (name == "category") {
          const res = await service.getCourseByCategory(val);
          if (res) dispatch(storeData(res.documents));
        } else if (name == "platform") {
          const res = await service.getCourseByPlatform(val);
          if (res) dispatch(storeData(res.documents));
        } else if (name == "price") {
          const res = await service.getCourseByPrice(val);
          if (res) dispatch(storeData(res.documents));
        } else if (name == "rating") {
          const res = await service.getCourseByRating(val);
          if (res) dispatch(storeData(res.documents));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearFilters = () => {
    setFilterBy([
      { name: "topic", val: null },
      { name: "category", val: null },
      { name: "platform", val: null },
      { name: "price", val: null },
      { name: "rating", val: null },
    ]);
  };

  useEffect(() => {
    handleFilter();
  }, [filterBy, user, admin, wishlist]);

  return (
    <div>
      <div>
        <div className=" max-md:w-3/12">
          <div
            className="text-white"
            onClick={(e) => setShowFilter(!showFilter)}
          >
            <LiaFilterSolid className="text-2xl max-[375px]:text-xl" />
          </div>
          {showFilter ? (
            <div className=" relative z-[200]">
              <div className="rounded-xl grid grid-cols-3 max-md:grid-cols-4 divide-gray-600 gap-4 text-white bg-neutral-900  absolute top-10 right-2 max-md:-right-6 w-[500px] max-md:w-[350px] p-5  ">
                <div className=" col-span-3 max-md:col-span-4 place-items-end ">
                  <div
                    className=" flex gap-1 px-4 py-1.5 rounded-2xl bg-purple-700 hover:bg-purple-600 text-sm font-semibold font-poppins transition ease-linear w-36"
                    onClick={clearFilters}
                  >
                    <MdOutlineClear className="hover:rotate-[90deg] transition-transform duration-300 mt-0.5 " />
                    Clear filters
                  </div>
                </div>

                <div className="grid grid-cols-1 max-md:col-span-2  text-gray-400 font-figtree ">
                  <h4 className=" text-center underline underline-offset-8 mb-1.5">
                    Topics
                  </h4>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="html"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "topic", e.target.value)
                      );
                    }}
                  >
                    HTML
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="css"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "topic", e.target.value)
                      );
                    }}
                  >
                    CSS
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="javascript"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "topic", e.target.value)
                      );
                    }}
                  >
                    Javascript
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="react"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "topic", e.target.value)
                      );
                    }}
                  >
                    React JS
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5"
                    value="data science"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "topic", e.target.value)
                      );
                    }}
                  >
                    Data science
                  </button>
                </div>

                <div className="grid grid-cols-1 max-md:col-span-2 gap-0.5 text-gray-400 font-figtree ">
                  <h4 className=" text-center underline underline-offset-8 mb-1.5">
                    Category
                  </h4>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="coding"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "category", e.target.value)
                      );
                    }}
                  >
                    Coding
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="dsa"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "category", e.target.value)
                      );
                    }}
                  >
                    DSA
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="frontend"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "category", e.target.value)
                      );
                    }}
                  >
                    Frontend
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="backend"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "category", e.target.value)
                      );
                    }}
                  >
                    Backend
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="ai"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "category", e.target.value)
                      );
                    }}
                  >
                    AI/ML
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="data science"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "category", e.target.value)
                      );
                    }}
                  >
                    Data science
                  </button>
                </div>

                <div className="grid grid-cols-1 max-md:col-span-2 gap-0.5 text-gray-400 font-figtree ">
                  <h4 className=" text-center underline underline-offset-8 mb-1.5">
                    Platform
                  </h4>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="Coursera"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "platform", e.target.value)
                      );
                    }}
                  >
                    Coursera
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="Udemy"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "platform", e.target.value)
                      );
                    }}
                  >
                    Udemy
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="Youtube"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(filterBy, "platform", e.target.value)
                      );
                    }}
                  >
                    Youtube
                  </button>
                </div>
                <div className="grid grid-cols-1 max-md:col-span-2 gap-0.5 text-gray-400 font-figtree ">
                  <h4 className=" text-center underline underline-offset-8 mb-1.5">
                    Price
                  </h4>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="500"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(
                          filterBy,
                          "price",
                          parseInt(e.target.value)
                        )
                      );
                    }}
                  >
                    under 500
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="800"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(
                          filterBy,
                          "price",
                          parseInt(e.target.value)
                        )
                      );
                    }}
                  >
                    under 800
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="0"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(
                          filterBy,
                          "price",
                          parseInt(e.target.value)
                        )
                      );
                    }}
                  >
                    Free
                  </button>
                </div>
                <div className="grid grid-cols-1 max-md:col-span-2 gap-0.5 text-gray-400 font-figtree ">
                  <h4 className=" text-center underline underline-offset-8 mb-1.5">
                    Ratings
                  </h4>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="4"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(
                          filterBy,
                          "rating",
                          parseFloat(e.target.value)
                        )
                      );
                    }}
                  >
                    4.0+
                  </button>
                  <button
                    className="text-sm text-purple-400 hover:text-purple-300 ease-linear transition-all p-0.5 "
                    value="4.5"
                    onClick={(e) => {
                      setFilterBy(
                        keepSingleProp(
                          filterBy,
                          "rating",
                          parseFloat(e.target.value)
                        )
                      );
                    }}
                  >
                    4.5+
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Filter;
