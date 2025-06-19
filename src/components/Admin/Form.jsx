import React, { useEffect, useState } from "react";
import service from "../../appwrite/config";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "../Cloudinary/CloudinaryUploadWidget";

import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function Form() {
  /**
   **States which manages the form inputs....
   */

  const [publicId, setPublicId] = useState("");
  const [allKeywords, setAllKeywords] = useState({
    K1: "",
    K2: "",
    K3: "",
  });

  const [allBenefits, setAllBenefits] = useState({
    B1: "",
    B2: "",
    B3: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    keywords: [],
    link: "",
    uploaded: "",
    duration: "",
    author: "",
    platform: "",
    image: "",
    price: 0,
    benefits: [],
    ratings: 4.0,
  });

  const saveAllKeywords = (e) => {
    let allKeywordsArray = Object.values(allKeywords);
    allKeywordsArray = allKeywordsArray.filter((item) => item.length > 1);
    setFormData((prev) => {
      return { ...prev, keywords: allKeywordsArray };
    });
  };
  const saveAllBenefits = (e) => {
    let allBenefitsArray = Object.values(allBenefits);
    allBenefitsArray = allBenefitsArray.filter((item) => item.length > 1);
    setFormData((prev) => {
      return { ...prev, benefits: allBenefitsArray };
    });
  };

  const clearAllFields = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      keywords: [],
      link: "",
      uploaded: "",
      duration: "",
      author: "",
      platform: "",
      image: "",
      price: 0,
      benefits: [],
      ratings: 4.0,
    });
    setPublicId("");
  };

  const handleChange = (e) => {
    if (e.target.name == "ratings") {
      setFormData({
        ...formData,
        [e.target.name]: Number.parseFloat(e.target.value),
      });
    } else if (e.target.name == "price") {
      setFormData({
        ...formData,
        [e.target.name]: Number.parseInt(e.target.value),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  /**
   **Submit button handler function....
   */
  const setImageId = () => {
    setFormData({
      ...formData,
      image: publicId,
    });
  };

  const uploadCourseData = async () => {
    try {
      if (publicId) {
        const res = await service.uploadData(formData);
        if (res) toast.success("Data added successfully!!");
      }
    } catch (error) {
      toast.error("Something went wrong!!");
      console.log("Error :: handleSubmit : Form.jsx" + error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    uploadCourseDataMutation();
  };

  const { mutate: uploadCourseDataMutation } = useMutation({
    mutationFn: uploadCourseData,
  });

  const cloudName = "dxigz92ht";
  const uploadPreset = "aoh4ghnb";

  // State

  // Cloudinary configuration
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  // Upload Widget Configuration
  const uwConfig = {
    cloudName,
    uploadPreset,
  };

  useEffect(() => {
    if (publicId) {
      setImageId();
    }
  }, [publicId]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form className="text-white flex justify-center align-middle gap-2 w-10/12">
        <div className=" flex flex-col w-2/4">
          <label className="mt-2 mb-0  font-figtree ">Enter name </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className=" font-figtree py-2 border border-sky-500  rounded-md pl-2 bg-gray-900 outline-none"
          />
          <label className="mt-2 mb-0  font-figtree ">Enter description </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <label className="mt-2 mb-0  font-figtree ">Enter category </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="eg: coding/data analysis"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <label className="mt-2 mb-0  font-figtree ">
            Enter keywords ( separate them with / )
          </label>
          {/*
          <div className="flex ">
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="eg: frontend/database/fullstack"
              className=" font-figtree mb-2 py-2 w-11/12 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
            />
            <button
              onClick={splitKeywords}
              className=" font-figtree  px-2 rounded-xl m-2 bg-blue-500 hover:bg-blue-400 tracking-wide"
            >
              Add
            </button>
          </div>*/}
          <div>
            <input
              type="text"
              name="K1"
              value={allKeywords.K1}
              onChange={(e) =>
                setAllKeywords((prev) => ({ ...prev, K1: e.target.value }))
              }
              placeholder="eg: frontend/database/fullstack"
              className=" font-figtree mb-2 py-2 w-11/12 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
            />
            <input
              type="text"
              name="K2"
              value={allKeywords.K2}
              onChange={(e) =>
                setAllKeywords((prev) => ({ ...prev, K2: e.target.value }))
              }
              placeholder="eg: frontend/database/fullstack"
              className=" font-figtree mb-2 py-2 w-11/12 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
            />
            <input
              type="text"
              name="K3"
              value={allKeywords.K3}
              onChange={(e) =>
                setAllKeywords((prev) => ({ ...prev, K3: e.target.value }))
              }
              placeholder="eg: frontend/database/fullstack"
              className=" font-figtree mb-2 py-2 w-11/12 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
            />
            <button
              type="button"
              onClick={saveAllKeywords}
              className=" font-figtree  px-2 rounded-xl m-2 bg-blue-500 hover:bg-blue-400 tracking-wide"
            >
              Save
            </button>
          </div>
          <label className="mt-2 mb-0  font-figtree ">Enter price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="eg: 0/199"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />{" "}
          <label className="mt-2 mb-0  font-figtree ">Enter ratings </label>
          <input
            type="number"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            placeholder="Enter ratings in numbers eg:4.5"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
        </div>
        <div className=" flex flex-col w-2/4">
          <label className="mt-2 mb-0  font-figtree ">Enter course link </label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="eg:www.udemy.com/webdev-course/"
            className=" font-figtree  py-2 mb-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter uploaded date </label>
          <input
            type="text"
            name="uploaded"
            value={formData.uploaded}
            onChange={handleChange}
            placeholder="eg:12/02/2023"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0  font-figtree ">Enter duration </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter duration eg:02:20(2hrs & 20 min)"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0  font-figtree ">Enter author </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0  font-figtree ">Enter platform </label>
          <input
            type="text"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            placeholder="Enter platform"
            className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <label className="  font-figtree ">
            Enter benefits (separate them with /)
          </label>
          {/* <div className="flex">
            <textarea
              type="text"
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              placeholder="eg: Benefit 1/Benefit 2"
              className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 w-[95%] h-32 resize-none bg-gray-900"
            />
            <button
              onClick={splitBenefits}
              className=" px-2 rounded-xl m-2 h-10 bg-blue-500 hover:bg-blue-400 tracking-wide"
            >
              Add
            </button>
          </div> */}
          <div className="">
            <textarea
              type="text"
              name="benefit 1"
              value={allBenefits.B1}
              onChange={(e) =>
                setAllBenefits((prev) => ({ ...prev, B1: e.target.value }))
              }
              placeholder="Benefit 1"
              className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 w-[95%] h-32 resize-none bg-gray-900"
            />
            <textarea
              type="text"
              name="benefit 2"
              value={allBenefits.B2}
              onChange={(e) =>
                setAllBenefits((prev) => ({ ...prev, B2: e.target.value }))
              }
              placeholder="Benefit 2"
              className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 w-[95%] h-32 resize-none bg-gray-900"
            />
            <textarea
              type="text"
              name="benefit 3"
              value={allBenefits.B3}
              onChange={(e) =>
                setAllBenefits((prev) => ({ ...prev, B3: e.target.value }))
              }
              placeholder="Benefit 3"
              className=" font-figtree mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 w-[95%] h-32 resize-none bg-gray-900"
            />
            <button
              type="button"
              onClick={saveAllBenefits}
              className=" px-2 rounded-xl m-2 h-10 bg-blue-500 hover:bg-blue-400 tracking-wide"
            >
              Save
            </button>
          </div>
          <CloudinaryUploadWidget
            uwConfig={uwConfig}
            setPublicId={setPublicId}
          />
          <div>
            {publicId && (
              <div className="image-preview" style={{ margin: "20px auto" }}>
                <AdvancedImage
                  style={{ maxWidth: "100%" }}
                  cldImg={cld.image(publicId)}
                  plugins={[responsive(), placeholder()]}
                />
              </div>
            )}
          </div>
        </div>
      </form>
      <div className=" flex justify-end gap-2 w-9/12 my-12">
        <button
          onClick={clearAllFields}
          className=" font-figtree w-2/4 px-2 py-3 bg-transparent border border-red-600 rounded-md text-yellow-600 hover:bg-yellow-600 hover:text-white transition ease-linear"
        >
          Clear all fields
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className=" font-figtree w-2/4 px-2 py-3 bg-blue-800 rounded-md text-white transition-all ease-linear"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
