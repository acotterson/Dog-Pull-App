import React from "react";
import "./style.css";

const Pin = ({
  x,
  y,
  event,
  onMouseOver,
  onMouseOut,
  onMouseMove,
  onClick,
}) => (
  <g
    transform={`translate(${x}, ${y})`}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onMouseMove={onMouseMove}
    onClick={onClick}
    className="pin-group"
  >
    <circle cx="0" cy="0" r="5" className="pin" />
  </g>
);

export default Pin;
