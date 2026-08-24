import { CALL_URL, WHATSAPP_URL } from "@/lib/constants";

type WhatsAppButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "gold";
  size?: "md" | "lg";
  className?: string;
};

const variantStyles = {
  primary:
    "bg-elite-red text-white hover:bg-red-700 shadow-lg shadow-elite-red/30",
  secondary:
    "bg-white/10 text-white border-2 border-white/40 hover:bg-white/20 backdrop-blur-sm",
  gold: "bg-elite-gold text-elite-navy hover:bg-yellow-500 shadow-lg shadow-elite-gold/30",
};

const callStyles = {
  primary: "bg-white text-elite-red hover:bg-gray-100 border border-white/40",
  secondary: "bg-white text-elite-navy hover:bg-white/90",
  gold: "bg-elite-navy text-elite-gold hover:bg-slate-800 border border-elite-gold/50",
};

const sizeStyles = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const callSizeStyles = {
  md: "h-[52px] w-[52px]",
  lg: "h-[60px] w-[60px]",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02l-2.2 2.21z" />
    </svg>
  );
}

export default function WhatsAppButton({
  label,
  variant = "primary",
  size = "md",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <span className={`inline-flex max-w-full items-center justify-center gap-2 ${className}`}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 ${variantStyles[variant]} ${sizeStyles[size]}`}
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>{label}</span>
        <PhoneIcon className="h-5 w-5 shrink-0" />
      </a>
      <a
        href={CALL_URL}
        aria-label="اتصل بنا"
        title="اتصل بنا"
        className={`inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${callStyles[variant]} ${callSizeStyles[size]}`}
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
    </span>
  );
}
