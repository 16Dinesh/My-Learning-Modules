import React, { useState, useEffect, useRef } from "react";

function CountdownTimer() {
  const [input, setInput] = useState({ minutes: 0, seconds: 0 });
  const [remaining, setRemaining] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
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

  const start = () => {
    const total = parseInt(input.minutes) * 60 + parseInt(input.seconds);
    if (total > 0) {
      setRemaining(total);
      setIsRunning(true);
    }
  };

  const pause = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setRemaining(0);
  };

  const format = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      {!isRunning && (
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            name="minutes"
            value={input.minutes}
            onChange={handleChange}
            placeholder="MM"
            style={{ width: "50px", textAlign: "center" }}
          />
          :
          <input
            type="text"
            name="seconds"
            value={input.seconds}
            onChange={handleChange}
            placeholder="SS"
            style={{ width: "50px", textAlign: "center" }}
          />
        </div>
      )}
      <h2>{format(remaining)}</h2>
      <div>
        {!isRunning && <button onClick={start}>Start</button>}
        {isRunning && <button onClick={pause}>Pause</button>}
        <button onClick={reset} style={{ marginLeft: "0.5rem" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
