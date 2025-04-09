import { useTheme } from "./ThemeProvider";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="flex justify-center mt-2">
      <div className="flex flex-col items-center">
        <button
          onClick={toggleDarkMode}
          className={`w-5 h-5 rounded-full ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
        ></button>
        <div className="italic text-black dark:text-white">mood swings</div>
      </div>
    </div>
  );
};
export default DarkModeToggle;
