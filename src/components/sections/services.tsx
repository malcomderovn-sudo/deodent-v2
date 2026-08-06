"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import { Stethoscope, Syringe, Sparkles, Smile, Baby, TestTube } from "lucide-react";

const services = [
  {
    title: "Терапия",
    price: "от 3 500 ₽",
    icon: <Stethoscope className="w-8 h-8" />,
    color: "text-blue-500",
    bg: "bg-blue-50",
    items: ["Лечение кариеса", "Лечение пульпита", "Пломбирование", "Реставрация зубов"],
  },
  {
    title: "Хирургия",
    price: "от 4 000 ₽",
    icon: <Syringe className="w-8 h-8" />,
    color: "text-red-500",
    bg: "bg-red-50",
    items: ["Удаление зубов", "Имплантация", "Костная пластика", "Синус-лифтинг"],
  },
  {
    title: "Ортопедия",
    price: "от 18 000 ₽",
    icon: <TestTube className="w-8 h-8" />,
    color: "text-amber-500",
    bg: "bg-amber-50",
    items: ["Коронки", "Мосты", "Виниры", "Протезирование"],
  },
  {
    title: "Ортодонтия",
    price: "от 90 000 ₽",
    icon: <Smile className="w-8 h-8" />,
    color: "text-purple-500",
    bg: "bg-purple-50",
    items: ["Брекеты", "Элайнеры", "Пластинки", "Ретейнеры"],
  },
  {
    title: "Детская стоматология",
    price: "от 2 500 ₽",
    icon: <Baby className="w-8 h-8" />,
    color: "text-green-500",
    bg: "bg-green-50",
    items: ["Лечение молочных зубов", "Герметизация фиссур", "Фторирование", "Адаптация к врачу"],
  },
  {
    title: "Эстетика",
    price: "от 4 500 ₽",
    icon: <Sparkles className="w-8 h-8" />,
    color: "text-teal-500",
    bg: "bg-teal-50",
    items: ["Отбеливание", "Профессиональная чистка", "Реставрация", "Air Flow"],
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <SectionTitle>Услуги и цены</SectionTitle>
        <SectionSubtitle className="mx-auto">
          Полный спектр стоматологических услуг с использованием современного оборудования и сертифицированных материалов.
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedCard key={service.title} delay={index * 0.1} className="flex flex-col h-full border-slate-100 hover:border-teal-100">
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 rounded-2xl ${service.bg} ${service.color}`}>
                {service.icon}
              </div>
              <div className="text-right">
                <span className="text-sm text-slate-500 font-medium block">Стоимость</span>
                <span className="font-bold text-slate-900">{service.price}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            
            <ul className="space-y-3 mt-auto">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}