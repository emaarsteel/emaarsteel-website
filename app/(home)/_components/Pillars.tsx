"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    vision: {
      label: "الرؤية",
      text: "الريادة في تجارة وتشكيل المعادن في مختلف مناطق المملكة العربية السعودية.",
    },
    values: {
      label: "القيم",
      items: ["الاحترافية", "الالتزام", "الانضباط", "الابتكار"],
      why: "نهدف إلى تقديم منتجات أفضل من شأنها تعزيز مستويات معيشة ورفاهية المجتمع والحفاظ على المنافع المتبادلة مع العملاء.",
    },
    mission: {
      label: "الرسالة",
      text: "تزويد عملائنا وشركاؤنا بجودة وقيمة استثنائية.",
    },
  },
  en: {
    vision: {
      label: "Vision",
      text: "To be a leader in the trade and forming of metals across all regions of the Kingdom of Saudi Arabia.",
    },
    values: {
      label: "Our Values",
      items: ["Professionalism", "Commitment", "Discipline", "Innovation"],
      why: "We aim to deliver superior products that enhance community living standards and well-being, while maintaining mutual benefits with our clients.",
    },
    mission: {
      label: "Mission",
      text: "To provide our clients and partners with exceptional quality and value.",
    },
  },
};

export default function Pillars() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Vision */}
        <div className="pillar relative p-14 border border-gray-200 border-t-0 border-r-0 hover:bg-forest-50 transition-colors group">
          <div className="pillar-bar rounded-sm" />
          <span className="font-display text-[72px] font-bold text-forest-100 leading-none block mb-5 select-none">01</span>
          <h3 className="text-lg font-bold text-ink mb-4">{t.vision.label}</h3>
          <p className="text-[13.5px] text-gray-500 leading-[1.85]">{t.vision.text}</p>
        </div>

        {/* Values */}
        <div className="pillar relative p-14 border border-gray-200 border-t-0 border-r-0 hover:bg-forest-50 transition-colors group">
          <div className="pillar-bar rounded-sm" />
          <span className="font-display text-[72px] font-bold text-forest-100 leading-none block mb-5 select-none">02</span>
          <h3 className="text-lg font-bold text-ink mb-4">{t.values.label}</h3>
          <ul className="list-none space-y-0 mb-4">
            {t.values.items.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-2.5 text-[13.5px] text-gray-500 py-2 ${
                  i < t.values.items.length - 1 ? "border-b border-gray-100" : ""
                } leading-relaxed`}
              >
                <span className="text-forest-600 font-bold shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[12.5px] text-gray-400 leading-relaxed">{t.values.why}</p>
        </div>

        {/* Mission */}
        <div className="pillar relative p-14 border border-gray-200 border-t-0 border-r-0 border-l-0 hover:bg-forest-50 transition-colors group">
          <div className="pillar-bar rounded-sm" />
          <span className="font-display text-[72px] font-bold text-forest-100 leading-none block mb-5 select-none">03</span>
          <h3 className="text-lg font-bold text-ink mb-4">{t.mission.label}</h3>
          <p className="text-[13.5px] text-gray-500 leading-[1.85]">{t.mission.text}</p>
        </div>
      </div>
    </section>
  );
}
