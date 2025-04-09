import { LuSun } from "react-icons/lu";
import { useTheme } from "./ThemeProvider";
import { IoIosMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <LuSun color="white" size={20}/> : <IoIosMoon size={20} />}
        </button>
        <div className="italic text-[8px] lg:text-[10px] text-black dark:text-white">
          mood swing
        </div>
      </div>
    </div>
  );
};
export default DarkModeToggle;
