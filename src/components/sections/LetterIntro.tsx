import cinnaLove from "../../assets/valentin/cinna-love.png";

export default function LetterIntro() {
  return (
    <section className="mb-16 text-slate-600 text-lg md:text-xl leading-relaxed">
      {/* Imagen flotante */}
      <div className="float-right ml-8 mb-4 w-[320px] md:w-[360px]">
        <div className="rounded-xl border-2 border-dashed border-sky-200 p-4">
          <img
            src={cinnaLove.src}
            alt="Cinnamoroll"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>

      {/* Texto */}
      <h3 className="font-semibold text-slate-800 text-2xl md:text-3xl mb-6">
        Kyo
      </h3>

      <p className="mb-6">
        No soy muy bueno hablando o diciendo lo que siento en palabras, es por eso que
        suelo escribir y esta no iba a ser una excepción.
      </p>

      <p className="mb-6">
        Me gustas mucho, me gusta pasar el tiempo contigo y me haces sentir bien. Sin
        darme cuenta, te fuiste quedando en mi mente y en mi corazón. Contigo, los
        momentos se sienten más bonitos y el tiempo pasa diferente.
      </p>

      <p>
        Escribo esto para que sepas lo mucho que me importas y lo mucho que me gustas,
        y porque me haría muy feliz poder compartir contigo este 14 de febrero, pasando
        el momento juntos.
      </p>

      {/* Limpia el float para la siguiente sección */}
      <div className="clear-both" />
    </section>
  );
}
