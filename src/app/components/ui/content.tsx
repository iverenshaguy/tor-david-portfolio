import { ElementType, ReactNode } from "react";

export default function Content({
  tag,
  children,
  className,
}: {
  tag?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const Tag = tag || "div";
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-4 ${className}`}>
      {children}
    </Tag>
  );
}
