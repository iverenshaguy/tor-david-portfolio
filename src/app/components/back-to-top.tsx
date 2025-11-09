"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      // Show button after scrolling past the background section
      const backgroundSection = document.querySelector('[data-section="hero"]');

      if (backgroundSection) {
        const rect = backgroundSection.getBoundingClientRect();
        // Show button when background section is completely out of view
        setIsVisible(rect.bottom < 0);
      } else {
        // Fallback: show button after scrolling down a bit
        setIsVisible(lenis.scroll > 300);
      }
    };

    // Initial check
    handleScroll();

    lenis.on("scroll", handleScroll);

    // Cleanup function to prevent jankiness
    return () => {
      lenis.off("scroll", handleScroll);
      // Reset state to prevent flickering during navigation
      setIsVisible(false);
    };
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      // Fallback to native smooth scroll if Lenis isn't available
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 left-1/2 z-[9999] flex h-[50px] w-[50px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100 sm:bottom-4 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      aria-label="Back to top"
    >
      <Image
        src="/arrow-up.svg"
        alt="Back to top"
        width={50}
        height={50}
        className="h-full w-full object-cover"
      />
    </button>
  );
}
