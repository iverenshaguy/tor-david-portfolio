"use client";

import Link from "next/link";
import React from "react";

export function PortfolioNavbar() {
  return (
    <header className="relative h-[fit-content] pt-[22px] pb-7">
      <div className="z-50 mx-auto flex h-[56px] w-full max-w-7xl items-center justify-between rounded-[2rem] border border-solid border-gray-200 px-4 py-0 tracking-tight transition-all duration-300 ease-in-out sm:mx-auto dark:border-gray-600">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Go back to home page"
          >
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20.5"
                cy="20.5"
                r="20"
                stroke="currentColor"
                className="text-gray-300 dark:text-gray-600"
              />
              <line
                x1="11.3536"
                y1="9.64645"
                x2="31.3536"
                y2="29.6464"
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-400"
              />
              <line
                x1="10.6464"
                y1="29.6464"
                x2="30.6464"
                y2="9.64645"
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-400"
              />
            </svg>
          </Link>
        </div>
        <div>
          <a
            href="mailto:shaguydavid@gmail.com?subject=Hello&body=Hi%20David"
            className="rounded-full bg-[#4a3d7a] px-4 py-2 text-sm text-white transition hover:bg-[#3a2d6a] dark:text-gray-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Send an Email
          </a>
        </div>
      </div>
    </header>
  );
}
