import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

const steps = [
  {
    number: "١",
    title: "التسجيل",
    description: "تواصل معنا على واتساب واحجز مكانك في الرحلة القادمة",
  },
  {
    number: "٢",
    title: "السفر",
    description: "انطلق من أسوان أو إدفو بإذن الله في رحلة جوية مريحة",
  },
  {
    number: "٣",
    title: "الإقامة",
    description: "استقر في فندق قريب من الحرم مع وجبات كاملة يومياً",
  },
  {
    number: "٤",
    title: "العمرة",
    description: "أدِّ مناسك العمرة بإشراف ديني على خطى الحبيب ﷺ",
  },
  {
    number: "٥",
    title: "العودة",
    description: "ارجع لأهلك بقلب مطمئن وذكرى لا تُنسى بإذن الله",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold text-elite-red">
              رحلة المعتمر
            </p>
            <h2 className="text-3xl font-extrabold text-elite-navy sm:text-4xl">
              من التسجيل إلى العودة
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-700">
              اللهم تقبلها منا واجعلها خالصة لوجهك الكريم
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                {index < steps.length - 1 && (
                  <div className="absolute right-5 top-12 h-[calc(100%-0.5rem)] w-0.5 bg-elite-gold/50" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-elite-red text-sm font-bold text-white">
                  {step.number}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="mb-1 text-xl font-bold text-elite-navy">
                    {step.title}
                  </h3>
                  <p className="text-base leading-8 text-gray-800">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <div className="relative h-[280px] sm:h-[380px] lg:h-[520px]">
              <Image
                src="/pilgrim-airport.png"
                alt="معتمرون من إيليت قبل صعود الطائرة"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-elite-navy/90 to-transparent p-6 text-white">
                <p className="text-sm font-semibold text-elite-gold">
                  لحظة السفر
                </p>
                <p className="mt-1 text-lg font-bold leading-relaxed">
                  من أرض الصعيد… إلى بيت الله الحرام
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center border-t border-gray-200 pt-12">
          <WhatsAppButton
            label="ابدأ رحلتك مع إيليت"
            variant="primary"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
