"use client";

import React from "react";

export function StackSlideItem({
  children,
  // isVisible,
  // zIndex,
  // onAnimationEndAction,
}: {
  children: React.ReactNode;
  isVisible: boolean;
  index: number;
  currentIndex: number;
  zIndex: number;
  onAnimationEndAction: () => void;
}) {
  return (
    // <div
    //   className={`absolute inset-0 flex transform items-center justify-center transition-all duration-700 ease-out ${
    //     isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
    //   }`}
    //   style={{ zIndex }}
    //   onTransitionEnd={() => {
    //     onAnimationEndAction();
    //   }}
    // >
    <div className="sticky top-0">{children}</div>
  );
}
