"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "therapy",
    name: "Терапия",
    items: [
      { name: "Лечение кариеса", price: "от 3 500 ₽" },
      { name: "Пульпит", price: "от 5 000 ₽" },
      { name: "Пломбирование", price: "от 3 500 ₽" },
      { name: "Реставрация", price: "от 5 500 ₽" },
    ]
  },
  {
    id: "surgery",
    name: "Хирургия",
    items: [
      { name: "Удаление", price: "от 4 000 ₽" },
      { name: "Имплантация", price: "от 45 000 ₽" },
    ]
  },
  {
    id: "orthopedics",
    name: "Ортопедия",
    items: [
      { name: "Коронки", price: "от 18 000 ₽" },
      { name: "Виниры", price: "от 25 000 ₽" },
    ]
  },
  {
    id: "orthodontics",
    name: "Ортодонтия",
    items: [
      { name: "Брекеты", price: "от 90 000 ₽" },
      { name: "Элайнеры", price: "от 180 000 ₽" },
    ]
  },
  {
    id: "kids",
    name: "Детская",
    items: [
      { name: "Прием детского стоматолога", price: "от 2 500 ₽" },
    ]
  },
  {
    id: "aesthetics",
    name: "Эстетика",
    items: [
      { name: "Чистка", price: "от 4 500 ₽" },
      { name: "Отбеливание", price: "от 25 000 ₽" },
    ]
  }
];

export function CalculatorSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeItems = categories.find(c => c.id === activeCategory)?.items || [];

  return (
    <Section id="calculator" className="bg-white">
      <div className="text-center mb-16">
        <SectionTitle>Стоимость услуг</SectionTitle>
        <SectionSubtitle className="mx-auto mt-4">
          Прозрачные цены без скрытых платежей
        </SectionSubtitle>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="space-y-4">
                {activeItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                    <span className="text-lg text-slate-700 font-medium">{item.name}</span>
                    <span className="text-xl font-bold text-teal-600">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 max-w-sm text-center sm:text-left">
                  Точную стоимость лечения врач сможет назвать после бесплатной консультации и диагностики.
                </p>
                <Button size="lg" className="w-full sm:w-auto">
                  Записаться на консультацию
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
