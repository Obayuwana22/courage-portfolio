import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/MNBG17.webp";
import img2 from "../assets/idia14.webp";
import { motion } from "framer-motion";

const Landing = () => {
  const items = [
    {
      to: "colorist",
      img: img1,
      title: "Colorist",
      // subTitle: "Colorist portfolio",
      alt: "Colorist portfolio image",
    },
    {
      to: "DP",
      img: img2,
      title: "DP",
      // subTitle: " Director of Photography portfolio",
      alt: "Director of Photography portfolio image",
    },
    // {
    //   to: "photo-op",
    //   img: img2,
    //   title: "Photo Opportunity",
    //   subTitle: " Director of Photography portfolio",
    //   alt: "Director of Photography portfolio image",
    // },
  ];
  return (
    <div className="xl:flex xl:justify-center">
      <div className="flex flex-col md:flex-row max-w-[2000px] mt-10">
        {/* className=" grid grid-cols-2 lg:grid-cols-3 mt-20" */}
        {items.map(({ to, img, title, subTitle, alt }, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
            key={index}
            className="relative group transition duration-500"
          >
            <Link to={to}>
              <div className="h-full">
                <img
                  src={img}
                  alt={alt}
                  className="my-5 lg:my-0 opacity-90 lg:hover:opacity-70 transition duration-700
        aspect-[16/9] object-cover h-full
                  "
                  loading="lazy"
                />
              </div>
              <div className="text-center uppercase text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 ">
                <span className="text-[#ff4500] font-medium lg:text-xl">
                  {title}
                </span>
                <h3 className=" lg:text-[#ff4500] dark:text-white">
                  {subTitle}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
