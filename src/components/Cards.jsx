import React from "react";
 

const Cards = ({ item }) => {
  return (
    <div className="group relative w-full max-w-sm rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h1 className="text-lg mb-2 font-semibold font-sans text-gray-900 min-h-[32px] overflow-hidden">
          {item.title}
        </h1>
        <p className="text-gray-600 max-h-20 overflow-hidden leading-relaxed">
          {item.desc}
        </p>
        <div className="mt-4">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
