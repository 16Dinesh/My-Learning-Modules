import React, { useState, useEffect, useRef } from "react";
import LapList from "./LapList";

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0); // in ms
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const timerRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (running) {
      startRef.current = Date.now() - elapsed;
      timerRef.current = setInterval(() => {
        setElapsed(Date.now() - startRef.current);
      }, 50);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const format = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const msPart = ms % 1000;
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}.${Math.floor(
      msPart / 10
    )
      .toString()
      .padStart(2, "0")}`;
  };

  const startPause = () => setRunning((prev) => !prev);

  const reset = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setElapsed(0);
    setLaps([]);
  };

  const lap = () => {
    setLaps((prev) => [...prev, format(elapsed)]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{format(elapsed)}</h2>
      <div>
        <button onClick={startPause}>{running ? "Pause" : "Start"}</button>
        <button onClick={reset} style={{ marginLeft: "0.5rem" }}>
          Reset
        </button>
        <button onClick={lap} style={{ marginLeft: "0.5rem" }} disabled={!running}>
          Lap
        </button>
      </div>
      <LapList laps={laps} />
    </div>
  );
};

export default Stopwatch;
