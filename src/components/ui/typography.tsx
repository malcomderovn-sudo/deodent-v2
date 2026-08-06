import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function SectionTitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-slate-600 max-w-2xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}