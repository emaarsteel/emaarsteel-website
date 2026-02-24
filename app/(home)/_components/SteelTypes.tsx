const row1 = [
  { icon: "🔳", label: "الواح صاج اسود" },
  { icon: "📋", label: "صاج مبزر للبيع الواح" },
  { icon: "🔲", label: "ألواح صاج حديد رولات المزيت" },
  { icon: "🌀", label: "سعر لوح صاج مجلفن ورولات" },
  { icon: "🔄", label: "رول صاج حديد مدهون" },
  { icon: "📐", label: "اسعار جسور الحديد أي بيم" },
];

const row2 = [
  { icon: "▬", label: "الواح حديد للبيع مبسط" },
  { icon: "⚙️", label: "بيبات حديد للبيع مواسير" },
  { icon: "⬜", label: "تيوب حديد للبيع فوراغ" },
  { icon: "📐", label: "زوايا حديد للبيع" },
];

export default function SteelTypes() {
  return (
    <section id="steel" className="bg-parchment py-24 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-14">
        <div className="reveal mb-10">
          <p className="flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-forest-700 font-semibold mb-3">
            <span className="w-7 h-0.5 bg-forest-700" />
            تشمل أنواع الحديد التالي
          </p>
          <h2 className="font-display text-4xl font-bold text-ink mb-4">
            أنواع الحديد
          </h2>
          <div className="w-12 h-[3px] bg-forest-800 mb-3" />
          <p className="text-[15px] text-gray-400">
            شركتنا تورد جميع أنواع الحديد التجاري والصناعي.
          </p>
        </div>

        <div className="reveal border border-gray-200 overflow-hidden">
          {/* Row 1 */}
          <div className="grid grid-cols-3 md:grid-cols-6 border-b border-gray-200">
            {row1.map(({ icon, label }, i) => (
              <div
                key={label}
                className={`steel-cell bg-white p-6 text-center ${
                  i < row1.length - 1 ? "border-l border-gray-200" : ""
                } hover:bg-forest-50 transition-colors overflow-hidden`}
              >
                <span className="block text-3xl mb-2 opacity-70">{icon}</span>
                <h4 className="text-[11px] font-semibold text-gray-600 leading-snug">
                  {label}
                </h4>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 md:grid-cols-6">
            {row2.map(({ icon, label }, i) => (
              <div
                key={label}
                className={`steel-cell bg-white p-6 text-center ${
                  i < row2.length - 1 ? "border-l border-gray-200" : ""
                } hover:bg-forest-50 transition-colors overflow-hidden`}
              >
                <span className="block text-3xl mb-2 opacity-70">{icon}</span>
                <h4 className="text-[11px] font-semibold text-gray-600 leading-snug">
                  {label}
                </h4>
              </div>
            ))}
            <div className="bg-forest-900 p-6 text-center border-l border-gray-200 flex items-center justify-center">
              <h4 className="text-[11px] font-semibold text-forest-300 leading-snug">
                وغيرها من الأصناف..
              </h4>
            </div>
            <div className="bg-forest-800 p-6 text-center flex items-center justify-center hover:bg-forest-900 transition-colors">
              <a
                href="#contact"
                className="text-white text-[12px] font-bold font-body hover:text-forest-200 transition-colors"
              >
                اطلب عرض سعر ←
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
