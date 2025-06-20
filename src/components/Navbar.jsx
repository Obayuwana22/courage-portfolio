import { useState } from "react";
import { navLinks } from "../data";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  return (
    <nav className="mt-5 mb-5">
      <div className="flex justify-center md:hidden">
        <button
          onClick={handleClick}
          className="relative w-10 h-10 flex flex-col justify-center items-center gap-0.5"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
            className="w-4 h-[1px] bg-[#ff4500] rounded transition-all"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-4 h-[1px] bg-[#ff4500] rounded transition-all"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -1 : 0 }}
            className="w-4 h-[1px] bg-[#ff4500] rounded transition-all"
          />
        </button>
      </div>

      <div
        className={`flex flex-col text-[#ff4500] uppercase tracking-[0.4em] text-sm shadow-md transition-[max-height] duration-1000 ease-in-out overflow-hidden md:shadow-none md:flex-row md:flex-wrap md:justify-center md:overflow-visible 
            md:mb-16  ${isMenuActive ? "max-h-[500px]" : "max-h-0"}`}
      >
        <Link
          to="/work"
          className={`flex justify-center my-5 md:my-2 md:hover:border-b-1 ${
            location.pathname === "/work"
              ? "md:border-b-1 md:border-[#ff4500]"
              : ""
          } `}
          onClick={handleClick}
        >
          work
        </Link>
        {navLinks.map((navLink) => (
          <ul key={navLink.id}>
            <li className="border-t-1 border-[#ff4500] text-center py-5 md:border-t-0 md:py-2">
              <span className="hidden md:inline md:px-5">•</span>
              <Link
                to={navLink.path}
                className={`${
                  location.pathname === navLink.path
                    ? "md:border-b-1 md:border-[#ff4500]"
                    : ""
                }`}
                onClick={handleClick}
              >
                {navLink.text}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;

