import React from "react";

interface BlobsSvgProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const BlobsSvg: React.FC<BlobsSvgProps> = ({
  width = 203,
  height = 162,
  color = "#5A4B8E",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 203 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.951 12.8001C139.66 7.35492 156.409 16.4904 161.857 32.2081C166.404 45.3262 153.643 56.0933 140.532 60.6379C130.32 64.1774 119.361 58.3822 115.819 48.1656C111.178 34.7738 110.566 17.4396 123.951 12.8001Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M126.163 105.883C137.007 105.883 143.137 117.023 143.137 127.875C143.137 137.543 135.823 145.883 126.163 145.883C114.104 145.883 101.066 139.944 101.066 127.875C101.066 114.838 113.136 105.883 126.163 105.883Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.2696 34.2323C64.4181 30.6762 77.0288 48.6875 80.5802 66.8122C83.2347 80.3592 71.5524 91.3771 57.9876 94.0351C39.7272 97.6131 15.9898 98.405 12.4165 80.1686C8.13448 58.3156 24.3878 38.5199 46.2696 34.2323Z"
        fill={color}
      />
    </svg>
  );
};

export default BlobsSvg;
