import React from "react";
import { useState, useEffect } from "react";
import fullStar from "../../assets/fullStar.svg";

function Hero() {
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <div>
      <div className="py-24 bg-gray-900" id="home">
        <section className="relative">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl max-md:text-4xl text-white font-extrabold mx-auto md:text-5xl">
                No more jumping <br />
                between platforms
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                find everything you need right here for focused, <br />
                hassle-free learning.
              </p>

              <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                <span className=" flex gap-0.5 text-sm">
                  <img src={fullStar} alt="" className="size-3" />
                  <img src={fullStar} alt="" className="size-3" />
                  <img src={fullStar} alt="" className="size-3" />
                  <img src={fullStar} alt="" className="size-3" />
                  <svg
                    className="size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                </span>
                <p>
                  <span className="text-gray-100">4.0</span> by over 200 users
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
