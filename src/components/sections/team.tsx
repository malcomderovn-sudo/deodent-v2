"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle, SectionSubtitle } from "@/components/ui/typography";
import { AnimatedCard } from "@/components/ui/card";
import Image from "next/image";

const team = [
  {
    name: "Мухаммад Робертович",
    role: "Хирург-имплантолог",
    experience: "Стаж 15 лет",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Кади Русланович",
    role: "Стоматолог-терапевт",
    experience: "Стаж 12 лет",
    image: "https://images.unsplash.com/photo-1537368910025-702800a2637a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Даниял Идрисович",
    role: "Стоматолог-ортодонт",
    experience: "Стаж 10 лет",
    image: "https://images.unsplash.com/photo-1594824436951-7f1262056d52?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Асия Гаджикаринова",
    role: "Детский стоматолог",
    experience: "Стаж 8 лет",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
  },
];

export function TeamSection() {
  return (
    <Section id="team" className="bg-slate-50">
      <div className="text-center mb-16">
        <SectionTitle>Наша команда</SectionTitle>
        <SectionSubtitle className="mx-auto">
          Опытные специалисты, которые постоянно повышают квалификацию и работают по современным протоколам.
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((doctor, index) => (
          <AnimatedCard key={doctor.name} delay={index * 0.1} className="text-center p-6 group">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 animate-spin-slow blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white z-10">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
            <p className="text-teal-600 font-medium text-sm mb-2">{doctor.role}</p>
            <p className="text-slate-500 text-sm">{doctor.experience}</p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}