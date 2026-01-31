import { useEffect, useMemo, useRef, useState } from "react";
import EnvelopeIntro from "./EnvelopeIntro";
import LetterShell from "./LetterShell";

function createHeartRain(amount = 50) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.textContent = "❤";

    const size = Math.random() * 18 + 10; // 10 - 28px
    const left = Math.random() * 100; // vw
    const dur = Math.random() * 3 + 2; // 2 - 5s
    const delay = Math.random() * 0.5; // 0 - 0.5s

    heart.style.left = `${left}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${dur}s`;
    heart.style.animationDelay = `${delay}s`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6500);
  }
}

export default function ValentinExperience() {
  const [opened, setOpened] = useState(false);       // animación del sobre (clase is-open + fade)
  const [stageHidden, setStageHidden] = useState(false); // quitar overlay del DOM
  const [showLetter, setShowLetter] = useState(false);   // montar carta luego de fade

  const open = () => {
    if (opened) return;
    setOpened(true);

    // lluvia de corazones apenas abre
    createHeartRain(55);

    // (opcional) asegura que luego arranque arriba
    window.scrollTo({ top: 0, behavior: "smooth" });

    // timeline similar a tu HTML original:
    // 1) flap abre (0.6s)
    // 2) overlay fade out (0.7s) -> lo ocultamos del DOM
    setTimeout(() => {
      setShowLetter(true);
      // ya montada la carta, removemos el overlay un poquito después
      setTimeout(() => setStageHidden(true), 700);
    }, 650);
  };

  return (
    <div className="min-h-screen">
      {/* 1) SOBRE (overlay) */}
      {!stageHidden && (
        <EnvelopeIntro opened={opened} onOpen={open} />
      )}

      {/* 2) CARTA (scrolleable) */}
      <div className="flex justify-center px-4 py-10">
        <div
          className={[
            "w-full max-w-3xl transition-all duration-700",
            showLetter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
          ].join(" ")}
        >
          <LetterShell />
        </div>
      </div>
    </div>
  );
}
