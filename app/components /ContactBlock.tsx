import Link from "next/link";
import { company } from "@/app/data/company";

export default function ContactBlock() {
  return (
    <section className="bg-slate-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-400">
          Contacto
        </p>
        <h2 className="mt-2 text-3xl font-bold">
          Cuéntanos tu caso y te orientamos
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-slate-400">Teléfono</p>
            <p className="mt-2 text-lg font-semibold">{company.phone}</p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 text-lg font-semibold">{company.email}</p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Ubicación</p>
            <p className="mt-2 text-lg font-semibold">{company.address}</p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/contacto"
            className="inline-flex rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:opacity-90"
          >
            Ir a contacto
          </Link>
        </div>
      </div>
    </section>
  );
}