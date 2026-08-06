"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import { ShieldCheck, Heart, Droplets, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export function ApproachSection() {
  const features = [
    {
      title: "Честные цены",
      description: "Стоимость фиксируем в договоре до лечения. Никаких скрытых платежей и сюрпризов.",
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      delay: 0.1,
    },
    {
      title: "Комфорт без страха",
      description: "Лечение во сне и бережная анестезия. Вы не почувствуете боли.",
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      delay: 0.2,
    },
    {
      title: "Стерильность",
      description: "Автоклав, УФ-лампы, одноразовые расходники. Безопасность на уровне операционной.",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      delay: 0.3,
    },
    {
      title: "Индивидуальный подход",
      description: "Составляем детальный план лечения под вашу ситуацию и бюджет.",
      icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
      delay: 0.4,
    },
  ];

  return (
    <Section id="approach" className="bg-slate-50 relative">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-teal-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold tracking-wide">
            Наш подход
          </span>
        </motion.div>
        
        <SectionTitle className="max-w-3xl mx-auto">
          Миссия Deo Dent — избавить людей от страха перед стоматологом
        </SectionTitle>
        <SectionSubtitle className="mx-auto mt-6">
          Мы создали клинику, в которой пациентам спокойно, понятно и безопасно.
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {features.map((feature) => (
          <AnimatedCard 
            key={feature.title} 
            delay={feature.delay}
            glass 
            className="flex items-start gap-6 p-8"
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}