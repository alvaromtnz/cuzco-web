export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué diferencia hay entre NIE y TIE?",
      answer:
        "El NIE es el número de identificación de extranjero, mientras que la TIE es la tarjeta física que acredita tu situación legal en España.",
    },
    {
      question: "¿Puedo solicitar un arraigo si llevo tiempo en España?",
      answer:
        "Depende de tu situación concreta, del tiempo de permanencia y de los requisitos aplicables. Lo mejor es estudiar el caso de forma individual.",
    },
    {
      question: "¿Cuánto tarda un trámite de extranjería?",
      answer:
        "Los plazos pueden variar según el tipo de expediente, la oficina y la situación del solicitante. Es importante preparar bien la documentación desde el inicio.",
    },
    {
      question: "¿Puedo reagrupar a un familiar?",
      answer:
        "Sí, en muchos casos es posible, siempre que se cumplan los requisitos exigidos por la normativa y se aporte la documentación correspondiente.",
    },
    {
      question: "¿Me podéis ayudar con la nacionalidad española?",
      answer:
        "Sí, ofrecemos acompañamiento en el proceso de solicitud de nacionalidad española, revisión documental y seguimiento del expediente.",
    },
    {
      question: "¿Cuánto cuesta el proceso de regularización?",
      answer:
        "El servicio completo tiene un coste de 295€, dividido en dos fases: 145€ por el estudio del caso, asesoramiento y preparación de la documentación, y 150€ antes de presentar la solicitud.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-slate-600">
          Resolvemos algunas de las dudas más habituales sobre trámites de
          extranjería en España.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}