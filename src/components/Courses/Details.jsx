import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/config";
function Details() {
  const [course, setCourse] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      service.getCourse(id).then((res) => {
        if (res) {
          setCourse(res);
        } else navigate("/");
      });
    } else navigate("/");
  }, [id, navigate]);

  return course ? (
    <>
      <CourseDetails key={course.$id} course={course} />;
    </>
  ) : null;
}

export default Details;
