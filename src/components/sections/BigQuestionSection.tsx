type Props = { onAccept: () => void };

export default function BigQuestionSection({ onAccept }: Props) {
  return (
    <section className="pb-10 text-center">
      <h2 className="serif-font text-4xl md:text-6xl font-black text-slate-900 mb-10">
        La gran pregunta
      </h2>

      <p className="text-slate-400 text-2xl md:text-4xl leading-snug max-w-3xl mx-auto">
        Después de analizar los hechos, <br />
        reírnos de lo poco que sabemos analizar <br />
        y comprobar que contigo el tiempo vuela… <br />
        Ahora sí, <br />
        con una sonrisa nerviosa <br />
        y cero garantías de ser serio:
      </p>

      <h3 className="serif-font mt-16 text-4xl md:text-6xl font-black text-slate-900">
        ¿Puedo ser tu <br />
        <span className="text-sky-600">San Valentin?</span>
      </h3>

      <p className="mt-8 text-slate-500 text-lg">Elige tu respuesta:</p>

      <div className="mt-10 flex flex-col items-center gap-6">
        <button
          onClick={onAccept}
          className="w-full max-w-sm rounded-full bg-pink-200 py-4 text-white font-semibold text-lg hover:scale-[1.01] transition"
        >
          Sí
        </button>
        <button
          onClick={onAccept}
          className="w-full max-w-sm rounded-full bg-pink-200 py-4 text-white font-semibold text-lg hover:scale-[1.01] transition"
        >
          Sí, acepto
        </button>
        <button
          onClick={onAccept}
          className="w-full max-w-sm rounded-full bg-pink-200 py-4 text-white font-semibold text-lg hover:scale-[1.01] transition"
        >
          Sí! POR SUPUESTO
        </button>
      </div>
    </section>
  );
}
