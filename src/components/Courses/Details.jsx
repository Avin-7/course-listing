import React from "react";
import CourseDetails from "./CourseDetails";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/config";
import { useQuery } from "@tanstack/react-query";
function Details() {
  const { id: courseID } = useParams();

  const getCourseByID = async () => {
    try {
      const res = await service.getCourse(courseID);
      return res;
    } catch (error) {
      console.log("Error in getCourseByID:", error);
    }
  };

  const {
    data: course,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courseDetails"],
    queryFn: getCourseByID,
    enabled: !!courseID, // Only run the query if id is available
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading course details</div>;

  return course ? (
    <>
      <CourseDetails key={course.$id} course={course} />
    </>
  ) : null;
}

export default Details;
