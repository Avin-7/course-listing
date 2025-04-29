import React from "react";

function Testimonial() {
  const data = [
    {
      id: 1,
      user: "Amit",
      type: "Student",
      content: "Found the perfect course in minutes!",
    },
    {
      id: 2,
      user: "Harshal",
      type: "Freelancer",
      content: "No more endless searching for quality courses!",
    },
    {
      id: 3,
      user: "Jason",
      type: "Software Engineer",
      content: "Filters out the noise, love it!",
    },
    {
      id: 4,
      user: "Chinmay",
      type: "Tutor",
      content: "The service was excellent. Highly recommend!",
    },
    {
      id: 5,
      user: "Ravish",
      type: "Freelancer",
      content: "Saves me time and money!",
    },
    {
      id: 6,
      user: "Sachin",
      type: "Graphic Designer",
      content: "I would definitely use their services again.",
    },
    {
      id: 7,
      user: "Ramya",
      type: "Full Stack Developer",
      content: "Learnt React faster, thanks to DotLib!",
    },
    {
      id: 8,
      user: "Meera",
      type: "AI/ML Researcher",
      content: "Great for finding niche tech courses!",
    },
    {
      id: 9,
      user: "Arjun",
      type: "Freelancer",
      content: "Saves hours of searching for good courses!",
    },
    {
      id: 10,
      user: "Arvind",
      type: "Student",
      content: "No more searching, just learning!",
    },
    {
      id: 11,
      user: "Neha",
      type: "UI/UX Designer",
      content: "Easiest way to discover top design courses!",
    },
    {
      id: 12,
      user: "Vikram",
      type: "Software Developer",
      content: "Found the perfect coding course instantly!",
    },
  ];
  return (
    <>
      <div className=" pt-32 pb-20 max-md:py-72 bg-gray-900">
        <div className="mx-auto">
          <h2 className="text-4xl max-lg:text-2xl text-gray-300 font-semibold tracking-wide mb-20 text-center font-poppins">
            Testimonials
          </h2>
          <div className="mb-10 masonry overflow-hidden">
            <div className="marquee-wrapper">
              {data.slice(0, data.length / 2).map((item) => (
                <div
                  key={item.id}
                  className="marquee-item masonry-item border border-purple-400 bg-[#9233ea0f] p-6 rounded-lg shadow-lg"
                >
                  <p className="text-gray-300 font-figtree">{item.content}</p>
                  <h3 className="mt-4 text-xl text-white font-DMsans">
                    {item.user}
                  </h3>
                  <span className="text-sm text-stone-300">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="masonry overflow-hidden">
            <div className="marquee-wrapper-left">
              {data.slice(data.length / 2 + 1, data.length).map((item) => (
                <div
                  key={item.id}
                  className="marquee-item masonry-item border border-purple-400 bg-[#9233ea0f] p-6 rounded-lg shadow-lg"
                >
                  <p className="text-gray-300 font-figtree">{item.content}</p>
                  <h3 className="mt-4 text-xl text-white font-DMsans">
                    {item.user}
                  </h3>
                  <span className="text-sm text-stone-300">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
