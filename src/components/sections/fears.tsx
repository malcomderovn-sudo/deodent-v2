"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { ShieldCheck, HeartPulse, Stethoscope, Baby } from "lucide-react";

const fears = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Боитесь боли?",
    description: "Мы используем современные анестетики и проводим двухэтапную анестезию. Лечение проходит абсолютно безболезненно."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Боитесь анестезии?",
    description: "Подбираем препараты индивидуально, учитывая особенности организма и сопутствующие заболевания."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Боитесь, что «навяжут лишнее»?",
    description: "Составляем прозрачный план лечения после бесплатной диагностики. Цена фиксируется в договоре."
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Боитесь, что ребёнок испугается?",
    description: "Наши детские стоматологи находят подход к каждому малышу, превращая лечение в увлекательную игру."
  }
];

export function FearsSection() {
  return (
    <Section id="fears" className="bg-slate-50">
      <div className="text-center mb-16">
        <SectionTitle>Расскажите о страхах</SectionTitle>
        <SectionSubtitle className="mx-auto mt-4">
          Мы понимаем ваши переживания и знаем, как сделать визит к стоматологу комфортным
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {fears.map((fear, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-100 transition-all text-center flex flex-col items-center group"
          >
            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 group-hover:bg-teal-100 transition-all">
              {fear.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{fear.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {fear.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
