import React from "react";
import "./style.css";

const Pin = ({ x, y, event }) => (
  <g transform={`translate(${x}, ${y})`} className="pin-group">
    <circle cx="0" cy="0" r="2" className="pin" />
    <title>
      {event.name}: {event.date}
    </title>{" "}
    {/* Tooltip */}
  </g>
);

export default Pin;
