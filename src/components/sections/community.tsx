"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { MessageCircle, Info, Sparkles, CheckCircle2 } from "lucide-react";

const benefits = [
  "Советы врачей каждую неделю",
  "Эксклюзивные акции",
  "Ответы на вопросы в чате"
];

export function CommunitySection() {
  return (
    <Section id="community" className="bg-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[3rem] p-8 md:p-16 border border-blue-100 shadow-sm relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none">
          <MessageCircle className="w-96 h-96 text-blue-400" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Deo Dent Community</span>
            </div>
            
            <SectionTitle className="mb-4">Присоединяйтесь к нашему Telegram</SectionTitle>
            <SectionSubtitle className="mb-8">
              Полезный контент о здоровье зубов, скидки для подписчиков и возможность задать вопрос врачу онлайн
            </SectionSubtitle>
            
            <ul className="space-y-4 mb-10 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://t.me/deodent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-[#229ED9] hover:bg-[#1E8CC0] text-white shadow-lg shadow-blue-500/25 border-none">
                <MessageCircle className="w-5 h-5 mr-2" />
                Подписаться на канал
              </Button>
            </a>
          </div>
          
          <div className="w-full md:w-1/3 max-w-[280px] shrink-0">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Deo Dent</h4>
                  <p className="text-xs text-slate-500">2.5K подписчиков</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                <div className="h-2 bg-slate-100 rounded-full w-5/6"></div>
                <div className="h-2 bg-slate-100 rounded-full w-4/6"></div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="px-4 py-1.5 bg-[#229ED9]/10 text-[#229ED9] text-xs font-bold rounded-full">
                  Join
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
