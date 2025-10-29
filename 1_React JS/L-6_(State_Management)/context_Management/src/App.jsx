import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <br/>
      <button
        className={`toggle-btn ${darkMode ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
