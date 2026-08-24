import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HERO_IMAGE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="معتمرون من إيليت في رحاب مكة المكرمة"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-elite-navy/90 via-elite-navy/80 to-elite-navy/95" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-8 rounded-2xl bg-white p-3 shadow-lg">
          <Image
            src="/elite-logo.png"
            alt="إيليت للسياحة - Elite Tours"
            width={370}
            height={160}
            priority
            unoptimized
            className="h-auto w-56 sm:w-72"
          />
        </div>

        <p className="mb-4 text-sm font-medium tracking-wide text-elite-gold sm:text-base">
          الحج والعمرة — لأهل أسوان وإدفو والقرى
        </p>

        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          من أبيار على… إلى مكة المكرمة
          <span className="mt-3 block text-elite-gold">
            أدِّ عمرتك على خطى الحبيب بإذن الله
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          إشراف ديني وإداري مع إيليت — صحبة طيبة وأجواء روحانية
          <br className="hidden sm:block" />
          لأهل أسوان وإدفو والقرى المجاورة
        </p>

        <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton
            label="احجز مكانك الآن"
            variant="primary"
            size="lg"
          />
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            اعرف تفاصيل الباقة
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3">
          <div className="flex -space-x-3 space-x-reverse">
            {[
              { src: "/pilgrim-mecca.png", alt: "معتمر في مكة" },
              { src: "/pilgrim-tawhid.png", alt: "معتمر سعيد" },
              { src: "/pilgrim-companions.png", alt: "صحبة المعتمرين" },
              { src: "/pilgrim-airport.png", alt: "معتمرون قبل السفر" },
            ].map((photo) => (
              <span
                key={photo.src}
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-white/80 sm:text-base">
            أهل أسوان وإدفو سافروا معانا… وأنت كمان بإذن الله
          </p>
        </div>
      </div>
    </section>
  );
}
