import Link from "next/link";
import React, { Fragment } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  // { label: "Blog", href: "#blog" },
  { label: "Connect", href: "#connect" },
];

export default function NavItems({
  className,
  buttonSize = "small",
}: {
  className: string;
  buttonSize?: "small" | "large";
}) {
  const buttonClasses = {
    small:
      "rounded-full bg-[#4a3d7a] px-4 py-2 text-sm text-white transition hover:bg-[#3a2d6a] dark:text-gray-300",
    large:
      "w-full rounded-full bg-[#4a3d7a] px-6 py-3 text-sm text-white text-center transition hover:bg-[#3a2d6a] dark:text-gray-300",
  };

  return (
    <Fragment>
      <nav
        className={`items-center font-medium text-gray-700 dark:text-gray-400 ${className}`}
      >
        {navItems.map(({ label, href }) => {
          return (
            <Link
              key={href}
              href={href}
              className="transition-all hover:text-[#4a3d7a]"
              rel="noopener noreferrer"
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <a
        href="mailto:shaguydavid@gmail.com?subject=Hello&body=Hi%20David"
        className={buttonClasses[buttonSize]}
        rel="noopener noreferrer"
        target="_blank"
      >
        Send an Email
      </a>
    </Fragment>
  );
}
