"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import { Baby, Users, HeartHandshake } from "lucide-react";

export function FamilySection() {
  return (
    <Section className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <SectionTitle className="text-white">Лечим всю семью</SectionTitle>
        <SectionSubtitle className="text-slate-400 mx-auto">
          Особый подход к самым требовательным пациентам — детям и пожилым людям.
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Kids Card */}
        <AnimatedCard 
          delay={0.1}
          className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 p-8 hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400">
              <Baby className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Для детей: &quot;Без страха и слёз&quot;</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <HeartHandshake className="w-6 h-6 text-teal-400 mr-3 shrink-0" />
              <span className="text-slate-300">Адаптация к врачу в игровой форме, без сверления на первом приеме.</span>
            </li>
            <li className="flex items-start">
              <HeartHandshake className="w-6 h-6 text-teal-400 mr-3 shrink-0" />
              <span className="text-slate-300">Щадящая двухэтапная анестезия (сначала гель, потом укол, который не чувствуется).</span>
            </li>
            <li className="flex items-start">
              <HeartHandshake className="w-6 h-6 text-teal-400 mr-3 shrink-0" />
              <span className="text-slate-300">Многие дети просятся снова к нашим добрым докторам.</span>
            </li>
          </ul>
        </AnimatedCard>

        {/* Seniors Card */}
        <AnimatedCard 
          delay={0.2}
          className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 p-8 hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Для 60+: &quot;Бережно и без спешки&quot;</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <HeartHandshake className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
              <span className="text-slate-300">Специальный протокол обезболивания с учетом сопутствующих заболеваний.</span>
            </li>
            <li className="flex items-start">
              <HeartHandshake className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
              <span className="text-slate-300">Просто и понятно объясняем план лечения, фиксируем цену до начала.</span>
            </li>
            <li className="flex items-start">
              <HeartHandshake className="w-6 h-6 text-blue-400 mr-3 shrink-0" />
              <span className="text-slate-300">Комфортное протезирование с точным контролем прикуса и эстетики.</span>
            </li>
          </ul>
        </AnimatedCard>

      </div>
    </Section>
  );
}