import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "../Admin/Table";
import ViewCourses from "./ViewCourses";
import service from "../../appwrite/config.js";

function Admin() {
  const [courses, setCourses] = useState([]);

  const [component, setComponent] = useState({
    view: false,
    add: false,
  });

  const formToAdmin = (data) => {
    setComponent(!data);
  };

  const handleComponents = () => {
    if (component.view) {
      return <ViewCourses courses={courses} />;
    } else if (component.add) {
      return <Form formToAdmin={formToAdmin} viewm={component.view} />;
    }
  };
  useEffect(() => {
    service
      .getCourses()
      .then((data) => {
        console.log(data);
        setCourses(data.documents);
      })
      .catch((error) => console.log("Error in data fetch" + error))
      .finally(() => {});
  }, [component.view]);

  return (
    <div className="font-poppins tracking-wide">
      <div className="w-[96%]">
        <div className="mt-10 ml-20 flex gap-12">
          <div>
            <button
              onClick={() => {
                setComponent({ view: false, add: true });
              }}
              className=" px-4 py-3 bg-blue-500 text-white text-sm font-semibold rounded-md"
            >
              Add course
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setComponent({ view: !component.view, add: false });
              }}
              className=" px-4 py-3 bg-blue-500 text-white text-sm font-semibold rounded-md"
            >
              View courses
            </button>
          </div>
        </div>
        <div className=" w-[98%] ">
          {handleComponents()}
        </div>
      </div>
    </div>
  );
}

export default Admin;
