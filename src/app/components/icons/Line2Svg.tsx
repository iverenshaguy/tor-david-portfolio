import React from "react";

interface Line2SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Line2Svg: React.FC<Line2SvgProps> = ({
  width = 264,
  height = 29,
  color = "#4F4F4F",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 264 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 2C2 2 213.699 2 219.796 2C225.892 2 98.4943 10.3333 91.1364 10.6957C83.7784 11.058 217.063 16.4022 223.369 16.4022C229.676 16.4022 120.568 23.0145 126.244 23.0145C131.92 23.0145 261.841 27 261.841 27"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Line2Svg;
