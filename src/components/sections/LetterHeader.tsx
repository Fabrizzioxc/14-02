export default function LetterHeader() {
  return (
    <header className="mb-10">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[2px] bg-sky-300 flex-1 opacity-90" />
        <span className="text-sky-300 text-xl">♡</span>
        <div className="h-[2px] bg-sky-300 flex-1 opacity-90" />
      </div>

      <h2 className="serif-font text-center text-4xl md:text-6xl font-black tracking-tight text-pink-300">
        Día de San Valentín
      </h2>

      <div className="mt-6 h-[2px] bg-sky-300 w-full opacity-90" />
      <div className="mt-4 flex items-center justify-between text-xs md:text-sm text-pink-300 tracking-widest uppercase">
        <span>14 de febrero del 2026</span>
        <span>te quiero mucho</span>
      </div>
      <div className="mt-4 h-[2px] bg-sky-300 w-full opacity-90" />
    </header>
  );
}
