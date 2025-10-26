import React from "react";
import { Link, useLocation } from "react-router-dom";

const Landing = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === `/${path}`;
  };

  return (
    <div className="flex justify-center">
      <div className="flex gap-10 md:gap-52">
        <Link
          to="color-works"
          className="group relative px-2 py-3 text-sm md:px-6 md:text-lg font-medium text:black dark:text-white transition-all duration-300"
        >
          Color Work
          <span
            className={` absolute bottom-0 left-0 h-0.5 w-0 bg-[#ff4500] transition-all duration-300 group-hover:w-full ${
              isActive("color-works") ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
        <Link
          to="dop"
          className="group relative px-2 py-3 text-sm md:px-6 md:text-lg font-medium text:black dark:text-white transition-all duration-300"
        >
          DOP
          <span
            className={` absolute bottom-0 left-0 h-0.5 w-0 bg-[#ff4500] transition-all duration-300 group-hover:w-full ${
              isActive("dop") ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
