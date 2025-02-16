import React from "react";
import { Link } from "react-router-dom";
import service from "../../appwrite/config";
function ListItem({ course }) {
  return course ? (
    <div>
      <div className=" flex justify-center gap-4 w-[98%] mb-4 text-white">
        <div className=" w-3/12">
          <img
            src={service.getFilePreiview(course.image)}
            alt=""
            className=" size-full object-cover rounded-lg ml-1.5"
          />
        </div>
        <div className=" w-3/4">
          <div>
            <h1 className=" text-sm">{course.name}</h1>
          </div>
          <div>
            <Link to={`/course/${course.$id}`} className=" my-0.5 text-purple-700">
              view more
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ListItem;
