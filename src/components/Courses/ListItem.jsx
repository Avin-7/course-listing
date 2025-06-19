import React from "react";
import { Link } from "react-router-dom";
import service from "../../appwrite/config";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

function ListItem({ course }) {
  const cloudName = "dxigz92ht";
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  return course ? (
    <div>
      <div className=" flex justify-center gap-4 w-[98%] -mb-2 text-white mt-14 px-3">
        <div className=" w-3/12">
          <div className="image-preview">
            <AdvancedImage
              className=" size-full object-cover rounded-lg ml-1.5"
              cldImg={cld.image(course.image)}
              plugins={[responsive(), placeholder()]}
            />
          </div>
        </div>
        <div className=" w-3/4">
          <div>
            <h1 className=" text-sm">{course.name}</h1>
          </div>
          <div>
            <Link
              to={`/course/${course.$id}`}
              className=" my-0.5 text-purple-700"
            >
              view more
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ListItem;
