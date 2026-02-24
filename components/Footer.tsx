const strengths = [
  "القدرة على توفير منتجات الحديد بأسعار تنافسية",
  "توفير المنتجات الحديدية المتخصصة",
  "تحقيق متطلبات العملاء وفق مواصفات الطلب",
  "ثقة العملاء الناتجة عن حوكمة العمليات الداخلية",
  "التدفقات النقدية الحرة",
];

const contactItems = [
  { icon: "📞", text: "966530018050+" },
  { icon: "✉️", text: "info@molansteel.com" },
  { icon: "📍", text: "الرياض - السلي - شارع هارون الرشيد" },
  { icon: "📍", text: "جدة - حي الجوهرة - خلف الفحص الدوري" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/molansteel.co",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/MolanSteel_co",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/molansteel.co/",
    icon: (
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    href: "https://api.whatsapp.com/send?phone=+966530018050",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/molansteelco/",
    icon: (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1.2fr_1.4fr_1fr] gap-14 px-14 py-16 border-b border-white/[0.06]">
        {/* Brand */}
        <div className="reveal">
          <p className="text-[11px] tracking-[3px] uppercase text-white/30 font-semibold mb-5 pb-3 border-b border-white/[0.07]">
            الشركة
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-forest-800 flex items-center justify-center text-white font-bold text-sm rounded-sm">
              م
            </div>
            <span className="text-lg font-extrabold text-white">مُلان</span>
          </div>
          <p className="text-[13px] text-white/35 leading-[1.85]">
            تعتبر شركة ملان مورد رائد وشامل لمنتجات الحديد المطلوبة في بناء
            وتصنيع وتجارة الحديد في داخل المملكة وخارجها.
          </p>
        </div>

        {/* Strengths */}
        <div className="reveal">
          <p className="text-[11px] tracking-[3px] uppercase text-white/30 font-semibold mb-5 pb-3 border-b border-white/[0.07]">
            الميزات التنافسية
          </p>
          <ul className="list-none space-y-1">
            {strengths.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-[12.5px] text-white/35 py-1.5 ${
                  i < strengths.length - 1 ? "border-b border-white/[0.04]" : ""
                } leading-relaxed`}
              >
                <span className="text-forest-700 text-xs flex-shrink-0 mt-0.5">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="reveal">
          <p className="text-[11px] tracking-[3px] uppercase text-white/30 font-semibold mb-5 pb-3 border-b border-white/[0.07]">
            بيانات التواصل
          </p>
          <div className="space-y-3.5">
            {contactItems.map(({ icon, text }, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-8 h-8 flex-shrink-0 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs">
                  {icon}
                </div>
                <span className="text-[12.5px] text-white/35 leading-relaxed">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="reveal">
          <p className="text-[11px] tracking-[3px] uppercase text-white/30 font-semibold mb-5 pb-3 border-b border-white/[0.07]">
            عنواننا
          </p>
          <div className="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=24.65326120618372,46.81425817442438&t=m&z=10&output=embed&iwloc=near"
              title="موقع ملان"
              loading="lazy"
              className="w-full h-40 border-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-14 py-6">
        <p className="text-[11.5px] text-white/25">
          © 2025 ملان لمنتجات الحديد — جميع الحقوق محفوظة.
        </p>
        <div className="flex items-center gap-1.5">
          {socialLinks.map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-white/30 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
