import React from "react";
import Image from "next/image";

export default function ProjectMockup({
  id,
  hasMobile = false,
  className = "px-2 py-8 md:gap-4 md:py-10 lg:gap-6 lg:p-6 xl:gap-8 xl:p-8",
  laptopMockupClassName = "h-full min-w-0",
  mobileMockupClassName = "h-full w-auto",
}: {
  id: string;
  hasMobile?: boolean;
  className?: string;
  laptopMockupClassName?: string;
  mobileMockupClassName?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center gap-2 ${className}`}
    >
      {/* Laptop Mockup - Main Content */}
      <div className={`relative aspect-[320.4/184.5] ${laptopMockupClassName}`}>
        <Image
          alt={`${id} laptop mockup`}
          src={`/projects/${id}/${id}-macbook-pro.png`}
          fill
          className="object-contain"
          sizes="(min-width: 1280px) 70%, (min-width: 1024px) 65%, (min-width: 768px) 60%, 55%"
          priority
        />
      </div>

      {/* Mobile Mockup - Conditional */}
      {hasMobile && (
        <div className={`relative aspect-[149.3/300] ${mobileMockupClassName}`}>
          <Image
            alt={`${id} mobile mockup`}
            src={`/projects/${id}/${id}-iphone.png`}
            fill
            className="object-contain"
            sizes="(min-width: 1280px) 15%, (min-width: 1024px) 12%, (min-width: 768px) 10%, 8%"
            priority
          />
        </div>
      )}
    </div>
  );
}
