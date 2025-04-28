import React from "react";
import Hero from "../Hero/Hero";
import Courses from "../Courses/Courses";
import Testimonial from "../Testimonials/Testimonial";
import Footer from "../Footer/Footer";
import AboutUs from "../About/AboutUs";

function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <AboutUs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
