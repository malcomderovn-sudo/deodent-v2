"use client";

import { Section } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(end * easeOutQuart));
        
        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Лет опыта", value: 8, suffix: "+" },
    { label: "Успешных имплантаций", value: 98, suffix: "%" },
    { label: "Процедур выполнено", value: 10000, suffix: "+" },
    { label: "Счастливых пациентов", value: 5000, suffix: "+" },
  ];

  return (
    <Section className="bg-gradient-to-r from-teal-900 to-blue-900 text-white py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-slate-300 text-sm md:text-base font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}