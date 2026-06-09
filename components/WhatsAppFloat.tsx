import { whatsappHref } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-[0_8px_20px_-4px_rgba(46,158,58,0.5)] transition-transform duration-300 hover:scale-110 hover:bg-brand-green-light"
    >
      <i className="ph-fill ph-whatsapp text-3xl" />
    </a>
  );
}
