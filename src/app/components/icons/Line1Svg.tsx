import React from "react";

interface Line1SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Line1Svg: React.FC<Line1SvgProps> = ({
  width = 501,
  height = 45,
  color = "#5A4B8E",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 501 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 2C79.2556 26.4015 286.813 65.4606 499 26.4848"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Line1Svg;
