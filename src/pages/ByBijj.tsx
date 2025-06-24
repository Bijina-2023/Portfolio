import React from "react";
import by1 from "../assets/images/bybijj1.png";
import by2 from "../assets/images/bybijj2.png";
import by3 from "../assets/images/bybijj3.png";

const images = [
  { src: by1, alt: "Creative postcard design" },
  { src: by2, alt: "Children's flashcards" },
  { src: by3, alt: "Quirky t-shirt artwork" },
];

const ByBijj: React.FC = () => (
  <div className="w-full bg-white text-gray-900 py-16 px-6">
    <h2 className="text-4xl font-bold mb-8 text-center">By Bijj</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((img, idx) => (
        <div key={idx} className="relative overflow-hidden group rounded-lg">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-slate-200 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
);
export { ByBijj };
