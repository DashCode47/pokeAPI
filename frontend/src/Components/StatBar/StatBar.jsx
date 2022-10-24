import React from "react";
import "./StatBar.css";
const StatBar = ({ stats, title }) => {
  return (
    <>
      <div className="headStats">
        <div>{title}</div>
        <div className="numero">{stats}</div>
      </div>
      <div className="statbar">
        <div
          style={{
            width: stats * 1.5,
          }}
        />
        <div
          style={{
            width: 150 - stats * 1.5,
          }}
        />
      </div>
    </>
  );
};

export default StatBar;
