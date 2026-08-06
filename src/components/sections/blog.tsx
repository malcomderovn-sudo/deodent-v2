"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "Как подготовиться к имплантации: 5 простых шагов",
    category: "Хирургия",
    date: "12 Октября, 2023",
    image: "https://images.unsplash.com/photo-1606282855217-1fdf56f91d4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Страх стоматолога у детей: как помочь ребёнку привыкнуть",
    category: "Детская стоматология",
    date: "28 Сентября, 2023",
    image: "https://images.unsplash.com/photo-1607559132145-c49c719e71ec?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Брекеты или элайнеры: что выбрать в 2026 году?",
    category: "Ортодонтия",
    date: "05 Сентября, 2023",
    image: "https://images.unsplash.com/photo-1598256989800-fea5a02be041?q=80&w=600&auto=format&fit=crop",
  },
];

export function BlogSection() {
  return (
    <Section className="bg-slate-50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <SectionTitle className="mb-0">Полезные статьи</SectionTitle>
        </div>
        <Link href="#" className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group">
          Все статьи
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <AnimatedCard 
            key={article.title} 
            delay={index * 0.1}
            className="p-0 overflow-hidden group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>
              <Image 
                src={article.image} 
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="inline-flex items-center text-teal-600 text-sm font-medium">
                Читать далее
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}