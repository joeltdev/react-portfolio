import React from "react";
import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md w-full lg:w-[400px] bg-white overflow-hidden">
      <img src={item.image} alt="" className="rounded-t-lg w-full h-48 object-cover" />
      <div className="p-4">
        <h1 className="text-xl mb-2 font-medium font-sans text-gray-800">{item.title}</h1>
        <p className="text-gray-600">{item.desc}</p>
        <div className="flex gap-2 mt-3">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition">
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center">
              <img src={Github} alt="Github" className="w-5" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
