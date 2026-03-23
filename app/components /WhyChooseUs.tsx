export default function WhyChooseUs() {
    return (
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
            Confianza
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Una web pensada para ayudar y generar seguridad
          </h2>
  
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Explicaciones claras
              </h3>
              <p className="mt-2 text-slate-600">
                Hablamos claro para que entiendas qué trámite necesitas y cómo avanzar.
              </p>
            </article>
  
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Gestión ordenada
              </h3>
              <p className="mt-2 text-slate-600">
                Revisamos la documentación y el proceso para evitar errores evitables.
              </p>
            </article>
  
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Trato cercano
              </h3>
              <p className="mt-2 text-slate-600">
                Atención profesional con un enfoque humano y personalizado.
              </p>
            </article>
          </div>
        </div>
      </section>
    );
  }