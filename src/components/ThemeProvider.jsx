import { createContext, useContext, useEffect, useState } from "react";

// Create a Context for the Theme
const ThemeContext = createContext();

// Custom hook to access the theme
export const useTheme = () => useContext(ThemeContext);

// Theme Provider to wrap the app and manage theme
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the saved theme or system preference on page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else if (prefersDark) {
      setIsDarkMode(true);
    }
  }, []);

  // Function to toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply the dark class to the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
