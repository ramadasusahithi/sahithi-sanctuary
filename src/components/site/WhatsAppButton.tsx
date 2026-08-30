import { whatsappUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-[70] grid h-14 w-14 place-items-center rounded-full border border-gold/40 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      style={{
        background: "linear-gradient(140deg, #25D366, #128C7E)",
        boxShadow: "0 14px 34px -10px rgba(18,140,126,0.75), 0 0 0 6px rgba(37,211,102,0.12)",
      }}
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="#fff" aria-hidden>
        <path d="M16.03 4C9.4 4 4 9.4 4 16.03c0 2.12.55 4.19 1.6 6.02L4 28l6.1-1.58a12 12 0 0 0 5.93 1.55h.01C22.66 27.97 28 22.63 28 16S22.66 4 16.03 4zm0 21.79h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.62.94.97-3.53-.23-.37a9.86 9.86 0 0 1-1.51-5.21c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.47-4.45 9.76-10.01 9.76zm5.45-7.38c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48a9.1 9.1 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.64-.93-2.24-.24-.59-.49-.5-.67-.51h-.58c-.2 0-.53.07-.8.37-.28.3-1.06 1.03-1.06 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.35z" />
      </svg>
    </a>
  );
}
