import React from "react";
import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="border border-blue-400 rounded-xl w-[350px] lg:w-[400px] bg-gray-200">
      <img src={item.image} alt="" className="rounded-lg" />
      <div className="p-4 ">
        <h1 className=" text-xl mb-2 font-normal font-sans">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
            <a href={item.live} target="_blank">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a href={item.github} target="_blank" className="flex gap-1">
              <img src={Github} alt="" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
