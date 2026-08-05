import { useEffect, useMemo, useState } from "react";

const PLATES = [
  "https://upload.wikimedia.org/wikipedia/commons/6/67/Days_of_revolution_-_barricades_on_the_Liteinyi_Prospect%2C_Petrograd_LCCN2009631816.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Vladimir_Lenin%2C_1917.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/After_the_capture_of_the_Winter_Palace_26_October_1917.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Iyul%27skaya_1917_demonstraciya_v_Petrograde.jpg/1920px-Iyul%27skaya_1917_demonstraciya_v_Petrograde.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/da/Leon_Trotsky_1918.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f3/19180902-red_terror-banner.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/First_Red_Guards_in_Petrograd%2C_fall_1917_cropped.jpg/1920px-First_Red_Guards_in_Petrograd%2C_fall_1917_cropped.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/47/%D0%9E%D1%82%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8F_II.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/46/1917petrogradsoviet_assembly.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f7/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/83/After_the_capture_of_the_Winter_Palace._Petrograd._Morning_on_26_October_1917.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Kornilov_1917.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/The_defense_of_Petrograd_1919.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/First_proklamation_of_Petrograd_Soviet_1917.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Vladimir_Lenin_at_the_First_Congress_of_the_Comintern%2C_Moscow%2C_Kremlin.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/42/Red_Army_evacuation_of_wounded_during_Kronstadt_rebellion.png",
];

const BEATS: { kicker: string; line: string; sub?: string }[] = [
  { kicker: "Petrograd", line: "1917", sub: "Three hundred years end in eight days" },
  { kicker: "February", line: "Bread", sub: "Women textile workers walk out" },
  { kicker: "2 March", line: "Abdication", sub: "A railway carriage at Pskov" },
  { kicker: "April", line: "The Sealed Train", sub: "Peace. Land. Bread." },
  { kicker: "July — August", line: "Crisis", sub: "The streets rise, and are crushed" },
  { kicker: "25 October", line: "The Winter Palace", sub: "Bridges, telegraph, stations" },
  { kicker: "1918 — 1922", line: "Reds & Whites", sub: "Armoured trains across the steppe" },
  { kicker: "1922", line: "Union", sub: "Out of the wreckage, a new state" },
  { kicker: "A visual chronicle", line: "The Russian Revolution", sub: "Nineteen chapters · thirty-six turning points" },
];

const TOTAL_MS = 60000;
const BEAT_MS = TOTAL_MS / BEATS.length;

export function OpeningTitles({ onDone }: { onDone: () => void }) {
  const [beat, setBeat] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [flash, setFlash] = useState(0);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setBeat((b) => (b + 1 < BEATS.length ? b + 1 : b));
      setFlash((f) => f + 1);
    }, BEAT_MS);
    const end = window.setTimeout(() => setLeaving(true), TOTAL_MS - 900);
    const done = window.setTimeout(onDone, TOTAL_MS);
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(end);
      window.clearTimeout(done);
    };
  }, [onDone]);

  const columns = useMemo(() => {
    const cols: string[][] = [[], [], [], [], []];
    PLATES.forEach((p, i) => cols[i % 5]!.push(p));
    return cols.map((c) => [...c, ...c, ...c]);
  }, []);

  const current = BEATS[beat] ?? BEATS[0]!;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-background grain ${
        leaving ? "animate-fade-out" : ""
      }`}
      role="presentation"
    >
      {/* drifting mosaic */}
      <div className="absolute inset-0 flex origin-center scale-[1.9] rotate-[-16deg] gap-3 opacity-70">
        {columns.map((col, ci) => (
          <div
            key={ci}
            className="flex flex-1 flex-col gap-3"
            style={{
              animation: `intro-drift-${ci % 2 === 0 ? "up" : "down"} ${34 + ci * 7}s linear infinite`,
            }}
          >
            {col.map((src, i) => (
              <div
                key={`${ci}-${i}`}
                className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-ash"
              >
                <img
                  src={src}
                  alt=""
                  loading="eager"
                  className="h-full w-full object-cover contrast-125 grayscale"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      (ci + i) % 4 === 0
                        ? "var(--color-crimson)"
                        : (ci + i) % 7 === 0
                          ? "var(--color-ember)"
                          : "transparent",
                    opacity: (ci + i) % 4 === 0 || (ci + i) % 7 === 0 ? 0.7 : 0,
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 bg-background/45" />

      {/* title card */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          key={beat}
          className="animate-scale-in max-w-3xl -rotate-[3deg] border-l-4 border-primary bg-background/95 px-8 py-10 text-center shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] sm:px-16 sm:py-14"
        >
          <p className="rule-label">{current.kicker}</p>
          <h1 className="mt-4 text-4xl leading-[0.95] font-bold text-foreground sm:text-6xl md:text-7xl">
            {current.line}
          </h1>
          {current.sub ? (
            <p className="mt-5 font-body text-sm text-muted-foreground italic sm:text-base">
              {current.sub}
            </p>
          ) : null}
        </div>
      </div>

      {/* progress + skip */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex items-center justify-between px-6 pb-5">
          <span className="rule-label">Opening titles</span>
          <button
            onClick={onDone}
            className="rule-label border border-border px-4 py-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Skip intro
          </button>
        </div>
        <div className="h-1 w-full bg-secondary">
          <div
            className="h-full bg-primary"
            style={{ animation: `intro-progress ${TOTAL_MS}ms linear forwards` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes intro-drift-up { from { transform: translateY(0); } to { transform: translateY(-33.33%); } }
        @keyframes intro-drift-down { from { transform: translateY(-33.33%); } to { transform: translateY(0); } }
        @keyframes intro-progress { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
}
