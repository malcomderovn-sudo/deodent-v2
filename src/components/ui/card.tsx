"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        glass ? "glass" : "bg-white border border-slate-200 shadow-sm hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  glass?: boolean;
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedCard({ className, glass = false, children, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        glass ? "glass" : "bg-white border border-slate-200 shadow-sm",
        "hover:shadow-xl hover:border-teal-200/50",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}