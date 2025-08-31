import React from "react";

interface Blob3SvgProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Blob3Svg: React.FC<Blob3SvgProps> = ({
  width = 410,
  height = 343,
  color = "#5A4B8E",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 410 343"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M243.477 1.45672C299.081 -5.58131 360.612 12.7818 392.667 58.7569C423.227 102.589 407.124 160.599 389.64 211.092C374.958 253.496 345.281 285.955 306.301 308.185C262.562 333.128 214.894 350.626 165.993 338.63C99.167 322.238 9.05388 301.458 0.540547 233.18C-7.9444 165.13 85.5369 138.684 135.16 91.3512C170.881 57.2792 194.504 7.65566 243.477 1.45672Z"
        fill={color}
      />
    </svg>
  );
};

export default Blob3Svg;
