import React from "react";

interface Blob1SvgProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Blob1Svg: React.FC<Blob1SvgProps> = ({
  width = 482,
  height = 501,
  color = "#5A4B8E",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 482 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190.493 0C354.898 0 481.799 139.589 481.799 304.077C481.799 441.361 327.707 500.63 190.493 500.63C83.6278 500.63 0 410.996 0 304.077C0 163.93 50.4163 0 190.493 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Blob1Svg;
