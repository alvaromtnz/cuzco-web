import Link from "next/link";
import { services } from "@/app/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
              Servicios
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Soluciones adaptadas a cada situación
            </h2>
          </div>

          <Link
            href="/servicios"
            className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 md:inline-flex"
          >
            Ver todos
          </Link>
        </div>
        <div className="mt-8 mb-6 rounded-xl bg-amber-50 border border-amber-200 p-6">
  <h3 className="text-lg font-semibold text-slate-900">
    💼 Oferta de regularización
  </h3>
  <p className="text-sm text-slate-700 mt-2">
    Gestionamos tu regularización completa por <strong>295€</strong>:
  </p>
  <ul className="text-sm text-slate-600 mt-2 space-y-1">
    <li>• 145€ iniciales: estudio + asesoramiento + documentación</li>
    <li>• 150€ antes de presentar la solicitud</li>
  </ul>
</div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}