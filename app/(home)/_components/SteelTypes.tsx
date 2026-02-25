"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    eyebrow: "أبرز المنتجات",
    title: "منتجاتنا",
    subtitle: "نوفر أفضل ماركات الحديد والصاج المضلع والمنتجات المساندة.",
    row1: [
      { icon: "🏭", label: "حديد سابك", sub: "8–32 مم" },
      { icon: "🔩", label: "حديد الراجحي", sub: "10–20 مم" },
      { icon: "🔩", label: "حديد وطني", sub: "12–20 مم" },
      { icon: "🔩", label: "حديد الاتفاق", sub: "8–32 مم" },
      { icon: "🔲", label: "شبك صبه", sub: "4–10 مم" },
      { icon: "🔩", label: "حديد سعودي", sub: "10–25 مم" },
    ],
    row2: [
      { icon: "🔩", label: "حديد جافكو", sub: "8–32 مم" },
      { icon: "🔩", label: "حديد المديهش", sub: "12–20 مم" },
      { icon: "🔩", label: "حديد اليمامة", sub: "10–25 مم" },
      { icon: "🧵", label: "سلك تربيط", sub: "22GG × 7/8/10 KG" },
    ],
    additional: "منتجات إضافية: شبك مجدول (شينلنك) — صاج مضلع (شينكو) — لفات صاج — ألواح صاج مسطحة — شبك ملحوم أخضر — شبك ملحوم فضي",
    more: "وغيرها من الأصناف..",
    cta: "اطلب عرض سعر ←",
  },
  en: {
    eyebrow: "Key Products",
    title: "Our Products",
    subtitle: "We supply the top steel and corrugated sheet brands along with all supporting products.",
    row1: [
      { icon: "🏭", label: "SABIC Steel", sub: "8–32 mm" },
      { icon: "🔩", label: "Al Rajhi Steel", sub: "10–20 mm" },
      { icon: "🔩", label: "Watani Steel", sub: "12–20 mm" },
      { icon: "🔩", label: "Al Ittefaq Steel", sub: "8–32 mm" },
      { icon: "🔲", label: "Welded Mesh", sub: "4–10 mm" },
      { icon: "🔩", label: "Saudi Steel", sub: "10–25 mm" },
    ],
    row2: [
      { icon: "🔩", label: "JAFCO Steel", sub: "8–32 mm" },
      { icon: "🔩", label: "Al Madihesh Steel", sub: "12–20 mm" },
      { icon: "🔩", label: "Al Yamamah Steel", sub: "10–25 mm" },
      { icon: "🧵", label: "Binding Wire", sub: "22GG × 7/8/10 KG" },
    ],
    additional: "Additional: Chain link mesh — Corrugated sheets (Shinko) — Steel coils — Flat steel plates — Green welded mesh — Silver welded mesh",
    more: "And more…",
    cta: "Request a Quote →",
  },
};

export default function SteelTypes() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="steel" className="bg-parchment py-24 border-t border-gray-200">
      <div className="max-w-310 mx-auto px-14">
        <div className="reveal mb-10">
          <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
            <span className="w-7 h-0.5 bg-forest-700" />
            {t.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold text-ink mb-4">{t.title}</h2>
          <div className="w-12 h-0.75 bg-forest-800 mb-3" />
          <p className="text-[15px] text-gray-400">{t.subtitle}</p>
        </div>

        <div className="reveal border border-gray-200 overflow-hidden">
          {/* Row 1 */}
          <div className="grid grid-cols-3 md:grid-cols-6 border-b border-gray-200">
            {t.row1.map(({ icon, label, sub }, i) => (
              <div
                key={label}
                className={`steel-cell bg-white p-6 text-center ${
                  i < t.row1.length - 1 ? "border-l border-gray-200" : ""
                } hover:bg-forest-50 transition-colors overflow-hidden`}
              >
                <span className="block text-3xl mb-2 opacity-70">{icon}</span>
                <h4 className="text-[11px] font-semibold text-gray-700 leading-snug">{label}</h4>
                <p className="text-[10px] text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 md:grid-cols-6">
            {t.row2.map(({ icon, label, sub }, i) => (
              <div
                key={label}
                className={`steel-cell bg-white p-6 text-center ${
                  i < t.row2.length - 1 ? "border-l border-gray-200" : ""
                } hover:bg-forest-50 transition-colors overflow-hidden`}
              >
                <span className="block text-3xl mb-2 opacity-70">{icon}</span>
                <h4 className="text-[11px] font-semibold text-gray-700 leading-snug">{label}</h4>
                <p className="text-[10px] text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
            <div className="bg-forest-900 p-6 text-center border-l border-gray-200 flex items-center justify-center">
              <h4 className="text-[11px] font-semibold text-forest-300 leading-snug">{t.more}</h4>
            </div>
            <div className="bg-forest-800 p-6 text-center flex items-center justify-center hover:bg-forest-900 transition-colors">
              <a href="#contact" className="text-white text-[12px] font-bold font-body hover:text-forest-200 transition-colors">
                {t.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Additional products note */}
        <p className="reveal mt-5 text-[12px] text-gray-400 leading-relaxed">{t.additional}</p>
      </div>
    </section>
  );
}
