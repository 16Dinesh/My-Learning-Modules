import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const themeStyles = {
    backgroundColor: darkMode ? "#121212" : "#f2f2f2",
    color: darkMode ? "#ffffff" : "#000000",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    padding: "2rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "sans-serif",
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
