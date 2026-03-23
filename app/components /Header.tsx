import Link from "next/link";
import Image from "next/image";
import { company } from '@/app/data/company';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
        
        <Image
        src="/logo.png"
        alt="Cuzco logo"
        width={50}
        height={50}
        className="h-10 w-auto"
        />
          <div>
            <p className="text-lg font-bold text-slate-900">{company.name}</p>
            <p className="text-xs text-slate-500">{company.slogan}</p>
          </div>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Inicio
          </Link>
          <Link href="/servicios" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Servicios
          </Link>
          <Link href="/sobre-nosotros" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Sobre nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Contacto
          </Link>
        </nav>

        
        <a
  href={`tel:${company.phone}`}
  className="rounded-xl bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-amber-300"
>
  📞 Llamar
</a>
      </div>
    </header>
  );
}