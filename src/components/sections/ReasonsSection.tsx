const reasons = [
  "Me encanta mucho compartir contigo cualquier momento",
  "Lo simple se vuelve bonito contigo",
  "Eres la persona con la que me gusta pasar riéndome",
  "Haces que el tiempo pase rápido sin darme cuenta",
  "Me encanta mucho tu carita",
];

export default function ReasonsSection() {
  return (
    <section className="mb-20 text-center">
      <h2 className="serif-font text-4xl md:text-6xl font-black text-slate-900">
        5 razones por las que <br />
        <span className="text-sky-600">me encantas</span>
      </h2>

      <ol className="mt-10 space-y-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto text-left list-decimal list-inside">
        {reasons.map((r, i) => (
          <li key={i} className="leading-relaxed">
            {r}
          </li>
        ))}
      </ol>
    </section>
  );
}
