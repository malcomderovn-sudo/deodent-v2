"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-400/20 blur-[100px] animate-blob" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-teal-100 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-sm font-medium text-slate-700">Работаем с 2018 года в Каспийске</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Лечим зубы без боли — <br className="hidden md:block" />
            <span className="text-gradient">без скрытых доплат</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Осмотр, детальная диагностика и понятный план лечения — без сюрпризов в чеке. Ваша улыбка в надежных руках.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg px-8">
                Записаться на приём
              </Button>
            </a>
            <a href="https://wa.me/79882228814" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full text-lg px-6 flex items-center justify-center gap-2 text-[#25D366] hover:border-[#25D366]">
                WhatsApp
              </Button>
            </a>
            <a href="https://t.me/deodent" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full text-lg px-6 flex items-center justify-center gap-2 text-[#0088cc] hover:border-[#0088cc]">
                Telegram
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass rounded-2xl p-4 flex items-center justify-center gap-3">
              <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-lg">8+ лет</p>
                <p className="text-sm text-slate-500 font-medium">опыта работы</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-4 flex items-center justify-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-lg">5000+</p>
                <p className="text-sm text-slate-500 font-medium">пациентов</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-4 flex items-center justify-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-500">
                <Star className="w-6 h-6 fill-amber-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-lg">4.9/5</p>
                <p className="text-sm text-slate-500 font-medium">рейтинг клиники</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}