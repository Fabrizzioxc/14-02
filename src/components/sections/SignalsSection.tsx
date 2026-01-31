// ✅ Tú pones el archivo local (ej: src/assets/valentin/cinna-heart.png)
import cinnaHeart from "../../assets/valentin/cinna-heart.png";

const signals = [
  "Si al leer esto sonríes un poquito, ya es una buena señal.",
  "Si disfrutas pasar tiempo conmigo tanto como yo contigo, vamos por buen camino.",
  "Si este 14 de febrero te provoca compartirlo juntos, entonces vale la pena intentarlo.",
];

export default function SignalsSection() {
  return (
    <section className="mb-20 text-center">
      <div className="mb-10 flex flex-col items-center gap-6">
        {/* Imagen local */}
        <div className="h-50 w-50 flex items-center justify-center">
          <img src={cinnaHeart.src} alt="Cinnamoroll corazón" className="w-full h-auto" />
        </div>

        <h2 className="serif-font text-4xl md:text-6xl font-black text-slate-900">
          Señales de que <br />
          <span className="text-sky-600">debes decir “Sí”</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {signals.map((s, i) => (
          <div
            key={i}
            className="rounded-3xl bg-sky-200 px-7 py-10 shadow-sm"
          >
            <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
              {s}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
