import { useState } from "react";
import EnvelopeIntro from "./EnvelopeIntro";
import LetterShell from "./LetterShell";
import { createHeartRain } from "./utils/heartRain";

export default function ValentinExperience() {
  const [opened, setOpened] = useState(false);        // sobre abierto
  const [stageHidden, setStageHidden] = useState(false); // overlay fuera del DOM
  const [showLetter, setShowLetter] = useState(false);   // carta visible

  const open = () => {
    if (opened) return;

    setOpened(true);

    // 💙 lluvia de corazones al abrir el sobre
    createHeartRain(55);

    // asegurar inicio arriba
    window.scrollTo({ top: 0, behavior: "smooth" });

    // timeline suave
    setTimeout(() => {
      setShowLetter(true);
      setTimeout(() => setStageHidden(true), 700);
    }, 650);
  };

  return (
    <div className="min-h-screen">
      {/* SOBRE */}
      {!stageHidden && (
        <EnvelopeIntro opened={opened} onOpen={open} />
      )}

      {/* CARTA */}
      <div className="flex justify-center px-4 py-10">
        <div
          className={[
            "w-full max-w-3xl transition-all duration-700",
            showLetter
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3 pointer-events-none",
          ].join(" ")}
        >
          <LetterShell />
        </div>
      </div>
    </div>
  );
}
