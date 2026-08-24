import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    text: "معتمرين شركة إيليت من أبيار على، إلى مكة المكرمة، مع أجمل صحبة بإذن الله لأداء أول عمرة بفضل الله. اللهم تقبلها منا واجعلها خالصة لوجهك الكريم.",
    badge: "معتمرون من أبيار على",
    image: "/pilgrim-mecca.png",
    alt: "معتمرون من إيليت في مكة",
  },
  {
    text: "الإشراف مع إيليت متميز — إشراف ديني وإشراف إداري. يعني مع إيليت هتأدي عمرتك على خطى الحبيب، وقلبك مرتاح من أول ما تسافر.",
    badge: "من أهل أسوان",
    image: "/pilgrim-tawhid.png",
    alt: "معتمر من إيليت أثناء الرحلة",
  },
  {
    text: "رحلة روحانية ما تتنسيش — من لحظة ما سجلنا لحد ما رجعنا، كل حاجة كانت منظمة ومحترمة. جزاكم الله خيراً يا إيليت.",
    badge: "من أهل إدفو",
    image: "/pilgrim-companions.png",
    alt: "صحبة طيبة من معتمري إيليت",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-elite-navy py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold text-elite-gold">
              تجارب معتمرينا
            </p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              كلام من قلب المعتمرين
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              معتمرون من أبيار على سافروا مع إيليت
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.badge} delay={index * 150}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="relative h-52 w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elite-navy/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-6 flex-1 leading-relaxed text-white/90">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <span className="inline-block self-start rounded-full bg-elite-gold/20 px-4 py-1.5 text-sm font-semibold text-elite-gold">
                    {item.badge}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
