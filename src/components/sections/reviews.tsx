"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { Star, ExternalLink, Play } from "lucide-react";

const textReviews = [
  { name: "Даниял А.", date: "10.2025", text: "Чисто, современно, работают профессионалы." },
  { name: "Арзуля Гагаева", date: "04.2025", text: "Минусов нет. Отличный подход и к детям, и к взрослым." },
  { name: "Гуля", date: "10.2025", text: "Лечилась у ортодонта — результат есть." },
  { name: "Константин Д.", date: "06.2025", text: "Дочь очень боялась удалять молочный зуб, но все прошло отлично." },
  { name: "Саид Гаджимурадов", date: "05.2025", text: "Современное оборудование, качественные материалы." },
  { name: "Иван Иванов", date: "01.2025", text: "У ребёнка была острая боль — приняли быстрее." },
  { name: "Айсана Амаханова", date: "2025", text: "Делала отбеливание — результат отличный." },
  { name: "Али", date: "10.2025", text: "Отдельное спасибо ассистенту Индире." },
  { name: "Мариям Исаева", date: "07.2025", text: "Лечилась у Кади Руслановича — без боли." },
  { name: "Татьяна Дегтяренко", date: "2025", text: "Доктор Мария — лечение прошло без дискомфорта." }
];

const videoReviews = [
  { name: "Анна М.", age: "34 года", procedure: "Имплантация", quote: "Боялась имплантации, но врачи всё объяснили. Теперь улыбаюсь без стеснения!" },
  { name: "Сергей К.", age: "45 лет", procedure: "Виниры E-max", quote: "Результат превзошел ожидания! Виниры выглядят естественно и красиво." },
  { name: "Елена В.", age: "28 лет", procedure: "Брекеты Invisalign", quote: "Невидимые брекеты - лучшее решение! Никто даже не заметил, что я их ношу." },
  { name: "Марат А.", age: "38 лет", procedure: "Имплантация", quote: "Всё быстро и без боли, врачи профессионалы своего дела." },
  { name: "Фатима М.", age: "52 года", procedure: "Протезирование", quote: "Привыкла к мосту за две недели. Сейчас забываю, что это протез." },
  { name: "Руслан Г.", age: "41 год", procedure: "Протезирование", quote: "После протезирования врач проверил прикус и подкорректировал." },
  { name: "Зарема А.", age: "60 лет", procedure: "Протезирование", quote: "Протез стоит уже 4 года — ничего не шатается." }
];

export function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-slate-50 overflow-hidden">
      <div className="text-center mb-16">
        <SectionTitle>Отзывы наших пациентов</SectionTitle>
        <SectionSubtitle className="mx-auto mt-4">
          Мы гордимся доверием наших пациентов и всегда рады вашим отзывам
        </SectionSubtitle>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Video Reviews */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 pl-4 border-l-4 border-teal-500">
            Видеоотзывы
          </h3>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {videoReviews.map((review, index) => (
              <div key={index} className="shrink-0 w-[300px] snap-center bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-all">
                <div className="aspect-[9/16] bg-slate-200 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform z-10 shadow-lg">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm opacity-90">{review.age}, {review.procedure}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm italic">&quot;{review.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Reviews */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h3 className="text-2xl font-bold text-slate-900 pl-4 border-l-4 border-teal-500">
              Отзывы на Яндекс Картах
            </h3>
            <a 
              href="https://yandex.ru/maps/org/deo_dent/212712615203/reviews/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
            >
              Смотреть все отзывы
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <span className="text-sm text-slate-400">{review.date}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 line-clamp-4">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
