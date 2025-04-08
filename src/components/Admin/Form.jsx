import React, { useState } from "react";
import service from "../../appwrite/config";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "../Cloudinary/CloudinaryUploadWidget";

function Form({ formToAdmin, showAddCourseForm }) {
  /**
   **States which manages the form inputs....
   */
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [link, setLink] = useState("");
  const [uploaded, setUploaded] = useState("");
  const [duration, setDuration] = useState("");
  const [author, setAuthor] = useState("");
  const [platform, setPlatform] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [allBenefits, setAllBenefits] = useState([]);
  const [benefit, setBenefit] = useState("");
  const [ratings, setRatings] = useState(0);

  const [publicId, setPublicId] = useState("nikzbwffsnndrafu2rts");

  /**
   **Submit button handler function....
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      category,
      keywords,
      link,
      uploaded,
      duration,
      author,
      platform,
      price,
      image,
    };
    try {
      // const file = await service.uploadFile(image);
      if (publicId) {
        const fileId = publicId;
        const res = await service.uploadData({
          name,
          description,
          platform,
          author,
          price,
          category,
          link,
          fileId,
          uploaded,
          duration,
          keywords,
          ratings,
          allBenefits,
        });
        if (res) console.log(res);
      }
    } catch (error) {
      console.log("Error :: handleSubmit : Form.jsx" + error);
    }
  };

  const validateData = () => {
    if (
      name &&
      description &&
      category &&
      keywords &&
      courseLink &&
      uploadedOn &&
      duration &&
      author &&
      platform
    ) {
    } else {
      console.log("Invalid data");
    }
  };
  const handleAddBenefit = () => {
    if (benefit) {
      const res = benefit.split("_");
      setAllBenefits(res);
      console.log(res);
    }
  };
  const clearAllFields = () => {
    setName("");
    setDescription("");
    setCategory("");
    setKeywords([]);
    setLink("");
    setUploaded("");
    setDuration("");
    setAuthor("");
    setPlatform("");
    setImage("");
    setPrice(0);
    setRatings(0);
    setAllBenefits([]);
    setBenefit("");
  };

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
    // Uncomment and modify as needed:
    // cropping: true,
    // showAdvancedOptions: true,
    // sources: ['local', 'url'],
    // multiple: false,
    // folder: 'user_images',
    // tags: ['users', 'profile'],
    // context: { alt: 'user_uploaded' },
    // clientAllowedFormats: ['images'],
    // maxImageFileSize: 2000000,
    // maxImageWidth: 2000,
    // theme: 'purple',
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        className="text-white flex justify-center align-middle gap-2 w-10/12"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col w-2/4">
          <label className="mt-2 mb-0 ">Enter name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="py-2 border border-sky-500  rounded-md pl-2 bg-gray-900 outline-none"
          />

          <label className="mt-2 mb-0 ">Enter description </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter category </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="eg: coding/data analysis"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="eg: frontend/database/fullstack"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <label className="mt-2 mb-0 ">Enter price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="eg: 0/199"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <label className="mt-2 mb-0 ">Enter image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="eg: .jpg/.png"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
        </div>
        <div className=" flex flex-col w-2/4">
          <label className="mt-2 mb-0 ">Enter course link </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="eg:www.udemy.com/webdev-course/"
            className=" py-2 mb-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter uploaded date </label>
          <input
            type="text"
            value={uploaded}
            onChange={(e) => setUploaded(e.target.value)}
            placeholder="eg:12/02/2023"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter duration </label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter duration eg:02:20(2hrs & 20 min)"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter author </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />

          <label className="mt-2 mb-0 ">Enter platform </label>
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            placeholder="Enter platform"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <label className="mt-2 mb-0 ">Enter ratings </label>
          <input
            type="number"
            value={ratings}
            onChange={(e) => setRatings(Number.parseFloat(e.target.value))}
            placeholder="Enter ratings in numbers eg:4.5"
            className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 bg-gray-900"
          />
          <div className=" mt-3">
            <label className=" ">{`Enter benefits (separate with an underscore _)`}</label>
            <div className=" flex">
              <textarea
                type="text"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                placeholder="Enter benefits"
                className="mb-2 py-2 border border-sky-500 outline-none rounded-md pl-2 w-[95%] h-32 resize-none bg-gray-900"
              />
              <span
                onClick={(e) => handleAddBenefit()}
                className=" bg-blue-500 text-white ml-1 mb-2 px-4 py-3 text-sm rounded-md h-12"
              >
                ADD
              </span>
              <span
                onClick={(e) => setBenefit([])}
                className=" bg-yellow-500 text-white ml-1 mb-2 px-2 py-3 text-sm rounded-md h-12 "
              >
                CLEAR
              </span>
            </div>
            {allBenefits.length > 0 ? (
              <div>
                <ul className=" list-disc pl-5 mb-2">
                  {allBenefits.map((data) => {
                    return <li>{data}</li>;
                  })}
                </ul>
                <span
                  onClick={(e) => setAllBenefits([])}
                  className=" bg-red-500 text-white ml-1 mb-2 px-2 py-3 text-sm rounded-md h-12"
                >
                  Delete all
                </span>
              </div>
            ) : null}
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
          type="submit"
          onClick={() => {
            formToAdmin(!showAddCourseForm);
          }}
          className="w-2/4 px-2 py-3 bg-transparent border border-red-600 rounded-md text-red-600 hover:bg-red-600 hover:text-white transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={() => {
            clearAllFields();
          }}
          className="w-2/4 px-2 py-3 bg-transparent border border-red-600 rounded-md text-yellow-600 hover:bg-yellow-600 hover:text-white transition"
        >
          Clear all fields
        </button>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="w-2/4 px-2 py-3 bg-blue-800 rounded-md text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
