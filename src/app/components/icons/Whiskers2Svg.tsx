import React from "react";

interface Whiskers2SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Whiskers2Svg: React.FC<Whiskers2SvgProps> = ({
  width = 175,
  height = 64,
  color = "black",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 175 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M79.8201 30.8228C79.8201 30.8228 109.694 24.5892 161.871 33.9971"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M66.0235 39.9644C66.0235 39.9644 89.0176 52.4978 90.1327 58.9207"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M71.1476 19.7212C71.1476 19.7212 95.594 17.3979 112.305 6.55981"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Whiskers2Svg;
