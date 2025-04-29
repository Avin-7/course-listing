import React, { useEffect } from "react";
import {
  FaGraduationCap,
  FaCheckCircle,
  FaBullseye,
  FaBook,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const valueProps = [
    {
      icon: <FaCheckCircle className="text-4xl text-purple-600" />,
      title: "Curated Content Selection",
      description:
        "Hand-picked courses ensuring the highest quality education.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-purple-600" />,
      title: "Expert-Reviewed Courses",
      description: "Every course validated by industry professionals.",
    },
    {
      icon: <FaBullseye className="text-4xl text-purple-600" />,
      title: "Skill-Focused Learning",
      description: "Direct path to acquiring relevant, in-demand skills.",
    },
    {
      icon: <FaBook className="text-4xl text-purple-600" />,
      title: "Personalized Recommendations",
      description: "AI-driven suggestions tailored to your goals.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900" id="about">
      <section
        className="py-20 px-20 max-md:px-12 "
        data-aos="fade-up"
      >
        <div className=" border border-purple-500 bg-[#220b2c57] m-6 p-16 rounded-xl">
          <h2 className="text-4xl max-lg:text-2xl font-semibold font-poppins  tracking-wide text-center mb-16 text-gray-300 ">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students collaborating"
                className="rounded-lg shadow-xl h-80 object-cover w-full"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-lg font-figtree text-gray-400 mb-6">
                We understand the overwhelming nature of online education.
                That's why we've made it our mission to simplify course
                discovery and ensure every student finds their perfect learning
                path.
              </p>
              <p className="text-lg font-figtree text-gray-500">
                By curating only the highest quality courses and providing
                personalized recommendations, we help you focus on what truly
                matters - your education and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#111726ee]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl max-lg:text-2xl font-bold text-center mb-16 text-gray-300 font-poppins tracking-wide">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="p-6 border border-purple-500 bg-[#a955f711] rounded-lg hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-3 font-figtree text-gray-200">
                  {prop.title}
                </h3>
                <p className="text-gray-400 font-figtree">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto border border-purple-500 bg-[#220b2c29] m-6 p-16 rounded-xl">
          <h2 className="text-4xl max-lg:text-2xl font-bold text-center mb-16 text-gray-200 font-poppins tracking-wide">
            How We Help Students
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-300">
                    Reduce Decision Fatigue
                  </h3>
                  <p className="text-gray-400 font-figtree">
                    We eliminate the overwhelming choice paralysis by presenting
                    only the best options.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins mb-2 text-gray-300">
                    Save Valuable Time
                  </h3>
                  <p className="text-gray-400 font-figtree">
                    Quick access to pre-vetted courses means more time for
                    actual learning.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
                alt="Student success"
                className="rounded-lg shadow-xl h-80 object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
