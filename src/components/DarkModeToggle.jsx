import { useTheme } from "./ThemeProvider";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-center">
        <button
          onClick={toggleDarkMode}
          className={`w-5 h-5 rounded-full ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
        ></button>
        <div className="italic text-[10px] text-black dark:text-white">mood swings</div>
      </div>
    </div>
  );
};
export default DarkModeToggle;
