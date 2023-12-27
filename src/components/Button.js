import React from "react";

export default function Button({ children, color = "#6366f1" }) {
  return (
    <span style={{ backgroundColor: color }} className="embedded-button">
      {children}
    </span>
  );
}
