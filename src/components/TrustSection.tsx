import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

const trustCards = [
  {
    icon: "🕌",
    title: "إشراف ديني",
    description:
      "مرشدون دينيون يوجّهونك في مناسك العمرة خطوة بخطوة، على خطى الحبيب ﷺ",
  },
  {
    icon: "📋",
    title: "إشراف إداري",
    description:
      "تنظيم كامل للرحلة من لحظة التسجيل حتى العودة — راحة بالك مضمونة",
  },
  {
    icon: "🤝",
    title: "صحبة طيبة",
    description:
      "سافر مع أهل بلدك من أسوان وإدفو في أجواء إيمانية ومحبة بإذن الله",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold text-elite-red">
              لماذا إيليت؟
            </p>
            <h2 className="text-3xl font-extrabold text-elite-navy sm:text-4xl">
              مع إيليت هتأدي عمرتك على خطى الحبيب
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              شركة إيليت للسياحة — إشراف ديني متميز وإشراف إداري محترف
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {trustCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 150}>
              <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition-all duration-300 hover:border-elite-gold/40 hover:shadow-xl hover:shadow-elite-gold/10">
                <span className="mb-4 block text-5xl">{card.icon}</span>
                <h3 className="mb-3 text-xl font-bold text-elite-navy">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="mt-12 text-center">
            <WhatsAppButton
              label="اسألنا عن الرحلة القادمة"
              variant="primary"
              size="lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
