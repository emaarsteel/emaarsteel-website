"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    eyebrow: "خدماتنا",
    title: "مجالات العمل",
    desc: "تشكيل وتجارة وتوزيع الصاج المضلع والمنتجات المساندة في مختلف القطاعات الإنشائية والصناعية.",
    cta: "اطلب خدمة",
    sectors: [
      { icon: "🏠", label: "تطبيقات الأسقف" },
      { icon: "⛱️", label: "المظلات" },
      { icon: "🔒", label: "السواتر" },
      { icon: "🏭", label: "الهناجر" },
      { icon: "⚙️", label: "تشكيل الصاج المضلع" },
      { icon: "🚚", label: "توزيع المنتجات" },
      { icon: "🏗️", label: "شركات المقاولات" },
      { icon: "🏢", label: "الإنشاءات" },
    ],
  },
  en: {
    eyebrow: "Our Services",
    title: "Services",
    desc: "Forming, trading, and distributing corrugated sheets and supporting products across various construction and industrial sectors.",
    cta: "Request a Service",
    sectors: [
      { icon: "🏠", label: "Roofing Applications" },
      { icon: "⛱️", label: "Shade Structures" },
      { icon: "🔒", label: "Privacy Barriers" },
      { icon: "🏭", label: "Hangars & Warehouses" },
      { icon: "⚙️", label: "Sheet Metal Forming" },
      { icon: "🚚", label: "Product Distribution" },
      { icon: "🏗️", label: "Contracting Companies" },
      { icon: "🏢", label: "Construction Projects" },
    ],
  },
};

export default function Sectors() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="sectors" className="bg-[#0d1a13] py-24">
      <div className="max-w-310 mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-300" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold text-white mb-4">{t.title}</h2>
            <div className="w-12 h-0.75 bg-forest-500 mb-6" />
            <p className="text-[15px] text-white/45 leading-[1.85] mb-9">{t.desc}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest-500 text-white border-2 border-forest-500 px-8 py-3.5 text-sm font-semibold rounded-sm hover:bg-forest-700 hover:border-forest-700 transition-all duration-200 font-body"
            >
              {t.cta}
            </a>
          </div>

          {/* Grid */}
          <div className="reveal grid grid-cols-4 border border-white/[0.07]">
            {t.sectors.map(({ icon, label }) => (
              <div
                key={label}
                className="group p-6 text-center border border-white/5 bg-white/[0.02] hover:bg-forest-900 hover:border-forest-500/35 transition-all duration-300 cursor-default"
              >
                <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {icon}
                </span>
                <h4 className="text-[10.5px] text-white/40 group-hover:text-white/70 leading-relaxed transition-colors">
                  {label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
