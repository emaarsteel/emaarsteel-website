"use client";

import { useState } from "react";

export default function Chairman() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-parchment py-24 border-t border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Text */}
          <div className="reveal">
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-700" />
              شركة ملان لمنتجات الحديد
            </p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">
              كلمة رئيس مجلس الإدارة
            </h2>
            <div className="w-12 h-[3px] bg-forest-800 mb-8" />

            <div className={`chairman-body${expanded ? " expanded" : ""}`}>
              <blockquote className="font-display text-xl italic text-ink leading-relaxed mb-6 pr-5 border-r-4 border-forest-800">
                &ldquo;منذ أن عرفت البشرية قيمة الحديد في تنمية
                مجتمعاتها…&rdquo;
              </blockquote>
              <p className="text-[14.5px] text-gray-500 leading-[1.95] mb-4">
                أعزائي الكرام، السلام عليكم ورحمة الله وبركاته،
              </p>
              <p className="text-[14.5px] text-gray-500 leading-[1.95] mb-4">
                منذ أن عرفت البشرية قيمة الحديد في تنمية مجتمعاتها وقدرته
                الهائلة لصناعة الفرق بين الممكن والمستحيل، ازدهرت المنتجات
                والحلول والابتكارات معتمدة عليه كمدخل أساسي في نهضتها، فمن
                الملعقة على مائدة الطعام إلى المحركات النفاثة تجوب الفضاء، ومن
                المنزل الريفي الصغير إلى السدود العملاقة والجسور وغيرها.
              </p>
              <p className="text-[14.5px] text-gray-500 leading-[1.95] mb-4">
                فالحديد يشكل منتجاً استهلاكياً عالي القيمة والعائد التنموي في
                حياتنا، فمنذ أصبح الحديد ليناً قابلاً للطرق والتشكيل والسحب
                اكتسب قيمته الحقيقية، فليست الصلابة وحدها ما تجعل له قيمة بل
                والليونة أيضاً.
              </p>
              <p className="text-[14.5px] text-gray-500 leading-[1.95] mb-4">
                شركة ملان تأمل أن تطوع الحديد لعملائها وتساهم في بناء وطن
                معطاء يسوده النماء والرخاء والوفاء في ظل قيادتها الرشيدة.
              </p>
              <p className="text-[14.5px] text-gray-500 leading-[1.95]">
                إننا في ملان نتطلع لتوسيع نشاطنا في المملكة وفق أفضل الممارسات
                التي تلبي رغبات عملائنا ونحقق المنافع المتبادلة لمستثمرينا
                وشركائنا.
              </p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-5 inline-flex items-center gap-2 text-forest-700 text-[13px] font-semibold underline underline-offset-4 hover:text-forest-900 transition-colors bg-transparent border-none cursor-pointer font-body"
            >
              <span>{expanded ? "إخفاء" : "إقرأ المزيد"}</span>
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
                <p className="text-base font-bold text-ink mb-1">
                  أ. عبدالرحمن بن إبراهيم العضيبي
                </p>
                <p className="text-xs tracking-[2px] uppercase text-forest-700 font-semibold">
                  رئيس مجلس الإدارة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
