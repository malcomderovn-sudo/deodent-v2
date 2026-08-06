"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { MessageSquareText, Calculator, SmilePlus, ShieldCheck } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Бесплатная консультация",
      description: "Осмотр, КТ-диагностика и обсуждение ваших пожеланий.",
      icon: <MessageSquareText className="w-8 h-8 text-teal-600" />,
    },
    {
      number: "02",
      title: "Согласование стоимости",
      description: "Составляем план лечения. Цена фиксируется в договоре.",
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "03",
      title: "Комфортное лечение",
      description: "Лечим без боли и стресса. Можно отдыхать или смотреть кино.",
      icon: <SmilePlus className="w-8 h-8 text-indigo-600" />,
    },
    {
      number: "04",
      title: "Гарантия результата",
      description: "Выдаем гарантийный талон на все выполненные работы.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <SectionTitle>Как мы работаем</SectionTitle>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white w-full h-full p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative z-10">
                <div className="absolute -top-4 -right-4 text-6xl font-black text-slate-50 select-none z-0">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}