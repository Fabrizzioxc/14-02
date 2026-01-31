type Props = {
  opened: boolean;
  onOpen: () => void;
};

export default function EnvelopeIntro({ opened, onOpen }: Props) {
  return (
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
        onClick={onOpen}
        role="button"
        aria-label="Abrir carta"
      >
        {/* Flap */}
        <div className="envelope-flap absolute top-0 left-0 w-full h-1/2 bg-slate-200 border-b border-slate-300 shadow-sm" />

        {/* Pocket */}
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

        {/* Side folds */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-slate-50 opacity-50"
            style={{ clipPath: "polygon(0 0, 0% 100%, 100% 50%)" }}
          />
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 opacity-50"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }}
          />
        </div>

        {/* Heart seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-300 group-hover:scale-110 -mt-8">
          <div className="bg-red-500 rounded-full p-3 shadow-lg flex items-center justify-center animate-pulse-soft">
            <span className="text-white text-3xl">❤</span>
          </div>
        </div>
      </div>
    </div>
  );
}
