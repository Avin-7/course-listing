import React, { useState } from "react";
import service from "../../appwrite/config";

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
    // console.log(image);

    const file = await service.uploadFile(image);
    if (file) {
      const fileId = file.$id;
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
      });
      // if (res) console.log(res);
    }

    console.log("data added");
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

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        className="text-black flex justify-center align-middle gap-2 w-10/12"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col w-2/4">
          <label className="mt-2 mb-0 ">Enter name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter description </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter category </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="eg: coding/data analysis"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="eg: frontend/database/fullstack"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />
          <label className="mt-2 mb-0 ">Enter price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="eg: 0/199"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />
          <label className="mt-2 mb-0 ">Enter image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="eg: .jpg/.png"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />
        </div>
        <div className=" flex flex-col w-2/4">
          <label className="mt-2 mb-0 ">Enter course link </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="eg:www.udemy.com/webdev-course/"
            className=" py-2 mb-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter uploaded date </label>
          <input
            type="text"
            value={uploaded}
            onChange={(e) => setUploaded(e.target.value)}
            placeholder="eg:12/02/2023"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter duration </label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter duration eg:02:20(2hrs & 20 min)"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter author </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />

          <label className="mt-2 mb-0 ">Enter platform </label>
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            placeholder="Enter platform"
            className="mb-2 py-2 border border-sky-500 outline-blue-600 rounded-md pl-2"
          />
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
