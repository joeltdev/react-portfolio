import React from "react";
 

const Cards = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md w-full lg:w-[400px] bg-white overflow-hidden">
      <img
        src={item.image}
        alt=""
        className="rounded-t-lg w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h1 className="text-xl mb-2 font-medium font-sans text-gray-800 min-h-[48px] overflow-hidden">
          {item.title}
        </h1>
        <p className="text-gray-600 h-20 overflow-hidden">{item.desc}</p>
        <div className="flex gap-2 mt-3">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition">
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
