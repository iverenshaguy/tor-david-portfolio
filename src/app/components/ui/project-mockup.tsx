import React from "react";
import Image from "next/image";

export default function ProjectMockup({
  id,
  hasMobile = false,
}: {
  id: string;
  hasMobile?: boolean;
}) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-4 md:p-6 lg:flex-row lg:gap-8 lg:p-8">
      <div className="relative h-full w-full max-w-[515px] p-2">
        <Image
          alt={`${id} laptop mockup`}
          src={`/projects/${id}/${id}-macbook-pro.png`}
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 70%, 90%"
          priority
        />
      </div>

      {hasMobile && (
        <div className="relative h-full w-full max-w-[145px] p-2">
          <Image
            alt={`${id} mobile mockup`}
            src={`/projects/${id}/${id}-iphone.png`}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 15%, 20%"
            priority
          />
        </div>
      )}
    </div>
  );
}
