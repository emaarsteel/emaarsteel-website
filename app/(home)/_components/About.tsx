const badges = [
  { icon: "📍", label: "الرياض" },
  { icon: "📍", label: "جدة" },
  { icon: "✔", label: "جودة معتمدة" },
  { icon: "🚚", label: "توصيل سريع" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image placeholder */}
          <div className="reveal-r relative h-[480px] bg-forest-900 overflow-hidden rounded-sm">
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
              تعرف على شركة ملان
            </p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">
              عن الشركة
            </h2>
            <div className="w-12 h-[3px] bg-forest-800 mb-6" />
            <p className="text-[15px] text-gray-500 leading-[1.9]">
              تعتبر شركة ملان مورد رائد وشامل لمنتجات الحديد المطلوبة في البناء
              والتصنيع وتجارة الحديد في داخل المملكة وخارجها، ويقع مقر الشركة
              الرئيسي في المملكة العربية السعودية – الرياض.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.9] mt-4">
              وتعتبر الشركة رائدة في سوق الحديد ومنتجاته، وتسعى دائماً إلى
              تلبية احتياجات عملائها بأعلى معايير الجودة والموثوقية.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {badges.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-3 bg-forest-50 border border-forest-100 border-r-[3px] border-r-forest-800"
                >
                  <span>{icon}</span>
                  <span className="text-xs font-semibold text-forest-800">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
