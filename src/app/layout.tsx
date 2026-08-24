import type { Metadata } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hajj-and-umrah-three.vercel.app"),
  title: "عمرة وحج مع إيليت للسياحة — أسوان وإدفو | 48000 جنيه",
  description:
    "احجز رحلة العمرة مع إيليت للسياحة — 48000 جنيه تشمل طيران مريح، فنادق قريبة من الحرم، وجبات كاملة، وإشراف ديني وإداري. لأهل أسوان وإدفو والقرى.",
  keywords: [
    "عمرة",
    "حج",
    "إيليت للسياحة",
    "أسوان",
    "إدفو",
    "أبيار على",
    "رحلات عمرة",
    "48000 جنيه",
  ],
  openGraph: {
    title: "عمرة وحج مع إيليت للسياحة — أسوان وإدفو",
    description:
      "أدِّ عمرتك على خطى الحبيب بإذن الله — باقة شاملة 48000 جنيه. تواصل عبر واتساب أو الاتصال من الموقع.",
    locale: "ar_EG",
    type: "website",
    siteName: "إيليت للسياحة",
    images: [
      {
        url: "/elite-logo.png",
        width: 800,
        height: 400,
        alt: "إيليت للسياحة - Elite Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "عمرة وحج مع إيليت للسياحة",
    description: "باقة عمرة شاملة 48000 جنيه — أسوان وإدفو",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
