"use client";

import { useLanguage } from "@/context/LanguageContext";

const clients = {
  ar: [
    "نيوم",
    "القدية",
    "وزارة الشؤون البلدية والقروية",
    "سكني",
    "وزارة الإسكان",
    "هيئة تطوير بوابة الدرعية",
    "رؤوم",
    "توافيق العقارية",
    "الدعجان القابضة",
    "شركة الخليج للمقاولات",
    "سكدكو",
    "شركة مستورة للمقاولات",
  ],
  en: [
    "NEOM",
    "Qiddiya",
    "Ministry of Municipal & Rural Affairs",
    "Sakani",
    "Ministry of Housing",
    "Diriyah Gate Development Authority",
    "RAOOM",
    "Tawafiq Real Estate",
    "Al Daajan Holding",
    "Gulf Company for Contracting",
    "SCDCo",
    "Mastoura Contracting Co.",
  ],
};

const labels = {
  ar: { eyebrow: "عملاؤنا", title: "الشركاء" },
  en: { eyebrow: "Our Clients", title: "Clients & Partners" },
};

export default function Partners() {
  const { lang } = useLanguage();
  const t = labels[lang];
  const list = clients[lang];

  return (
    <section id="clients" className="bg-forest-900 py-20">
      <div className="max-w-310 mx-auto px-14">
        <div className="text-center reveal mb-10">
          <p className="text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold mb-3 flex items-center justify-center gap-3">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">{t.title}</h2>
          <div className="w-12 h-0.75 bg-forest-500 mx-auto" />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-forest-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-forest-900 to-transparent pointer-events-none" />
        <div className="flex gap-3.5 carousel-track">
          {[...list, ...list].map((name, i) => (
            <div
              key={i}
              className="partner-chip bg-white/5 border border-white/10 px-6 py-3.5 min-w-50 text-sm text-white/50 text-center whitespace-nowrap shrink-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
