import Link from "next/link";
import { company } from "@/app/data/company";

export default function Hero() {
<section className="bg-white px-6 py-10">
  <div className="mx-auto max-w-6xl text-center">
    <p className="text-sm text-slate-500">
      Asesoramiento en extranjería en Madrid · Atención personalizada · Gestión integral
    </p>
  </div>
</section>
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-100px] h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-amber-400">
            {company.slogan}
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Asesoramiento en extranjería en Madrid
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Servicio claro, cercano y profesional para permisos de residencia y
            trabajo, arraigos, reagrupación familiar, renovaciones, nacionalidad
            española y visa nómada digital.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
            >
              Contactar ahora
            </Link>

            <Link
              href="/servicios"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <h3 className="text-lg font-semibold">Atención personalizada</h3>
              <p className="mt-2 text-slate-300">
                Estudiamos cada caso para orientarte con claridad.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <h3 className="text-lg font-semibold">Acompañamiento integral</h3>
              <p className="mt-2 text-slate-300">
                Te guiamos durante todo el proceso, paso a paso.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <h3 className="text-lg font-semibold">Enfoque profesional</h3>
              <p className="mt-2 text-slate-300">
                Trámites organizados, información clara y contacto directo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}