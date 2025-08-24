import React from "react";

interface VercelSvgProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const VercelSvg: React.FC<VercelSvgProps> = ({
  width = 1155,
  height = 1000,
  color = "#fff",
  className = "",
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1155 1000"
      width={width}
      height={height}
      className={className}
    >
      <path d="m577.3 0 577.4 1000H0z" fill={color} />
    </svg>
  );
};

export default VercelSvg;
