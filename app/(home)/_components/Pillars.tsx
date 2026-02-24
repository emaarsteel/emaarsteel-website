const strengths = [
  "القدرة على توفير منتجات الحديد بأسعار تنافسية",
  "توفير المنتجات الحديدية المتخصصة",
  "تحقيق متطلبات العملاء وفق مواصفات الطلب",
  "ثقة العملاء الناتجة عن حوكمة العمليات الداخلية",
  "التدفقات النقدية الحرة",
];

export default function Pillars() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Vision */}
        <div className="pillar relative p-14 border border-gray-200 border-t-0 border-r-0 hover:bg-forest-50 transition-colors group">
          <div className="pillar-bar rounded-sm" />
          <span className="font-display text-[72px] font-bold text-forest-100 leading-none block mb-5 select-none">
            01
          </span>
          <h3 className="text-lg font-bold text-ink mb-4">الرؤية</h3>
          <p className="text-[13.5px] text-gray-500 leading-[1.85]">
            إعمار الشريك الأول لتوريد الحديد.
          </p>
        </div>

        {/* Strengths */}
        <div className="pillar relative p-14 border border-gray-200 border-t-0 border-r-0 hover:bg-forest-50 transition-colors group">
          <div className="pillar-bar rounded-sm" />
          <span className="font-display text-[72px] font-bold text-forest-100 leading-none block mb-5 select-none">
            02
          </span>
          <h3 className="text-lg font-bold text-ink mb-4">
            نواحي القوة والميزات التنافسية
          </h3>
          <ul className="list-none space-y-0">
            {strengths.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-2.5 text-[13.5px] text-gray-500 py-2 ${
                  i < strengths.length - 1 ? "border-b border-gray-100" : ""
                } leading-relaxed`}
              >
                <span className="text-forest-600 font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mission */}
        <div className="pillar relative p-14 border border-gray-200 border-t-0 border-r-0 border-l-0 hover:bg-forest-50 transition-colors group">
          <div className="pillar-bar rounded-sm" />
          <span className="font-display text-[72px] font-bold text-forest-100 leading-none block mb-5 select-none">
            03
          </span>
          <h3 className="text-lg font-bold text-ink mb-4">الرسالة</h3>
          <p className="text-[13.5px] text-gray-500 leading-[1.85]">
            شركة سعودية متخصصة في توريد منتجات الحديد لشركائها في قطاع الأعمال
            داخل المملكة وخارجها بجودة وموثوقية وأسعار تنافسية من خلال فريق
            عمل محترف ضمن بيئة عمل جاذبة.
          </p>
        </div>
      </div>
    </section>
  );
}
