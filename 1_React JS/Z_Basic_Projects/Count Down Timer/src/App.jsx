import React from "react";
import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";
import CountdownTimer from "./components/CountdownTimer";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Clock / Timer / Stopwatch</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <AnalogClock />
      </div>
      <DigitalClock />

      <hr style={{ margin: "2rem 0" }} />

      <CountdownTimer />

      <hr style={{ margin: "2rem 0" }} />

      <Stopwatch />
    </div>
  );
}

export default App;
