"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    eyebrow: "آخر الأخبار لدى إعمار",
    title: "الأخبار",
    viewAll: "جميع الأخبار",
    news1: { date: "14 مايو 2023", title: "فتح فرع جديد في مدينة الدمام", link: "https://emaarsteel.com/news/افتتاح-فرعنا-الجديد-بالدمام/", more: "تفاصيل الخبر" },
    news2: { date: "9 مايو 2023", title: "إعلان شركة إعمار لمنتجات الحديد عن دعوة مساهميها إلى حضور اجتماع الجمعية العامة العادية", link: "https://emaarsteel.com/news/إعلان-شركة-إعمار/", more: "تفاصيل الخبر" },
    ctaText: "اطّلع على جميع الأخبار والتحديثات",
    ctaBtn: "جميع الأخبار",
  },
  en: {
    eyebrow: "Latest News from Emaar",
    title: "News",
    viewAll: "View All News",
    news1: { date: "May 14, 2023", title: "Opening of a New Branch in Dammam", link: "https://emaarsteel.com/news/افتتاح-فرعنا-الجديد-بالدمام/", more: "Read More" },
    news2: { date: "May 9, 2023", title: "Emaar Metallic Announces Invitation to Shareholders for the Ordinary General Assembly Meeting", link: "https://emaarsteel.com/news/إعلان-شركة-إعمار/", more: "Read More" },
    ctaText: "Browse all news and updates",
    ctaBtn: "View All News",
  },
};

export default function News() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-310 mx-auto px-14">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-700" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">{t.title}</h2>
            <div className="w-12 h-0.75 bg-forest-800" />
          </div>
          <a
            href="https://emaarsteel.com/news/"
            className="inline-flex items-center gap-2 bg-transparent text-forest-800 border-2 border-forest-800 px-6 py-3 text-[13.5px] font-semibold rounded-sm hover:bg-forest-800 hover:text-white transition-all duration-200 font-body"
          >
            {t.viewAll}
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-7 reveal">
          {/* Main news */}
          <div className="news-card bg-white border border-gray-200 overflow-hidden">
            <div className="h-60 bg-forest-900 flex items-center justify-center text-[64px] text-white/5 relative">
              🏭
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-forest-500" />
            </div>
            <div className="p-7">
              <p className="text-[11px] tracking-[2px] uppercase text-forest-700 font-semibold mb-3 flex items-center gap-2">
                📅 {t.news1.date}
              </p>
              <h3 className="text-lg font-bold text-ink leading-snug mb-5">{t.news1.title}</h3>
              <a
                href={t.news1.link}
                className="inline-flex items-center gap-2 text-forest-700 text-[13px] font-semibold hover:gap-4 hover:text-forest-900 transition-all duration-200 font-body"
              >
                {t.news1.more} <span>←</span>
              </a>
            </div>
          </div>

          {/* Side column */}
          <div className="flex flex-col gap-7">
            <div className="news-card bg-white border border-gray-200 overflow-hidden flex flex-col flex-1">
              <div className="h-32 bg-[#111] flex items-center justify-center text-[40px] text-white/5 relative">
                📋
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-forest-500" />
              </div>
              <div className="p-5 flex-1">
                <p className="text-[11px] tracking-[2px] uppercase text-forest-700 font-semibold mb-2 flex items-center gap-1.5">
                  📅 {t.news2.date}
                </p>
                <h3 className="text-[13.5px] font-bold text-ink leading-snug mb-4">{t.news2.title}</h3>
                <a
                  href={t.news2.link}
                  className="inline-flex items-center gap-2 text-forest-700 text-[12px] font-semibold hover:gap-3 hover:text-forest-900 transition-all duration-200 font-body"
                >
                  {t.news2.more} <span>←</span>
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="news-card border-[1.5px] border-dashed border-gray-200 flex items-center justify-center min-h-30 hover:border-forest-800 hover:bg-forest-50 transition-all duration-300 cursor-pointer">
              <div className="text-center p-8">
                <p className="text-[13.5px] text-gray-400 mb-4">{t.ctaText}</p>
                <a
                  href="https://emaarsteel.com/news/"
                  className="inline-flex items-center gap-2 bg-forest-800 text-white px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-forest-900 transition-colors font-body"
                >
                  {t.ctaBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
