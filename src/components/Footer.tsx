import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-elite-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <div className="rounded-2xl bg-white p-3">
          <Image
            src="/elite-logo.png"
            alt={COMPANY_NAME}
            width={370}
            height={160}
            unoptimized
            className="h-auto w-44"
          />
        </div>
        <p className="text-lg font-semibold text-white">
          {COMPANY_NAME} — أسوان
        </p>
        <WhatsAppButton label="تواصل معنا" variant="gold" size="md" />
        <p className="text-sm text-white/50">
          © 2026 {COMPANY_NAME}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
