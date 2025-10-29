import React from "react";

const LapList = ({ laps }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>Laps</h4>
      <ul>
        {laps.map((lap, i) => (
          <li key={i}>{lap}</li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
