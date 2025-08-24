import React from "react";

interface Arrow1SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Arrow1Svg: React.FC<Arrow1SvgProps> = ({
  width = 138,
  height = 85,
  color = "#5A4B8E",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 138 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 42.8246C16.6389 31.6138 35.9 22.3362 54.8068 26.4141C66.8895 29.0202 77.5765 40.2514 78.8327 52.585C80.0191 64.2332 76.3221 76.5231 64.8176 81.1871C58.821 83.6181 52.5198 83.107 48.7289 77.3258C42.9371 68.4935 48.1768 54.4814 53.9488 47.0434C71.9618 23.8308 105.71 10.0508 134.75 15.3308"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M117.176 2C121.599 4.65385 131.507 11.0231 135.753 15.2692"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M135.781 15.2688C131.358 17.9226 121.45 24.2919 117.204 28.538"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Arrow1Svg;
