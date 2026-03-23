export default function MapSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
          Ubicación
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Estamos en Madrid
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Puedes visitarnos en nuestra oficina o contactarnos por teléfono,
          email o WhatsApp.
        </p>

        {/* DIRECCIÓN */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Dirección</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">
            Calle Pintor Juan Gris, 5-3ºA · 28020 Madrid
          </p>
        </div>

        {/* MAPA */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=Calle+Pintor+Juan+Gris+5+Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación oficina Cuzco"
          />
        </div>
      </div>
    </section>
  );
}