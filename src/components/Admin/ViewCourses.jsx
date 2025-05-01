import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import service from "../../appwrite/config";
function ViewCourses() {
  const admin = useSelector((state) => state.adminauth.status);

  const [courses, setCourses] = useState([]);

  const handleAction = (id) => {
    console.log(`Action clicked for course ID: ${id}`);
    // Add your action logic here
  };

  const fetchAllCourses = async () => {
    const res = await service.getCourses();
    if (res) setCourses(res.documents);
  };

  useEffect(() => {
    if (admin) {
      fetchAllCourses();
    }
  }, [admin]);

  return courses ? (
    <div className="p-5 text-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-[#0c0e20] rounded-lg overflow-hidden ">
          <thead className=" bg-[#282697] text-[13px] ">
            <tr className="  ">
              <th className="font-figtree font-medium  p-5 text-left">Name</th>
              <th className="font-figtree font-medium p-5 text-left">
                Description
              </th>
              <th className="font-figtree font-medium p-5 text-left">
                Platform
              </th>
              <th className="font-figtree font-medium p-5 text-left">Author</th>
              <th className="font-figtree font-medium p-5 text-left">Price</th>
              <th className="font-figtree font-medium p-5 text-left">
                Category
              </th>
              <th className="font-figtree font-medium p-5 text-left">Link</th>
              <th className="font-figtree font-medium p-5 text-left">
                Image Id
              </th>
              <th className="font-figtree font-medium p-5 text-left">
                Duration
              </th>
              <th className="font-figtree font-medium p-5 text-left">
                Ratings
              </th>
              <th className="font-figtree font-medium p-5 text-left">
                Keywords
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course.$id}
                className=" text-sm hover:bg-[#28269755] transition-colors ease-linear "
              >
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.name}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.description}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.platform}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.author}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.price}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.category}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.link.slice(0, 50)}...
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.image}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.duration}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.ratings}
                </td>
                <td className="font-figtree font-medium p-5 text-left border-b-[1px] border-[#28269755]">
                  {course.keywords}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div>No results found</div>
  );
}

export default ViewCourses;
