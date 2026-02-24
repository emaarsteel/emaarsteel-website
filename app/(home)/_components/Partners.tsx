const partners = [
  "شركة الفوزان القابضة",
  "الراشد لمواد البناء",
  "شركة العرب - Arrab",
  "العجيمي للاستثمار",
  "مجموعة ماس",
  "شركة العضيبي",
  "Refcon",
  "مصنع المرجة",
  "بيسك للمعادن",
  "شركة حمد الصغير",
  "زيتاش العربية",
  "الشرق للصناعات",
];

export default function Partners() {
  return (
    <section id="clients" className="bg-forest-900 py-20">
      <div className="max-w-[1240px] mx-auto px-14">
        <div className="text-center reveal mb-10">
          <p className="text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold mb-3 flex items-center justify-center gap-3">
            تعرف على شركاء ملان
          </p>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            الشركاء
          </h2>
          <div className="w-12 h-[3px] bg-forest-500 mx-auto" />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-forest-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-forest-900 to-transparent pointer-events-none" />
        <div className="flex gap-3.5 carousel-track">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="partner-chip bg-white/5 border border-white/10 px-6 py-3.5 min-w-[170px] text-sm text-white/50 text-center whitespace-nowrap flex-shrink-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
