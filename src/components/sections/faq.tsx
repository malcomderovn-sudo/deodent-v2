"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/typography";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Сколько стоит лечение зубов?",
    answer: "Стоимость лечения зависит от диагноза и объема работы. Мы всегда проводим бесплатную консультацию, после которой составляем подробный финансовый план. Цена фиксируется в договоре и не меняется в процессе лечения.",
  },
  {
    question: "Больно ли лечить зубы?",
    answer: "Нет, современная стоматология абсолютно безболезненна. Мы используем качественные анестетики последнего поколения и проводим двухэтапную анестезию (сначала гель, затем укол). Также доступно лечение во сне (седация).",
  },
  {
    question: "Как записаться на приём?",
    answer: "Записаться можно по телефону +7 (988) 222-88-14, написав нам в WhatsApp или Telegram, а также оставив заявку на сайте. Наши администраторы подберут удобное для вас время.",
  },
  {
    question: "Есть ли гарантия на лечение?",
    answer: "Да, мы предоставляем официальную гарантию на все виды стоматологических услуг. Срок гарантии зависит от вида лечения (например, на имплантаты действует пожизненная гарантия от производителя).",
  },
  {
    question: "Работаете ли вы в выходные?",
    answer: "Да, мы понимаем, как сложно найти время в будни. Клиника Deo Dent работает ежедневно, без выходных, с 09:00 до 19:00.",
  },
  {
    question: "Можно ли лечить зубы во время беременности?",
    answer: "Да, можно и нужно! Мы используем специальные безопасные анестетики, не проникающие через плацентарный барьер. Оптимальное время для лечения — второй триместр (14-26 недель).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white">
      <div className="text-center mb-16">
        <SectionTitle>Отвечаем на частые вопросы</SectionTitle>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-teal-200 transition-colors"
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
              <div className={`p-1 rounded-full shrink-0 transition-transform duration-300 ${openIndex === index ? "bg-teal-100 text-teal-600 rotate-180" : "bg-slate-100 text-slate-500"}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}