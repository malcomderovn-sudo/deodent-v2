import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 inline-block mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                D
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Deo <span className="text-teal-400">Dent</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              Современная стоматологическая клиника в Каспийске. Лечим зубы без боли и скрытых доплат.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/79882228814" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://t.me/deodent" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="hover:text-teal-400 transition-colors">Услуги и цены</Link></li>
              <li><Link href="#approach" className="hover:text-teal-400 transition-colors">О клинике</Link></li>
              <li><Link href="#team" className="hover:text-teal-400 transition-colors">Наши врачи</Link></li>
              <li><Link href="#gallery" className="hover:text-teal-400 transition-colors">Галерея</Link></li>
              <li><Link href="#faq" className="hover:text-teal-400 transition-colors">Вопросы и ответы</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>г. Каспийск, ул. Сулеймана Стальского, 18</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="tel:+79882228814" className="hover:text-white transition-colors">+7 (988) 222-88-14</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>Ежедневно<br/>09:00 - 19:00</span>
              </li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h3 className="text-white font-semibold mb-6">Информация</h3>
            <p className="text-sm text-slate-400 mb-4">
              Лицензия на осуществление медицинской деятельности ЛО-XX-XX-XXXXXX от XX.XX.XXXX
            </p>
            <p className="text-xs text-slate-500">
              Имеются противопоказания. Необходима консультация специалиста.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Deo Dent. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">Политика конфиденциальности</Link>
            <Link href="#" className="hover:text-slate-300">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}