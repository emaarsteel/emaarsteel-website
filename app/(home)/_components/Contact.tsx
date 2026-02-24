"use client";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Form */}
        <div className="bg-white px-16 py-20 reveal">
          <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
            <span className="w-7 h-0.5 bg-forest-700" />
            مستعدون للرد على استفسارتكم
          </p>
          <h2 className="font-display text-4xl font-bold text-ink mb-3">
            تواصل معنا
          </h2>
          <div className="w-12 h-[3px] bg-forest-800 mb-8" />

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  placeholder="الاسم كاملاً"
                  required
                  className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                الموضوع
              </label>
              <input
                type="text"
                placeholder="موضوع الرسالة"
                required
                className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                الرسالة
              </label>
              <textarea
                placeholder="اكتب رسالتك هنا..."
                rows={5}
                required
                className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm resize-vertical transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-3 bg-forest-800 text-white border-2 border-forest-800 px-8 py-3.5 text-sm font-bold rounded-sm hover:bg-transparent hover:text-forest-800 transition-all duration-200 font-body"
            >
              إرسال الرسالة →
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="bg-[#0a0a0a] px-14 py-20 flex flex-col gap-8 reveal">
          <div>
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-300" />
              بيانات التواصل
            </p>
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              معلومات الاتصال
            </h2>
            <div className="w-12 h-[3px] bg-forest-500" />
          </div>

          <div className="flex flex-col gap-6 mt-2">
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-white/[0.04] border border-white/10 flex items-center justify-center rounded-sm text-base">
                📞
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">الهاتف</h4>
                <a
                  href="tel:+966530018050"
                  className="text-sm text-white/40 hover:text-forest-300 transition-colors"
                >
                  966530018050+
                </a>
              </div>
            </div>
            <div className="h-px bg-white/[0.06]" />

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-white/[0.04] border border-white/10 flex items-center justify-center rounded-sm text-base">
                ✉️
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  البريد الإلكتروني
                </h4>
                <a
                  href="mailto:info@molansteel.com"
                  className="text-sm text-white/40 hover:text-forest-300 transition-colors"
                >
                  info@molansteel.com
                </a>
              </div>
            </div>
            <div className="h-px bg-white/[0.06]" />

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-white/[0.04] border border-white/10 flex items-center justify-center rounded-sm text-base">
                📍
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">الرياض</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  الرياض - السلي - شارع هارون الرشيد
                </p>
              </div>
            </div>
            <div className="h-px bg-white/[0.06]" />

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 flex-shrink-0 bg-white/[0.04] border border-white/10 flex items-center justify-center rounded-sm text-base">
                📍
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">جدة</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  جدة - حي الجوهرة - خلف الفحص الدوري
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
