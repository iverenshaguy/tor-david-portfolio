"use client";

import { useEffect, useState } from "react";
import Loader from "app/components/ui/loader";

const SCROLL_PROGRESS_KEY = "portfolio-scroll-progress";
const NAVIGATION_FLAG_KEY = "portfolio-navigation-flag";
const RESTORATION_COMPLETE_EVENT = "scroll-restoration-complete";

export function ScrollRestorationLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRestoring, setIsRestoring] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if we need to restore scroll
    const hasNavigationFlag = sessionStorage.getItem(NAVIGATION_FLAG_KEY);
    const savedProgress = sessionStorage.getItem(SCROLL_PROGRESS_KEY);
    const shouldRestore =
      savedProgress !== null && hasNavigationFlag === "true";

    if (shouldRestore) {
      // Show loader during restoration
      setIsRestoring(true);
      setShowContent(false);

      // Listen for restoration complete event from projects section
      const handleRestorationComplete = () => {
        setIsRestoring(false);
        // Small delay before showing content to ensure smooth transition
        setTimeout(() => {
          setShowContent(true);
        }, 100);
      };

      window.addEventListener(
        RESTORATION_COMPLETE_EVENT,
        handleRestorationComplete,
      );

      // Fallback timeout in case event doesn't fire
      const fallbackTimeout = setTimeout(() => {
        setIsRestoring(false);
        setShowContent(true);
      }, 300);

      return () => {
        window.removeEventListener(
          RESTORATION_COMPLETE_EVENT,
          handleRestorationComplete,
        );
        clearTimeout(fallbackTimeout);
      };
    } else {
      // No restoration needed, show content immediately
      setShowContent(true);
    }
  }, []);

  if (isRestoring || !showContent) {
    return (
      <body>
        <main>
          <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-white dark:bg-[#1A1A1A]">
            <div className="mb-8 text-2xl font-semibold tracking-tighter">
              <Loader />
            </div>
          </div>
        </main>
      </body>
    );
  }

  return <>{children}</>;
}

// Export function to signal restoration complete
export const signalRestorationComplete = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(RESTORATION_COMPLETE_EVENT));
  }
};
