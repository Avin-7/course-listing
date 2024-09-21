import React from "react";
import Hero from "../Hero/Hero";
import Courses from "../Courses/Courses";
import Card from "../Card/Card";
import SkeletonCard from "../Card/SkeletonCard";
function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Card />
      <SkeletonCard />
    </div>
  );
}

export default Home;
