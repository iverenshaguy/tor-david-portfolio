import React from "react";

interface LoveSvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const LoveSvg: React.FC<LoveSvgProps> = ({
  width = 119,
  height = 91,
  color = "#5A4B8E",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 119 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.85751 4.04726C32.6639 -8.28291 59.1995 39.1112 59.1995 39.1112C59.1995 39.1112 91.0311 -7.7415 112.568 4.04737C134.104 15.8362 65.9295 93.2482 59.1995 88.817C32.1103 70.9808 -14.4178 15.1194 7.85751 4.04726Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LoveSvg;
