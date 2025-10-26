import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/MNBG17.webp";

const Landing = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-5xl">
        {/* Colorist */}
        <Link to="colorist" className="relative group overflow-hidden">
          <div className="text-center mb-5">
            <span className="text-[#ff4500] font-semibold uppercase text-lg">
              Colorist
            </span>
          </div>
          <img
            src={img}
            alt="Colorist POW image"
            className="w-full aspect-[16/9] object-cover transition duration-700 lg:group-hover:opacity-50"
            loading="lazy"
          />
        </Link>

        {/* DP */}
        <Link to="DP" className="relative group overflow-hidden">
          <div className="text-center mb-5">
            <span className="text-[#ff4500] font-semibold uppercase text-lg">
              DP
            </span>
          </div>
          <img
            src={img}
            alt="DP POW image"
            className="w-full aspect-[16/9] object-cover transition duration-700 group-hover:opacity-50"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};

export default Landing;

