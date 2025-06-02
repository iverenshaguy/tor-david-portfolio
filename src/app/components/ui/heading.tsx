import { ReactNode } from "react";

export default function Heading({
  tag,
  children,
  className,
}: {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5";
  children: ReactNode;
  className?: string;
}) {
  const Tag = tag || "h2";

  return (
    <Tag
      className={`relative text-center font-sans text-4xl font-semibold tracking-[0.8px] text-black ${className}`}
    >
      {children}
    </Tag>
  );
}
