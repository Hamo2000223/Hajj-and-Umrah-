import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PACKAGE_PRICE } from "@/lib/constants";

const inclusions = [
  "طيران مريح",
  "فنادق قريبة من الحرم",
  "وجبات كاملة (إفطار + غداء + عشاء)",
  "إشراف ديني وإداري",
  "نقل داخلي منظّم",
  "دعم على مدار الساعة",
];

export default function PricingCard() {
  return (
    <section id="pricing" className="overflow-visible bg-elite-navy py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold text-elite-gold">
            الباقة الشاملة
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            باقة العمرة — كل شيء مشمول
          </h2>
        </div>

        <FadeIn className="overflow-visible">
          <div className="overflow-visible rounded-3xl border-2 border-elite-gold bg-elite-navy px-6 py-10 sm:px-12 sm:py-12">
            <div className="mb-8 flex justify-center">
              <span className="inline-block rounded-full bg-elite-gold px-6 py-2 text-sm font-bold leading-none text-elite-navy">
                الأكثر طلباً
              </span>
            </div>

            <div className="mb-8 text-center">
              <p className="mb-2 text-lg text-white/80">باقة العمرة الشاملة</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-extrabold text-elite-gold sm:text-6xl">
                  {PACKAGE_PRICE.toLocaleString("ar-EG")}
                </span>
                <span className="text-xl font-bold text-white">جنيه</span>
              </div>
            </div>

            <div className="mb-10 flex justify-center">
              <ul className="space-y-4 text-right">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg text-white"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-elite-gold/20 text-sm text-elite-gold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <WhatsAppButton
                label={`احجز الآن — ${PACKAGE_PRICE.toLocaleString("ar-EG")} جنيه فقط`}
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
