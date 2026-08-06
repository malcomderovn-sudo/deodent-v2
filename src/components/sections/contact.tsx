"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <SectionTitle className="mb-4">Ждем вас в Deo Dent</SectionTitle>
          <SectionSubtitle className="mb-10 text-slate-600">
            Оставьте заявку, и наши администраторы свяжутся с вами для подбора удобного времени приема.
          </SectionSubtitle>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Адрес</h4>
                <p className="text-slate-600">ул. Сулеймана Стальского, 18<br />г. Каспийск, Дагестан</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Режим работы</h4>
                <p className="text-slate-600">Ежедневно: 09:00 - 19:00<br />Без перерывов и выходных</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Телефон</h4>
                <a href="tel:+79882228814" className="text-slate-600 hover:text-teal-600 transition-colors block text-lg font-medium">
                  +7 (988) 222-88-14
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto">Записаться на приём</Button>
            <a 
              href="https://wa.me/79882228814" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </a>
          </div>
        </div>

        {/* Map */}
        <AnimatedCard delay={0.2} className="p-2 h-[400px] lg:h-auto overflow-hidden rounded-3xl border-slate-200">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a195b0c96a32d847b2c01d4a0f4438b2f0a5b2907409c9f28d84950e3012891&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              title="Deo Dent на Яндекс Картах"
            ></iframe>
          </div>
        </AnimatedCard>
      </div>
    </Section>
  );
}