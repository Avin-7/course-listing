import React from "react";
import Hero from "../Hero/Hero";
import Courses from "../Courses/Courses";
import Card from "../Card/Card";
import SkeletonCard from "../Card/SkeletonCard";
import CourseDetails from "../Courses/CourseDetails";
function Home() {

  return (
    <div>
      <Hero />
      <Courses />
    </div>
  );
}

export default Home;
