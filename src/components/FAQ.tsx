"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PACKAGE_PRICE } from "@/lib/constants";

const faqs = [
  {
    question: "كم سعر باقة العمرة؟",
    answer: `باقة العمرة الشاملة بـ ${PACKAGE_PRICE.toLocaleString("ar-EG")} جنيه — تشمل الطيران والفندق والوجبات والإشراف الديني والإداري.`,
  },
  {
    question: "هل الوجبات مشمولة؟",
    answer:
      "نعم، الباقة تشمل وجبات كاملة يومياً: إفطار وغداء وعشاء للمعتمرين طوال مدة الإقامة.",
  },
  {
    question: "الفندق قريب من الحرم؟",
    answer:
      "نعم، نوفر فنادق قريبة من الحرم الشريف لراحتكم وسهولة الوصول للعبادة.",
  },
  {
    question: "كيف أحجز مكاني؟",
    answer:
      "اضغط زر واتساب أو زر الاتصال في الصفحة — فريقنا يرد عليك ويوضّحلك كل التفاصيل بدون أي تعقيد.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold text-elite-red">
              أسئلة شائعة
            </p>
            <h2 className="text-3xl font-extrabold text-elite-navy sm:text-4xl">
              عندك سؤال؟ إجاباتك هنا
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 100}>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-right font-bold text-elite-navy transition-colors hover:bg-gray-50"
                >
                  {faq.question}
                  <span
                    className={`mr-4 text-elite-red transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="mt-16 rounded-3xl bg-elite-navy p-8 text-center sm:p-12">
            <p className="mb-2 text-elite-gold">🕋</p>
            <h3 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
              مستني إيه؟ خطوتك الأولى للحرم تبدأ هنا
            </h3>
            <p className="mb-8 text-lg text-white/80">
              تواصل معنا الآن واحجز مكانك في الرحلة القادمة بإذن الله
            </p>
            <WhatsAppButton
              label="تواصل واتساب الآن — احجز مكانك"
              variant="primary"
              size="lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
