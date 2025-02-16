import React from "react";

function Testimonial() {
  return (
    <>
      <div>
        <div className="mx-auto bg-neutral-900 py-28">
          <h2 className="text-3xl text-white font-bold mb-20 text-center font-poppins">
            Testimonials
          </h2>
          <div className="mb-10 masonry overflow-hidden">
            <div className="marquee-wrapper">
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree ">
                  "Found the perfect course in minutes!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Amit S.
                </h3>
                <span className="text-sm text-stone-300">Student</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg ">
                <p className="text-gray-300 font-figtree">
                  "No more endless searching for quality courses!"
                </p>
                <h3 className="mt-4 text-xl text-white font-DMsans">
                  Sarah L.
                </h3>
                <span className="text-sm text-stone-300">Freelancer</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Filters out the noise, love it!"
                </p>
                <h3 className="mt-4 text-xl text-white font-DMsans">Jason</h3>
                <span className="text-sm text-stone-300">Software Engineer</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "The service was excellent. Highly recommend!"
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">
                  John Doe
                </h3>
                <span className="text-sm text-stone-300">Tutor</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Saves me time and money!"
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">
                  Daniel{" "}
                </h3>
                <span className="text-sm text-stone-300">Freelancer</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "I would definitely use their services again."
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">
                   Sachin
                </h3>
                <span className="text-sm text-stone-300">Graphic Designer</span>
              </div>
            </div>
          </div>
          <div className="masonry overflow-hidden">
            <div className="marquee-wrapper-left">
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Learnt React faster, thanks to DotLib!"
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">
                  Rahul C.{" "}
                </h3>
                <span className="text-sm text-stone-300">Full Stack Developer</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Great for finding niche tech courses!"
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">Meera</h3>
                <span className="text-sm text-stone-300">AI/ML Researcher</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Saves hours of searching for good courses!"
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">Arjun</h3>
                <span className="text-sm text-stone-300">Freelancer</span>
              </div>
              {/* <!-- Add more testimonials as needed --> */}
              {/* <!-- Duplicate the testimonials to create the seamless scrolling effect --> */}
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "No more searching, just learning!"
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">
                  Karthik
                </h3>
                <span className="text-sm text-stone-300">Tutor</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Easiest way to discover top design courses!"{" "}
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">Neha </h3>
                <span className="text-sm text-stone-300">UI/UX Designer</span>
              </div>
              <div className="marquee-item masonry-item bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 font-figtree">
                  "Found the perfect coding course instantly!"{" "}
                </p>
                <h3 className="mt-4 text-xl font-DMsans text-white">
                  Vikram P.{" "}
                </h3>
                <span className="text-sm text-stone-300">Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Testimonial;
