import React, { useEffect, useState } from "react";
import Form from "./Form";
import ViewCourses from "./ViewCourses";
import service from "../../appwrite/config.js";

function Admin() {
  const [courses, setCourses] = useState([]);

  const [component, setComponent] = useState({
    view: false,
    add: true,
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
        setCourses(data.documents);
      })
      .catch((error) => console.log("Error in data fetch" + error))
      .finally(() => {});
  }, [component.view]);

  return (
    <div className="tracking-wide pt-12">
      <div className=" bg-[#1725545a] p-2 mt-10">
        <div className="ml-20 flex gap-12">
          <div>
            <button
              onClick={() => {
                setComponent({ view: !component.view, add: !component.add });
              }}
              className=" px-4 py-3 border border-blue-500 hover:bg-blue-500 transition-all ease-linear text-white text-sm font-semibold font-figtree rounded-md tracking-wider"
            >
              Add course
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setComponent({ view: true, add: false });
              }}
              className=" px-4 py-3 border border-blue-500 hover:bg-blue-500 transition-all ease-linear text-white text-sm font-semibold font-figtree rounded-md tracking-wider"
            >
              View courses
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#17255429]">{handleComponents()}</div>
    </div>
  );
}

export default Admin;
