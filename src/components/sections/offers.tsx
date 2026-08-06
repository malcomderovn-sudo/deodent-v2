"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Clock, Percent, Gift, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const offers = [
  {
    title: "Комплексная чистка + осмотр",
    oldPrice: "8 000 ₽",
    newPrice: "4 500 ₽",
    discount: "-44%",
    icon: <Percent className="w-5 h-5" />,
    color: "bg-rose-50 text-rose-600 border-rose-100"
  },
  {
    title: "Имплант + коронка «под ключ»",
    oldPrice: "85 000 ₽",
    newPrice: "65 000 ₽",
    discount: "-24%",
    icon: <Percent className="w-5 h-5" />,
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    title: "Отбеливание ZOOM 4",
    oldPrice: "25 000 ₽",
    newPrice: "18 000 ₽",
    discount: "-28%",
    icon: <Percent className="w-5 h-5" />,
    color: "bg-violet-50 text-violet-600 border-violet-100"
  },
  {
    title: "Брекеты + консультация",
    oldPrice: "120 000 ₽",
    newPrice: "95 000 ₽",
    discount: "-21%",
    icon: <Percent className="w-5 h-5" />,
    color: "bg-teal-50 text-teal-600 border-teal-100"
  },
  {
    title: "К 1 сентября — скидка 15% на детей",
    oldPrice: "",
    newPrice: "-15%",
    discount: "Скидка",
    icon: <Gift className="w-5 h-5" />,
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    title: "День клиники — чистка Air Flow бесплатно",
    oldPrice: "",
    newPrice: "Бесплатно",
    discount: "Подарок",
    icon: <Gift className="w-5 h-5" />,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  }
];

export function OffersSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="offers" className="bg-slate-50">
      <div className="text-center mb-16">
        <SectionTitle>Специальные предложения</SectionTitle>
        <SectionSubtitle className="mx-auto mt-4">
          Успейте воспользоваться выгодными акциями на лечение зубов
        </SectionSubtitle>
      </div>

      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <Clock className="w-6 h-6 text-teal-600" />
            <span>До конца акций осталось:</span>
          </div>
          <div className="flex gap-4">
            {[
              { label: 'Дней', value: timeLeft.days },
              { label: 'Часов', value: timeLeft.hours },
              { label: 'Минут', value: timeLeft.minutes },
              { label: 'Секунд', value: timeLeft.seconds },
            ].map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-teal-50 text-teal-700 font-bold text-2xl w-14 h-14 rounded-xl flex items-center justify-center border border-teal-100">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <span className="text-xs text-slate-500 mt-2">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all group flex flex-col relative overflow-hidden">
              <div className={`absolute top-0 right-0 rounded-bl-3xl px-4 py-2 font-bold text-sm ${offer.color}`}>
                {offer.discount}
              </div>
              
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${offer.color}`}>
                {offer.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 pr-16 leading-tight flex-grow">{offer.title}</h3>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold text-slate-900">{offer.newPrice}</span>
                  {offer.oldPrice && (
                    <span className="text-lg text-slate-400 line-through mb-1">{offer.oldPrice}</span>
                  )}
                </div>
                
                <Button className="w-full group/btn" variant="outline">
                  Записаться по акции
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
