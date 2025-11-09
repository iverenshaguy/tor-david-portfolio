import { ReactNode } from "react";
import { ReactRef } from "@gsap/react";

export default function Section({
  ref,
  id,
  children,
  className,
  dataSection,
}: {
  ref?: ReactRef;
  id?: string;
  children: ReactNode;
  className?: string;
  dataSection?: string;
}) {
  return (
    <section
      ref={ref}
      id={id}
      data-section={dataSection}
      className={`relative w-full scroll-mt-20 px-4 py-5 font-sans md:px-8 md:py-12 lg:py-16 ${className}`}
    >
      {children}
    </section>
  );
}
