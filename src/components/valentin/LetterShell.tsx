import { useEffect, useState } from "react";
import LetterHeader from "../sections/LetterHeader";
import LetterIntro from "../sections/LetterIntro";
import ReasonsSection from "../sections/ReasonsSection";
import SignalsSection from "../sections/SignalsSection";
import BigQuestionSection from "../sections/BigQuestionSection";
import SuccessSection from "../sections/SuccessSection";
import { createHeartRain } from "../valentin/utils/heartRain";

export default function LetterShell() {
  const [accepted, setAccepted] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const onAccept = () => {
    // 💙 lluvia de corazones (igual que al abrir el sobre)
    createHeartRain(80);

    // opcional: subir arriba para que el success se vea bonito
    window.scrollTo({ top: 0, behavior: "smooth" });

    // monta success pero SIN aparecer de golpe
    setAccepted(true);
    setSuccessVisible(false);
  };

  // cuando se monta el SuccessSection, lo "activamos" al siguiente frame
  useEffect(() => {
    if (!accepted) return;
    const raf = requestAnimationFrame(() => setSuccessVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [accepted]);

  return (
    <main className="w-full max-w-3xl bg-white shadow-xl rounded-lg px-6 py-10 md:px-12 md:py-14">
      {!accepted ? (
        <>
          <LetterHeader />
          <LetterIntro />
          <ReasonsSection />
          <SignalsSection />
          <BigQuestionSection onAccept={onAccept} />
        </>
      ) : (
        <div className={`success-enter ${successVisible ? "is-in" : ""}`}>
          <SuccessSection />
        </div>
      )}
    </main>
  );
}
