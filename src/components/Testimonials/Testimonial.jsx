import React from "react";

function Testimonial() {
  return (
    <>
      <div>
        {/* <div classNameName="w-full bg-violet-50 flex justify-center items-center text-white mt-24"> */}
        {/* <div>
            <div classNameNameName=" text-center w-full text-2xl pt-10">
              <h1 classNameNameName=" font-poppins text-black text-3xl font-normal">
                Testimonials
              </h1>
            </div>
            <div classNameNameName="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 py-24">
              <div classNameNameName=" bg-white w-96 rounded-xl pl-10">
                <div classNameNameName=" flex justify-start align-middle gap-4 text-black pt-8">
                  <img
                    src={
                      "https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg"
                    }
                    alt=""
                    classNameNameName=" h-16 w-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 classNameNameName=" text-xl font-roboto pt-4 ">Elon musk</h3>
                    <h4>⭐⭐⭐⭐</h4>
                  </div>
                </div>
                <div classNameNameName=" mt-2">
                  <p classNameNameName=" text-black text-balance font-figtree">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit unde obcaecati magnam cum deleniti?
                  </p>
                </div>
              </div>
              <div classNameNameName=" bg-white w-96 h-52 rounded-xl pl-10">
                <div classNameNameName=" flex justify-start align-middle gap-4 text-black pt-8">
                  <img
                    src={
                      "https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg"
                    }
                    alt=""
                    classNameNameName=" h-16 w-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 classNameNameName=" text-xl font-roboto pt-4 ">Elon musk</h3>
                    <h4>⭐⭐⭐⭐</h4>
                  </div>
                </div>
                <div classNameNameName=" mt-2">
                  <p classNameNameName=" text-black text-balance font-figtree">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit unde obcaecati magnam cum deleniti?
                  </p>
                </div>
              </div>
              <div classNameNameName=" bg-white w-96 h-52 rounded-xl pl-10">
                <div classNameNameName=" flex justify-start align-middle gap-4 text-black pt-8">
                  <img
                    src={
                      "https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg"
                    }
                    alt=""
                    classNameNameName=" h-16 w-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 classNameNameName=" text-xl font-roboto pt-4 ">Elon musk</h3>
                    <h4>⭐⭐⭐⭐</h4>
                  </div>
                </div>
                <div classNameNameName=" mt-2">
                  <p classNameNameName=" text-black text-balance font-figtree">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit unde obcaecati magnam cum deleniti?
                  </p>
                </div>
              </div>
            </div>
          </div> */}

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
              {/* <!-- Add more testimonials as needed --> */}
              {/* <!-- Duplicate the testimonials to create the seamless scrolling effect --> */}
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
