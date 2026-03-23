export default function WhatsAppButton() {
    const phone = "34600000000";
    const message = encodeURIComponent(
      "Hola, me gustaría recibir información sobre un trámite de extranjería."
    );
  
    return (
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
      >
        💬 WhatsApp
      </a>
    );
  }