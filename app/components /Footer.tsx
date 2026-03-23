import Image from "next/image";
import { company } from "@/app/data/company";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cuzco logo"
            width={42}
            height={42}
            className="object-contain"
          />

          <div>
            <h3 className="text-xl font-bold">{company.name}</h3>
            <p className="text-sm text-slate-300">{company.slogan}</p>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm text-slate-400">
          <p>{company.phone}</p>
          <p>{company.email}</p>
          <p>{company.address}</p>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © 2026 {company.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}