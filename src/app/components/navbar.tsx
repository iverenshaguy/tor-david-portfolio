"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  // { label: "Blog", href: "#blog" },
  { label: "Connect", href: "#connect" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pt-[22px]">
      <div
        className={`z-50 w-full tracking-tight transition-all duration-300 ease-in-out ${isScrolled ? "fixed top-0 left-0 px-0 py-0" : "mx-auto max-w-7xl px-4"}`}
      >
        <div
          className={`mx-auto flex items-center justify-between bg-transparent px-6 py-0 ${isScrolled ? "w-full bg-white py-3 shadow-sm dark:bg-neutral-800" : "rounded-full border border-solid border-gray-200 dark:border-gray-600"}`}
        >
          <div className="flex items-center">
            <Link href="/" className="block">
              <Image
                className="h-14 w-14 rounded-full"
                alt="Profile avatar"
                src="/logo.png"
                width={256}
                height={256}
              />
            </Link>
          </div>
          <div className="flex flex-row">
            <nav
              className={`hidden items-center space-x-8 font-medium text-gray-700 md:flex dark:text-gray-400 ${isScrolled ? "text-md" : "text-sm"}`}
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
              className="ml-4 rounded-full bg-[#4a3d7a] px-4 py-2 text-sm text-white transition hover:bg-[#3a2d6a] dark:text-gray-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
