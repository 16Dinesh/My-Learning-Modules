import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [inputTime, setInputTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Convert input time to seconds
  const convertToSeconds = ({ hours, minutes, seconds }) =>
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

  // Start the timer
  const handleStart = () => {
    const totalSeconds = convertToSeconds(inputTime);
    if (totalSeconds > 0 && !isRunning) {
      setTime(totalSeconds);
      setIsRunning(true);
    }
  };

  // Reset
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  // Countdown logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Format time for display
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputTime((prev) => ({
      ...prev,
      [name]: value.replace(/\D/, ""), // numbers only
    }));
  };

  return (
    <div className="timer-container">
      <h2>Countdown Timer</h2>

      {!isRunning && (
        <div className="time-inputs">
          <input
            type="number"
            name="hours"
            placeholder="HH"
            value={inputTime.hours}
            onChange={handleChange}
            min="0"
          />
          <span>:</span>
          <input
            type="number"
            name="minutes"
            placeholder="MM"
            value={inputTime.minutes}
            onChange={handleChange}
            min="0"
            max="59"
          />
          <span>:</span>
          <input
            type="number"
            name="seconds"
            placeholder="SS"
            value={inputTime.seconds}
            onChange={handleChange}
            min="0"
            max="59"
          />
        </div>
      )}

      <div className="timer-display">{formatTime(time)}</div>

      <div className="buttons">
        {!isRunning && <button onClick={handleStart}>Start</button>}
        {isRunning && <button onClick={() => setIsRunning(false)}>Pause</button>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
