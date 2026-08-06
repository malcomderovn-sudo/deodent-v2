"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { Calculator, Scan, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Calculator className="w-6 h-6" />,
    text: "Предварительный расчёт стоимости"
  },
  {
    icon: <Scan className="w-6 h-6" />,
    text: "Бесплатный 3D-снимок"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    text: "Рассрочка без переплат"
  }
];

export function QuizSection() {
  return (
    <Section id="quiz" className="bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-100">
        <SectionTitle className="mb-4">Не знаете, с чего начать?</SectionTitle>
        <SectionSubtitle className="mx-auto mb-8">
          Пройдите короткий тест за 1 минуту и получите предварительный план лечения с приятными бонусами
        </SectionSubtitle>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl w-full md:w-auto">
              <div className="text-teal-600 shrink-0">
                {benefit.icon}
              </div>
              <span className="text-slate-700 font-medium text-sm text-left">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full group">
          Пройти тест
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Section>
  );
}
