import React from "react";
import ListItem from "./ListItem";
import { useQuery } from "@tanstack/react-query";
import service from "../../appwrite/config";

function ListOfCourses() {
  const fetchAllCourses = async () => {
    try {
      const res = await service.getCourses();
      return res;
    } catch (error) {
      console.log("Error in ListOfCourses :: fetchAllCourses : ", error);
    }
  };

  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listOFcourses"],
    queryFn: fetchAllCourses,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div className=" text-white">Loading....</div>;

  if (error)
    return <div className=" text-white"> Could not fetch data....</div>;

  return (
    <>
      <div className="">
        <div className=" ">
          <div className="w-full py-4">
            {courses
              ? courses.documents.map((course) => {
                  return (
                    <div key={course.image}>
                      <ListItem course={course} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOfCourses;
