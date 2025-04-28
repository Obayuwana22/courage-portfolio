import { LuSun } from "react-icons/lu";
import { useTheme } from "./ThemeProvider";
import { IoIosMoon } from "react-icons/io";
import {motion, AnimatePresence } from "framer-motion";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="flex justify-center mt-2">
      <button
        onClick={toggleDarkMode}
        className="flex flex-col items-center cursor-pointer group"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isDarkMode ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <LuSun color="white" size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <IoIosMoon size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="italic text-[8px] lg:text-[10px] text-black dark:text-white ">
          mood swing
        </div>
      </button>
    </div>
  );
};
export default DarkModeToggle;
