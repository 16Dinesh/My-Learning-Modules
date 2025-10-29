import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      const s = now.getSeconds().toString().padStart(2, "0");
      setTimeStr(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "0.5rem" }}>
      {timeStr}
    </div>
  );
};

export default DigitalClock;
