"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ar: {
    eyebrow: "تعرف على شركة إعمار",
    title: "من نحن",
    para1: "إعمار المعدنية هي شركة رائدة في تجارة وتشكيل الصاج المضلع (الشينكو)، تأسست في عام 2020م لدعم احتياجات مواد البناء والتشييد لدى الأفراد والمؤسسات والشركات عن طريق شبكة واسعة من منافذ البيع في المملكة العربية السعودية.",
    para2: "نهدف إلى تقديم منتجات أفضل من شأنها تعزيز مستويات معيشة ورفاهية المجتمع والحفاظ على المنافع المتبادلة مع العملاء وذلك من خلال الاستجابة لمتطلباتهم بأسعار تنافسية وجودة عالية.",
    badges: [
      { icon: "📅", label: "تأسست 2020" },
      { icon: "📍", label: "المملكة العربية السعودية" },
      { icon: "✔", label: "جودة عالية" },
      { icon: "🚚", label: "شبكة توزيع واسعة" },
    ],
  },
  en: {
    eyebrow: "About Emaar",
    title: "About Us",
    para1: "Emaar Metallic is a leading company in the trade and forming of corrugated sheets (Shinko). Founded in 2020, the company was established to support the construction and building material needs of individuals, institutions, and companies through a wide network of sales outlets across the Kingdom of Saudi Arabia.",
    para2: "We aim to deliver superior products that enhance community living standards and well-being, while maintaining mutual benefits with our clients by responding to their needs with competitive prices and high quality.",
    badges: [
      { icon: "📅", label: "Est. 2020" },
      { icon: "📍", label: "Saudi Arabia" },
      { icon: "✔", label: "High Quality" },
      { icon: "🚚", label: "Wide Distribution" },
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-310 mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image placeholder */}
          <div className="reveal-r relative h-120 bg-forest-900 overflow-hidden rounded-sm">
            <div className="bg-grid-forest absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center text-[100px] opacity-[0.08]">
              🏗️
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-1.5 bg-forest-500" />
            <div className="absolute top-6 left-6 w-14 h-14 border-t-2 border-l-2 border-white/15" />
          </div>

          {/* Text */}
          <div className="reveal">
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-700" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">{t.title}</h2>
            <div className="w-12 h-0.75 bg-forest-800 mb-6" />
            <p className="text-[15px] text-gray-500 leading-[1.9]">{t.para1}</p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mt-4">{t.para2}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {t.badges.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-3 bg-forest-50 border border-forest-100 border-r-[3px] border-r-forest-800"
                >
                  <span>{icon}</span>
                  <span className="text-xs font-semibold text-forest-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
