export default function News() {
  return (
    <section className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-14">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-700" />
              آخر الأخبار لدى ملان
            </p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">
              الأخبار
            </h2>
            <div className="w-12 h-[3px] bg-forest-800" />
          </div>
          <a
            href="https://molansteel.com/news/"
            className="inline-flex items-center gap-2 bg-transparent text-forest-800 border-2 border-forest-800 px-6 py-3 text-[13.5px] font-semibold rounded-sm hover:bg-forest-800 hover:text-white transition-all duration-200 font-body"
          >
            جميع الأخبار
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
                📅 14 مايو 2023
              </p>
              <h3 className="text-lg font-bold text-ink leading-snug mb-5">
                فتح فرع جديد في مدينة الدمام
              </h3>
              <a
                href="https://molansteel.com/news/افتتاح-فرعنا-الجديد-بالدمام/"
                className="inline-flex items-center gap-2 text-forest-700 text-[13px] font-semibold hover:gap-4 hover:text-forest-900 transition-all duration-200 font-body"
              >
                تفاصيل الخبر <span>←</span>
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
                  📅 9 مايو 2023
                </p>
                <h3 className="text-[13.5px] font-bold text-ink leading-snug mb-4">
                  إعلان شركة ملان لمنتجات الحديد عن دعوة مساهميها إلى حضور
                  اجتماع الجمعية العامة العادية
                </h3>
                <a
                  href="https://molansteel.com/news/إعلان-شركة-ملان/"
                  className="inline-flex items-center gap-2 text-forest-700 text-[12px] font-semibold hover:gap-3 hover:text-forest-900 transition-all duration-200 font-body"
                >
                  تفاصيل الخبر <span>←</span>
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="news-card border-[1.5px] border-dashed border-gray-200 flex items-center justify-center min-h-[120px] hover:border-forest-800 hover:bg-forest-50 transition-all duration-300 cursor-pointer">
              <div className="text-center p-8">
                <p className="text-[13.5px] text-gray-400 mb-4">
                  اطّلع على جميع الأخبار والتحديثات
                </p>
                <a
                  href="https://molansteel.com/news/"
                  className="inline-flex items-center gap-2 bg-forest-800 text-white px-6 py-2.5 text-sm font-semibold rounded-sm hover:bg-forest-900 transition-colors font-body"
                >
                  جميع الأخبار
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
