"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 overflow-hidden", className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export function AnimatedSection({
  children,
  id,
  className,
  containerClassName,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-20 md:py-28 overflow-hidden", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}