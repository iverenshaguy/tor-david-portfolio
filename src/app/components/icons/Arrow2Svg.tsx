import React from "react";

interface Arrow2SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Arrow2Svg: React.FC<Arrow2SvgProps> = ({
  width = 151,
  height = 101,
  color = "#5A4B8E",
  strokeWidth = 4,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 151 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M142.88 35.8053C130.912 31.3149 116.267 29.0374 104.546 35.5483C101.577 37.1974 99.0263 39.7012 97.1313 42.6483M97.1313 42.6483C94.2451 47.137 92.88 52.6539 93.8756 57.7456C95.4332 65.7115 100.36 73.1202 108.93 73.8985C113.397 74.3042 117.475 72.6968 118.826 68.0986C120.89 61.0735 114.594 52.8329 109.268 49.0606C105.585 46.4523 101.483 44.3067 97.1313 42.6483ZM5.01429 39.001C16.778 34.0005 31.3114 31.0957 43.3019 37.0969C46.3389 38.6169 48.9949 41.0088 51.0148 43.8717M51.0148 43.8717C54.0912 48.2322 55.6921 53.6854 54.9162 58.8151C53.7024 66.8406 49.099 74.4542 40.5697 75.6001C36.124 76.1973 31.9815 74.7666 30.4339 70.2307C28.0697 63.3009 34.0062 54.7974 39.1653 50.7996C42.7323 48.0355 46.7379 45.7156 51.0148 43.8717ZM51.0148 43.8717C66.0429 37.3928 82.8145 35.9331 97.2835 42.5946"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11.8906 26.2644C9.56583 29.042 4.43929 35.5987 2.5315 39.6045"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2.53516 39.6038C5.87248 41.0116 13.4291 44.5 16.9569 47.1908"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Arrow2Svg;
