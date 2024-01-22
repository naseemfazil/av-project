

import React, { useState, useEffect } from 'react';
import '../styles/_circularProgressBar.scss';

const CircularProgressBar = ({ progress }) => {
  const [radius, setRadius] = useState(40);
  const [circumference, setCircumference] = useState(2 * Math.PI * radius);

  useEffect(() => {
    setCircumference(2 * Math.PI * radius);
  }, [radius]);

  const calculateProgressOffset = () => {
    const progressPercentage = Math.min(100, Math.max(0, progress));
    return circumference - (progressPercentage / 100) * circumference;
  };

  return (
    <svg className="progress-ring" width="100%" height="100%">
      <circle
        className="progress-ring__circle"
        stroke="blue" // Change color as needed
        strokeWidth="4" // Change stroke width as needed
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: calculateProgressOffset(),
        }}
      />
    </svg>
  );
};

export default CircularProgressBar;
