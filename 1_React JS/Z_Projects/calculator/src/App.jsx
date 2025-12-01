import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";

function App() {
  const [display, setDisplay] = useState("");

  const MAX_DIGITS = 12;
  const isOperator = (char) => "+-×÷".includes(char);
  const lastChar = display.slice(-1);

  const handleNumberClick = (numStr) => {
    const lastNumber = display.split(/[\+\-\×\÷()]/).pop();

    if (lastNumber.replace(".", "").length >= MAX_DIGITS) return;
    if (numStr === "." && lastNumber.includes(".")) return;

    setDisplay((prev) => prev + numStr);
  };

  const handleOperatorClick = (op) => {
    if (display === "") return;
    if (isOperator(lastChar)) {
      setDisplay((prev) => prev.slice(0, -1) + op);
    } else {
      setDisplay((prev) => prev + op);
    }
  };

  const handleClear = () => setDisplay("");
  const handleDelete = () => setDisplay((prev) => prev.slice(0, -1));

  const handleEquals = () => {
    if (!display || isOperator(lastChar)) return;

    const expr = display
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/[^0-9+\-*/().]/g, "");

    try {
      const result = Function(`"use strict"; return (${expr})`)();
      if (isNaN(result) || !isFinite(result)) {
        setDisplay("Error");
      } else {
        setDisplay(String(result));
      }
    } catch {
      setDisplay("Error");
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (!isNaN(key)) {
      handleNumberClick(key);
    } else if (key === ".") {
      handleNumberClick(".");
    } else if (["+", "-", "*", "/"].includes(key)) {
      const symbol = key === "*" ? "×" : key === "/" ? "÷" : key;
      handleOperatorClick(symbol);
    } else if (key === "Enter" || key === "=") {
      e.preventDefault();
      handleEquals();
    } else if (key === "Backspace") {
      handleDelete();
    } else if (key === "Escape") {
      handleClear();
    } else if (key === "Delete") {
      handleClear();
    } else if (key === "(" || key === ")") {
      setDisplay((prev) => prev + key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [display]);

  return (
    <div className="calculator-container">
      <Display value={display || "0"} />
      <ButtonGrid
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onClear={handleClear}
        onDelete={handleDelete}
        onEquals={handleEquals}
      />
    </div>
  );
}

export default App;
