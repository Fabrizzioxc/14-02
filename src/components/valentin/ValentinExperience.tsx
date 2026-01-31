import { useEffect, useRef, useState } from "react";

export default function ValentinExperience() {
  const [opened, setOpened] = useState(false);
  const [hideEnvelope, setHideEnvelope] = useState(false);

  const open = () => {
    // 1) activa animación del sobre
    setOpened(true);

    // 2) lluvia de corazones
    createHeartRain();

    // 3) fade out del stage del sobre (como tu setTimeout)
    setTimeout(() => setHideEnvelope(true), 600);
  };

  // Corazones 
  const createHeartRain = () => {
    const amount = 40;
    for (let i = 0; i < amount; i++) {
      const heart = document.createElement("div");
      heart.className = "heart-particle";
      heart.innerHTML = "❤";

      const size = Math.random() * 18 + 10;
      const left = Math.random() * 100;
      const dur = Math.random() * 3 + 2;
      const delay = Math.random() * 0.5;

      heart.style.left = `${left}vw`;
      heart.style.fontSize = `${size}px`;
      heart.style.animationDuration = `${dur}s`;
      heart.style.animationDelay = `${delay}s`;

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* STAGE SOBRE */}
      {!hideEnvelope && (
        <div
          className={[
            "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700",
            opened ? "opacity-0 pointer-events-none" : "opacity-100",
          ].join(" ")}
        >
          <div
            className={[
              "relative w-full max-w-md aspect-[3/2.2] cursor-pointer group",
              opened ? "is-open" : "",
            ].join(" ")}
            onClick={open}
          >
            <div className="envelope-flap absolute top-0 left-0 w-full h-1/2 bg-slate-200 border-b border-slate-300 shadow-sm" />
            <div className="envelope-pocket flex bg-white w-full h-full border-slate-100 border rounded-b-lg pb-8 absolute bottom-0 left-0 shadow-2xl items-end justify-center">
              <div className="text-center pb-4 z-20">
                <p className="serif-font text-2xl text-slate-800 font-medium tracking-wide mb-2">
                  Para Kyo
                </p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                  Toca para abrir
                </p>
              </div>
            </div>

            {/* sello corazón */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-300 group-hover:scale-110 -mt-8">
              <div className="bg-red-500 rounded-full p-3 shadow-lg flex items-center justify-center animate-pulse-soft">
                <span className="text-white text-3xl">❤</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CARTA (solo “shell” por ahora) */}
      <main
        className={[
          "bg-white w-full max-w-2xl shadow-xl rounded-lg p-8 md:p-12 lg:p-16 relative mx-auto transition-all duration-700 my-8",
          hideEnvelope ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <h1 className="serif-font text-4xl md:text-6xl text-center font-semibold text-slate-900">
          Hola Kyo 💙
        </h1>
        <p className="mt-6 text-slate-600 text-lg">
          (Aquí luego metemos todo el contenido de la carta)
        </p>
      </main>
    </div>
  );
}
