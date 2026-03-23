import { company } from "@/app/data/company";
import ContactForm from "@/app/components /ContactForm";
import MapSection from "@/app/components /MapSection";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-slate-900">Contacto</h1>
          <p className="mt-4 text-slate-600">
            Ponte en contacto con nosotros para estudiar tu caso.
          </p>

          <div className="mt-8 space-y-4 text-lg text-slate-700">
            <p>
              <strong>Teléfono:</strong> {company.phone}
            </p>
            <p>
              <strong>Email:</strong> {company.email}
            </p>
            <p>
              <strong>Dirección:</strong> {company.address}
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <MapSection />
    </main>
  );
}