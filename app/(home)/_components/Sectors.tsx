const sectors = [
  { icon: "🔌", label: "توريد الحديد لمصانع الرفوف" },
  { icon: "🏗️", label: "توريد الحديد لبناء المستودعات" },
  { icon: "❄️", label: "توريد الحديد لمصانع كيبل تري" },
  { icon: "🏢", label: "توريد الحديد لشركات المقاولات" },
  { icon: "💨", label: "توريد الحديد لمصانع دكت التكييف" },
  { icon: "⚙️", label: "توريد الحديد لمصانع تشكيل المعادن" },
  { icon: "🔧", label: "توريد الحديد لمصانع اللوحات الكهربائية" },
  { icon: "🏭", label: "توريد الحديد لمصانع الهياكل والإنشاءات" },
];

export default function Sectors() {
  return (
    <section id="sectors" className="bg-[#0d1a13] py-24">
      <div className="max-w-[1240px] mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-300 font-semibold mb-3">
              <span className="w-7 h-0.5 bg-forest-300" />
              تعرف على شركة ملان
            </p>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              مجالات العمل
            </h2>
            <div className="w-12 h-[3px] bg-forest-500 mb-6" />
            <p className="text-[15px] text-white/45 leading-[1.85] mb-9">
              تعتبر ملان مورد رائد وشامل لمنتجات الحديد في مختلف القطاعات
              الصناعية والإنشائية.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-forest-500 text-white border-2 border-forest-500 px-8 py-3.5 text-sm font-semibold rounded-sm hover:bg-forest-700 hover:border-forest-700 transition-all duration-200 font-body"
            >
              اطلب خدمة
            </a>
          </div>

          {/* Grid */}
          <div className="reveal grid grid-cols-4 border border-white/[0.07]">
            {sectors.map(({ icon, label }) => (
              <div
                key={label}
                className="group p-6 text-center border border-white/5 bg-white/[0.02] hover:bg-forest-900 hover:border-forest-500/35 transition-all duration-300 cursor-default"
              >
                <span className="block text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {icon}
                </span>
                <h4 className="text-[10.5px] text-white/40 group-hover:text-white/70 leading-relaxed transition-colors">
                  {label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
