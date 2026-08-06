"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    title: "Виниры: преображение улыбки",
    before: "https://images.unsplash.com/photo-1590623253507-6a4a6e344e6b?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1590623253507-6a4a6e344e6b?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Тотальное протезирование на имплантатах",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Исправление прикуса элайнерами",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Эстетическая реставрация зоны улыбки",
    before: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500&auto=format&fit=crop",
  },
];

export function BeforeAfterSection() {
  return (
    <Section id="results" className="bg-slate-50">
      <div className="text-center mb-16">
        <SectionTitle>Наши работы: До / После</SectionTitle>
        <SectionSubtitle className="mx-auto">
          Реальные примеры преображения улыбок нашими специалистами.
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex relative aspect-[2/1] overflow-hidden bg-slate-100">
              {/* Before */}
              <div className="w-1/2 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                <Image src={item.before} alt="До" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                  ДО
                </div>
              </div>
              
              {/* Divider */}
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 -translate-x-1/2"></div>
              
              {/* After */}
              <div className="w-1/2 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                <Image src={item.after} alt="После" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-teal-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                  ПОСЛЕ
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-teal-600 transition-colors">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}