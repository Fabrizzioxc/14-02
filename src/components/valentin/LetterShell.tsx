import { useState } from "react";
import LetterHeader from "../sections/LetterHeader";
import LetterIntro from "../sections/LetterIntro";
import ReasonsSection from "../sections/ReasonsSection";
import SignalsSection from "../sections/SignalsSection";
import BigQuestionSection from "../sections/BigQuestionSection";
import SuccessSection from "../sections/SuccessSection";

export default function LetterShell() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="w-full max-w-3xl bg-white shadow-xl rounded-lg px-6 py-10 md:px-12 md:py-14">
      {!accepted ? (
        <>
          <LetterHeader />
          <LetterIntro />
          <ReasonsSection />
          <SignalsSection />
          <BigQuestionSection onAccept={() => setAccepted(true)} />
        </>
      ) : (
        <SuccessSection />
      )}
    </main>
  );
}
