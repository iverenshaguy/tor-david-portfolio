import React from "react";

interface Blob2SvgProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Blob2Svg: React.FC<Blob2SvgProps> = ({
  width = 224,
  height = 150,
  color = "#5A4B8E",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 224 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.17 0C173.857 0 223.539 38.6917 223.539 93.3986C223.539 139.682 165.436 149.48 119.17 149.48C67.7386 149.48 0 144.848 0 93.3986C0 34.2566 60.0488 0 119.17 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Blob2Svg;
