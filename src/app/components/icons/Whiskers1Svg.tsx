import React from "react";

interface Whiskers1SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Whiskers1Svg: React.FC<Whiskers1SvgProps> = ({
  width = 126,
  height = 105,
  color = "black",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 126 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M63.8124 59.2485C63.8124 59.2485 37.0659 56.3772 17.1405 62.2661"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M83.5641 46.9853C83.5641 46.9853 76.061 17.9032 81.7812 8.26636"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M61.4406 78.1287C61.4406 78.1287 28.06 89.1628 22.4539 94.529"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Whiskers1Svg;
