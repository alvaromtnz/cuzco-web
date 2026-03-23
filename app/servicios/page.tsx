import { services } from "@/app/data/services";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-slate-900">Servicios</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Ofrecemos asesoramiento y acompañamiento en trámites de extranjería
          para particulares y familias.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}