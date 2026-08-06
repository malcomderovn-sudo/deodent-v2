"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import { Moon, FileText, Clock, Sparkles, Award, StopCircle } from "lucide-react";

export function WhyUsSection() {
  const reasons = [
    {
      title: "Лечение во сне и без стресса",
      description: "Применяем седацию и безопасный наркоз. Проснетесь уже со здоровой улыбкой.",
      icon: <Moon className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Честная цена в договоре",
      description: "Никаких 'внезапных' доплат. Вы заранее знаете точную сумму.",
      icon: <FileText className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "Прием вечером и в выходные",
      description: "Работаем ежедневно с 09:00 до 19:00, чтобы вы могли прийти после работы.",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Стерильность операционной",
      description: "Многоступенчатая система очистки инструментов. 100% безопасность.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Врачи с опытом от 5 лет",
      description: "В нашей команде нет стажеров. Только проверенные специалисты.",
      icon: <Award className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "Контроль в ваших руках",
      description: "Вы можете остановить лечение в любой момент, просто подняв руку.",
      icon: <StopCircle className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <Section className="bg-slate-50">
      <div className="text-center mb-16">
        <SectionTitle>Почему пациенты выбирают Deo Dent</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <AnimatedCard 
            key={reason.title} 
            delay={index * 0.1}
            className="flex items-start gap-4 p-6"
          >
            <div className="p-3 rounded-xl bg-slate-100 shrink-0">
              {reason.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{reason.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}