export default function ContactForm() {
    return (
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
            Contacto
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Cuéntanos tu caso
          </h2>
          <p className="mt-4 text-slate-600">
            Rellena el formulario y nos pondremos en contacto contigo lo antes
            posible.
          </p>
  
          <form
            action="https://formspree.io/f/xjgaqjeg"
            method="POST"
            className="mt-8 grid gap-6"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                placeholder="Tu nombre"
              />
            </div>
  
            <div className="grid gap-2 md:grid-cols-2 md:gap-6">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="tuemail@email.com"
                />
              </div>
  
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
  
            <div className="grid gap-2">
              <label htmlFor="service" className="text-sm font-medium text-slate-700">
                Tipo de consulta
              </label>
              <select
                id="service"
                name="service"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              >
                <option>Permisos de residencia y trabajo</option>
                <option>Arraigos</option>
                <option>Reagrupación familiar</option>
                <option>Visa nómada digital</option>
                <option>Renovaciones NIE / TIE</option>
                <option>Nacionalidad española</option>
                <option>Otra consulta</option>
              </select>
            </div>
  
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                placeholder="Cuéntanos brevemente tu caso"
              />
            </div>
  
            <button
              type="submit"
              className="w-fit rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>
    );
  }