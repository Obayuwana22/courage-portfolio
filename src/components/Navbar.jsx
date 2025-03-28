import { useState } from "react";
import { navLinks } from "../data";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

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
            className="w-4 h-[1px] bg-red-500 rounded transition-all"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-4 h-[1px] bg-red-500 rounded transition-all"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -1 : 0 }}
            className="w-4 h-[1px] bg-red-500 rounded transition-all"
          />
        </button>
      </div>

      <div
        className={`flex flex-col text-red-500 uppercase tracking-[0.4em] text-sm shadow-md transition-[max-height] duration-1000 ease-in-out overflow-hidden md:flex-row md:flex-wrap md:justify-center md:overflow-visible md:mb-16 xl:mb-10 ${
          isMenuActive ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <a
          href="/work"
          className={`flex justify-center my-5 md:my-2 md:hover:border-b-1 ${
            location.pathname === "/work"
              ? "md:border-b-1 md:border-red-500"
              : ""
          } `}
        >
          work
        </a>
        {navLinks.map((navLink) => (
          <ul key={navLink.id}>
            <li className="border-t-1 border-red-500 text-center py-5 md:border-t-0 md:py-2">
              <span className="hidden md:inline md:px-5">•</span>
              <a
                href={navLink.href}
                className={`${
                  location.pathname === navLink.href
                    ? "md:border-b-1 md:border-red-500"
                    : ""
                }`}
              >
                {navLink.text}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;

{
  /* <div>
        {navLinks.map((navLink) => (
          <ul
            key={navLink.id}
            className={`border-b-1 border-red-500 text-center transition-all duration-700 overflow-hidden ${
              isMenuActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <li className="my-5">
              <a
                href={navLink.href}
                className="uppercase text-red-500 tracking-[0.4em] text-sm"
              >
                {navLink.text}
              </a>
            </li>
          </ul>
        ))}
      </div> */
}
