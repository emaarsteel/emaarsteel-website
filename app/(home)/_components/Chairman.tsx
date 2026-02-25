"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    eyebrow: "شركة إعمار لمنتجات الحديد",
    title: "كلمة رئيس مجلس الإدارة",
    quote: "منذ أن عرفت البشرية قيمة الحديد في تنمية مجتمعاتها…",
    greeting: "أعزائي الكرام، السلام عليكم ورحمة الله وبركاته،",
    paras: [
      "منذ أن عرفت البشرية قيمة الحديد في تنمية مجتمعاتها وقدرته الهائلة لصناعة الفرق بين الممكن والمستحيل، ازدهرت المنتجات والحلول والابتكارات معتمدة عليه كمدخل أساسي في نهضتها، فمن الملعقة على مائدة الطعام إلى المحركات النفاثة تجوب الفضاء، ومن المنزل الريفي الصغير إلى السدود العملاقة والجسور وغيرها.",
      "فالحديد يشكل منتجاً استهلاكياً عالي القيمة والعائد التنموي في حياتنا، فمنذ أصبح الحديد ليناً قابلاً للطرق والتشكيل والسحب اكتسب قيمته الحقيقية، فليست الصلابة وحدها ما تجعل له قيمة بل والليونة أيضاً.",
      "شركة إعمار تأمل أن تطوع الحديد لعملائها وتساهم في بناء وطن معطاء يسوده النماء والرخاء والوفاء في ظل قيادتها الرشيدة.",
      "إننا في إعمار نتطلع لتوسيع نشاطنا في المملكة وفق أفضل الممارسات التي تلبي رغبات عملائنا ونحقق المنافع المتبادلة لمستثمرينا وشركائنا.",
    ],
    readMore: "إقرأ المزيد",
    readLess: "إخفاء",
    name: "أ. عبدالرحمن بن إبراهيم العضيبي",
    role: "رئيس مجلس الإدارة",
  },
  en: {
    eyebrow: "Emaar Metallic for Iron",
    title: "Chairman's Message",
    quote: "Since humanity discovered the value of iron in building civilizations…",
    greeting: "Dear Valued Partners and Clients,",
    paras: [
      "Since humanity discovered the value of iron in building civilizations and its remarkable capacity to bridge the gap between the possible and the impossible, products, solutions, and innovations have flourished — all relying on it as a fundamental input in their development. From the spoon on the dining table to jet engines soaring through space, from the small rural home to giant dams, bridges, and beyond.",
      "Iron is a high-value consumer product with an immense developmental return in our lives. Since iron became malleable — capable of being forged, shaped, and drawn — it gained its true value. For it is not hardness alone that gives it worth, but also its flexibility.",
      "Emaar aspires to make iron work for its clients and contribute to building a giving nation under its wise leadership, one characterized by growth, prosperity, and loyalty.",
      "At Emaar, we look forward to expanding our operations across the Kingdom in line with best practices that fulfill our clients' aspirations and achieve mutual benefits for our investors and partners.",
    ],
    readMore: "Read More",
    readLess: "Collapse",
    name: "Mr. Abdulrahman bin Ibrahim Al-Udaibi",
    role: "Chairman of the Board",
  },
};

export default function Chairman() {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-parchment py-24 border-t border-b border-gray-200">
      <div className="max-w-310 mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Text */}
          <div className="reveal">
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-700" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">{t.title}</h2>
            <div className="w-12 h-0.75 bg-forest-800 mb-8" />

            <div className={`chairman-body${expanded ? " expanded" : ""}`}>
              <blockquote className="font-display text-xl italic text-ink leading-relaxed mb-6 pr-5 border-r-4 border-forest-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-[14.5px] text-gray-500 leading-[1.95] mb-4">{t.greeting}</p>
              {t.paras.map((p, i) => (
                <p key={i} className="text-[14.5px] text-gray-500 leading-[1.95] mb-4">{p}</p>
              ))}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-5 inline-flex items-center gap-2 text-forest-700 text-[13px] font-semibold underline underline-offset-4 hover:text-forest-900 transition-colors bg-transparent border-none cursor-pointer font-body"
            >
              <span>{expanded ? t.readLess : t.readMore}</span>
              <span>{expanded ? "↑" : "↓"}</span>
            </button>
          </div>

          {/* Profile card */}
          <div className="reveal">
            <div className="bg-white border border-gray-200 overflow-hidden shadow-md">
              <div className="h-80 bg-forest-900 flex items-center justify-center text-[80px] text-white/5 relative">
                👔
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-forest-500" />
              </div>
              <div className="px-7 py-6">
                <p className="text-base font-bold text-ink mb-1">{t.name}</p>
                <p className="text-xs tracking-[2px] uppercase text-forest-700 font-semibold">{t.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
