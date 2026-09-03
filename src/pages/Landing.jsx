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
      alt: "Colorist portfolio image",
    },
    {
      to: "DP",
      img: img2,
      title: "DP",
      alt: "Director of Photography portfolio image",
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-[2000px] mt-6 md:mt-10">
        {items.map(({ to, img, title, alt }, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
            key={index}
            className="relative group transition duration-500 w-full md:w-1/2"
          >
            <Link to={to} className="block w-full relative overflow-hidden">
              <div className="w-full h-auto">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-auto aspect-[16/9] object-cover opacity-90 lg:hover:opacity-70 transition duration-700 block"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold text-2xl lg:text-3xl uppercase tracking-wider">
                  {title}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landing;

