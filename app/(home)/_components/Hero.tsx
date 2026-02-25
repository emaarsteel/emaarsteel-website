"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    badge: "إعمار المعدنية للحديد — المملكة العربية السعودية",
    h1a: "إعمار المعدنية",
    h1b: "للحديد",
    subtitle: "رائدة في تجارة وتشكيل الصاج المضلع والمنتجات المساندة في المملكة العربية السعودية.",
    cta1: "تعرف علينا",
    cta2: "اطلب خدمة",
  },
  en: {
    badge: "Emaar Metallic for Iron — Saudi Arabia",
    h1a: "Emaar Metallic",
    h1b: "for Iron",
    subtitle: "A leader in the trade and forming of corrugated sheets and supporting products in the Kingdom of Saudi Arabia.",
    cta1: "Learn More",
    cta2: "Request a Service",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="home" className="relative min-h-[88vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-forest-900/80 bg-grid-forest" />

      {/* Decorative blurs */}
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-forest-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-forest-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-forest-500/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-310 mx-auto px-4 md:px-16 flex items-center min-h-[88vh] py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-forest-300" />
            <span className="text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold">
              {t.badge}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-3">
            {t.h1a}
            <br />
            <span className="text-forest-300">{t.h1b}</span>
          </h1>
          <p className="text-xl font-light text-white/55 leading-relaxed mb-11 border-r-4 border-forest-500 pr-4">
            {t.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-forest-500 text-white border-2 border-forest-500 px-8 py-3.5 text-sm font-semibold rounded-sm hover:bg-forest-700 hover:border-forest-700 transition-all duration-200 font-body"
            >
              {t.cta1}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent text-white/80 border border-white/25 px-8 py-3.5 text-sm font-medium rounded-sm hover:border-white/60 hover:text-white transition-all duration-200 font-body"
            >
              {t.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
