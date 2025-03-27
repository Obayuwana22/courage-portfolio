import { useState } from "react";
import { navLinks } from "../data";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
    setIsOpen(!isOpen);
  };
  return (
    <nav className="mt-5">
      <div className="mb-3 flex justify-center">
        <button
          onClick={handleClick}
          className="relative w-10 h-10 flex flex-col justify-center items-center gap-1"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-red-500 rounded transition-all"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-red-500 rounded transition-all"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-red-500 rounded transition-all"
          />
        </button>
      </div>

      <div>
        {navLinks.map((navLink) => (
          <ul
            key={navLink.id}
            className={`border-b-1 border-red-500 text-center mx-5 shadow-md transition-all duration-700 overflow-hidden ${
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
      </div>
    </nav>
  );
};
export default Navbar;
