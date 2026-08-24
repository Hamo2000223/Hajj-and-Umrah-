import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

const features = [
  { icon: "✈️", title: "طيران مريح", desc: "رحلات جوية مريحة وآمنة" },
  { icon: "🏨", title: "فنادق قريبة", desc: "إقامة قريبة من الحرم الشريف" },
  { icon: "🍽️", title: "وجبات كاملة", desc: "إفطار وغداء وعشاء للمعتمرين" },
  { icon: "🕌", title: "إشراف ديني", desc: "توجيه في مناسك العمرة والحج" },
  { icon: "🚌", title: "نقل منظّم", desc: "تنقلات داخلية مريحة ومنظّمة" },
  { icon: "📞", title: "دعم 24/7", desc: "فريق متاح لمساعدتك طوال الرحلة" },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold text-elite-red">
              مميزات الرحلة
            </p>
            <h2 className="text-3xl font-extrabold text-elite-navy sm:text-4xl">
              كل ما تحتاجه في رحلة واحدة
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 100}>
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-elite-navy">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={700}>
          <div className="mt-12 text-center">
            <WhatsAppButton
              label="تواصل للاستفسار عن المواعيد"
              variant="primary"
              size="lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
