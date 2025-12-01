import React, { useEffect, useState } from "react";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={{ transform: `rotate(${hourAngle}deg)` }} />
      <div className="hand minute-hand" style={{ transform: `rotate(${minuteAngle}deg)` }} />
      <div className="hand second-hand" style={{ transform: `rotate(${secondAngle}deg)` }} />
      <div className="center-dot" />
    </div>
  );
};

export default AnalogClock;
