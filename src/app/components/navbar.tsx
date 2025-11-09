"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavItems from "app/components/ui/nav-items";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-[fit-content] px-4 md:px-8 ${isScrolled ? "bg-white pt-0 shadow-sm dark:bg-[#1A1A1A]" : "bg-stone-100 pt-[22px] dark:bg-neutral-800"}`}
    >
      <div
        className={`z-50 mx-auto w-full max-w-7xl px-4 tracking-tight transition-[transform,opacity,width,height] duration-300 ease-in-out ${
          isScrolled ? "top-0 left-0 py-0" : ""
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between bg-transparent py-0 transition-[transform,opacity,width,height] duration-300 ease-in-out ${
            isScrolled
              ? "w-full py-3"
              : `${isMobileMenuOpen ? "rounded-t-[2rem] border-b-0" : "rounded-[2rem]"} border border-solid border-gray-200 px-4 dark:border-gray-600`
          }`}
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
          <div className="hidden flex-row gap-8 md:flex">
            <NavItems
              className={`flex space-x-8 ${isScrolled ? "text-md" : "text-sm"}`}
              buttonSize="small"
            />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#4a3d7a] dark:text-gray-400"
              aria-label="Toggle mobile menu"
            >
              <div className="flex h-6 w-6 flex-col items-center justify-center">
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-7 translate-y-1 rotate-45" : "w-5 -translate-y-1"}`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-8 opacity-0" : "w-5 opacity-100"}`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-7 -translate-y-1 -rotate-45" : "w-5 translate-y-1"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Items - Overlay that covers hero content */}
        <div
          className={`absolute top-[79px] z-40 px-4 transition-[transform,opacity,width,height] duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } ${isScrolled ? "right-0 left-0 bg-white dark:bg-[#1A1A1A]" : "right-4 left-4"}`}
        >
          <div
            className={`flex flex-col items-center gap-4 px-6 py-6 ${isScrolled ? "" : "rounded-br-[2rem] rounded-bl-[2rem] border-r border-b border-l border-solid border-gray-200 bg-stone-100 dark:border-gray-600 dark:bg-neutral-800"}`}
          >
            <NavItems className="flex flex-col gap-6" buttonSize="large" />
          </div>
        </div>
      </div>
    </header>
  );
}
