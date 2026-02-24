const stats = [
  { icon: "🏗️", value: "12+", label: "نوع من منتجات الحديد" },
  { icon: "🤝", value: "50+", label: "شريك موثوق" },
  { icon: "📍", value: "2", label: "فرع في المملكة" },
  { icon: "🏭", value: "8", label: "مجالات عمل متخصصة" },
];

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh]">
      {/* Left dark panel */}
      <div className="bg-forest-900 bg-grid-forest relative flex items-center px-16 py-24 overflow-hidden">
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-forest-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-forest-300" />
            <span className="text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold">
              ملان للحديد والصلب — المملكة العربية السعودية
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-3">
            مُلان
            <br />
            <span className="text-forest-300">Molan Steel</span>
          </h1>
          <p className="text-xl font-light text-white/55 leading-relaxed mb-11 border-r-4 border-forest-500 pr-4">
            الشريك الأول لتوريد الحديد.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-forest-500 text-white border-2 border-forest-500 px-8 py-3.5 text-sm font-semibold rounded-sm hover:bg-forest-700 hover:border-forest-700 transition-all duration-200 font-body"
            >
              تعرف علينا
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent text-white/80 border border-white/25 px-8 py-3.5 text-sm font-medium rounded-sm hover:border-white/60 hover:text-white transition-all duration-200 font-body"
            >
              اطلب خدمة
            </a>
          </div>
        </div>
      </div>

      {/* Right stats grid */}
      <div className="hidden md:grid grid-cols-2 bg-parchment">
        {stats.map(({ icon, value, label }) => (
          <div
            key={label}
            className="relative p-12 border border-gray-200 flex flex-col justify-end hover:bg-forest-50 transition-colors cursor-default"
          >
            <span className="absolute top-6 right-6 text-4xl opacity-[0.10]">
              {icon}
            </span>
            <span className="font-display text-5xl font-bold text-forest-800 leading-none mb-2">
              {value}
            </span>
            <span className="text-sm text-gray-400 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
