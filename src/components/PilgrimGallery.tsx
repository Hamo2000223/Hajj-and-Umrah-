import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

const photos = [
  {
    src: "/pilgrim-airport.png",
    alt: "معتمرون من إيليت على مدرج الطائرة قبل السفر",
    caption: "بداية الرحلة — طيران مريح بإذن الله",
    className: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[420px]",
  },
  {
    src: "/pilgrim-mecca.png",
    alt: "معتمرون من إيليت في مكة المكرمة",
    caption: "في رحاب مكة المكرمة",
    className: "min-h-[240px] md:min-h-[200px]",
  },
  {
    src: "/pilgrim-tawhid.png",
    alt: "معتمر سعيد أثناء رحلة العمرة",
    caption: "فرحة ما بعدها فرحة",
    className: "min-h-[240px] md:min-h-[200px]",
  },
  {
    src: "/pilgrim-companions.png",
    alt: "صحبة طيبة من معتمري إيليت",
    caption: "صحبة طيبة من أهل البلد",
    className: "md:col-span-3 min-h-[240px] md:min-h-[260px]",
  },
];

export default function PilgrimGallery() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold text-elite-red">
              لقطات من الرحلة
            </p>
            <h2 className="text-3xl font-extrabold text-elite-navy sm:text-4xl">
              وجوه من أسوان وإدفو… وصلت للحرم
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              دول مش صور إعلانات — دول معتمرين سافروا مع إيليت، بقلوب مطمئنة
              وصحبة طيبة
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {photos.map((photo, index) => (
            <FadeIn
              key={photo.src}
              delay={index * 120}
              className={`h-full ${photo.className}`}
            >
              <figure className="group relative h-full min-h-[240px] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-elite-navy/90 via-elite-navy/40 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-10 text-center">
            <WhatsAppButton
              label="عايز تبقى في الصورة الجاية؟ تواصل واتساب"
              variant="primary"
              size="lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
