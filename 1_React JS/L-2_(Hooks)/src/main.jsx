import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyContext from "./context/index.jsx";



createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={"light"}>
    <App />
  </MyContext.Provider>
);
