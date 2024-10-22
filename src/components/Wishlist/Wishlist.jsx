import React, { useState } from "react";
import Card from "../Card/Card";
function Wishlist() {
  const [data, setData] = useState([
    {
      title: "Dummy title",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perferendis. Iusto assumenda at tempore incidunt, a numquam et voluptatibus?",
      image:
        "https://th.bing.com/th/id/OIP.zmDZPFvLFIiT3PfNxgkS7gHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Dummy title",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perferendis. Iusto assumenda at tempore incidunt, a numquam et voluptatibus?",
      image:
        "https://th.bing.com/th/id/OIP.zmDZPFvLFIiT3PfNxgkS7gHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Dummy title",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloribus perferendis. Iusto assumenda at tempore incidunt, a numquam et voluptatibus?",
      image:
        "https://th.bing.com/th/id/OIP.zmDZPFvLFIiT3PfNxgkS7gHaEK?rs=1&pid=ImgDetMain",
    },
  ]);
  return (
    <div>
      <div>
        <h1 className=" text-3xl font-semibold font-poppins tracking tracking-wide mt-10 ml-24">
          Wishlist
        </h1>
      </div>
      <div className=" ">
        <div className=" grid grid-cols-3 place-items-center  max-lg:grid-cols-2 max-md:grid-cols-1 gap-1">
          {data.map((course) => {
            return (
              <div key={Math.random()}>
                <Card course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
