export default function SuccessSection() {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto mb-8 w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center">
        <span className="text-3xl">✅</span>
      </div>

      <h2 className="serif-font text-3xl md:text-5xl font-black text-slate-900">
        Sabía que dirías que sí <span className="text-sky-500">💙</span>
      </h2>

      <p className="mt-8 text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
        Tú solo preocúpate de ponerte bonita ✨ <br />
        y espérame… que yo paso a recogerte a tu casa.
      </p>

      <p className="mt-8 text-slate-400">Nos vemos pronto.</p>
    </section>
  );
}
