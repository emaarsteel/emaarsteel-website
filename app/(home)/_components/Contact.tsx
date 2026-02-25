"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    eyebrow: "مستعدون للرد على استفساراتكم",
    title: "تواصل معنا",
    fields: {
      name: { label: "الاسم", placeholder: "الاسم كاملاً" },
      email: { label: "البريد الإلكتروني", placeholder: "email@example.com" },
      subject: { label: "الموضوع", placeholder: "موضوع الرسالة" },
      message: { label: "الرسالة", placeholder: "اكتب رسالتك هنا..." },
      submit: "إرسال الرسالة →",
    },
    infoEyebrow: "بيانات التواصل",
    infoTitle: "معلومات الاتصال",
    phone: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    riyadh: "الرياض",
    riyadhAddr: "الرياض - السلي - شارع هارون الرشيد",
    jeddah: "جدة",
    jeddahAddr: "جدة - حي الجوهرة - خلف الفحص الدوري",
  },
  en: {
    eyebrow: "We're ready to answer your inquiries",
    title: "Contact Us",
    fields: {
      name: { label: "Name", placeholder: "Full Name" },
      email: { label: "Email", placeholder: "email@example.com" },
      subject: { label: "Subject", placeholder: "Message subject" },
      message: { label: "Message", placeholder: "Write your message here..." },
      submit: "Send Message →",
    },
    infoEyebrow: "Contact Details",
    infoTitle: "Contact Information",
    phone: "Phone",
    emailLabel: "Email",
    riyadh: "Riyadh",
    riyadhAddr: "Riyadh - Al-Sali - Harun Al-Rashid St.",
    jeddah: "Jeddah",
    jeddahAddr: "Jeddah - Al-Jawharah District - Behind Periodic Inspection",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="contact" className="border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Form */}
        <div className="bg-white px-16 py-20 reveal">
          <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
            <span className="w-7 h-0.5 bg-forest-700" />
            {t.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold text-ink mb-3">{t.title}</h2>
          <div className="w-12 h-0.75 bg-forest-800 mb-8" />

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                  {t.fields.name.label}
                </label>
                <input
                  type="text"
                  placeholder={t.fields.name.placeholder}
                  required
                  className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                  {t.fields.email.label}
                </label>
                <input
                  type="email"
                  placeholder={t.fields.email.placeholder}
                  required
                  className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                {t.fields.subject.label}
              </label>
              <input
                type="text"
                placeholder={t.fields.subject.placeholder}
                required
                className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[1px] uppercase font-semibold text-gray-600 mb-2">
                {t.fields.message.label}
              </label>
              <textarea
                placeholder={t.fields.message.placeholder}
                rows={5}
                required
                className="w-full bg-parchment border border-gray-200 text-ink px-4 py-3.5 text-sm font-body rounded-sm resize-vertical transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-3 bg-forest-800 text-white border-2 border-forest-800 px-8 py-3.5 text-sm font-bold rounded-sm hover:bg-transparent hover:text-forest-800 transition-all duration-200 font-body"
            >
              {t.fields.submit}
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="bg-[#0a0a0a] px-14 py-20 flex flex-col gap-8 reveal">
          <div>
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-300" />
              {t.infoEyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold text-white mb-3">{t.infoTitle}</h2>
            <div className="w-12 h-0.75 bg-forest-500" />
          </div>

          <div className="flex flex-col gap-6 mt-2">
            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 shrink-0 bg-white/4 border border-white/10 flex items-center justify-center rounded-sm text-base">📞</div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{t.phone}</h4>
                <a href="tel:+966530018050" className="text-sm text-white/40 hover:text-forest-300 transition-colors">+966530018050</a>
              </div>
            </div>
            <div className="h-px bg-white/6" />

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 shrink-0 bg-white/4 border border-white/10 flex items-center justify-center rounded-sm text-base">✉️</div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{t.emailLabel}</h4>
                <a href="mailto:info@emaarsteel.com" className="text-sm text-white/40 hover:text-forest-300 transition-colors">info@emaarsteel.com</a>
              </div>
            </div>
            <div className="h-px bg-white/6" />

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 shrink-0 bg-white/4 border border-white/10 flex items-center justify-center rounded-sm text-base">📍</div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{t.riyadh}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{t.riyadhAddr}</p>
              </div>
            </div>
            <div className="h-px bg-white/6" />

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 shrink-0 bg-white/4 border border-white/10 flex items-center justify-center rounded-sm text-base">📍</div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{t.jeddah}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{t.jeddahAddr}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
