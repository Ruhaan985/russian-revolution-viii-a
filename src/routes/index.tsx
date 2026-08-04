import { createFileRoute } from "@tanstack/react-router";
import heroPetrograd from "@/assets/hero-petrograd.jpg";
import winterPalace from "@/assets/winter-palace.jpg";
import workerPortrait from "@/assets/worker-portrait.jpg";
import civilWar from "@/assets/civil-war.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Russian Revolution 1917 — A Visual Chronicle" },
      {
        name: "description",
        content:
          "A cinematic visual chronicle of the Russian Revolution: February's collapse, October's seizure of power, and the civil war that followed.",
      },
      { property: "og:title", content: "The Russian Revolution 1917 — A Visual Chronicle" },
      {
        property: "og:description",
        content:
          "A cinematic visual chronicle of the Russian Revolution: February's collapse, October's seizure of power, and the civil war that followed.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  {
    date: "23 Feb 1917",
    title: "Bread and Bayonets",
    body: "Women textile workers walk out in Petrograd on International Women's Day. Within four days a bread strike becomes a general strike, and the garrison refuses to fire.",
  },
  {
    date: "2 Mar 1917",
    title: "The Tsar Abdicates",
    body: "Nicholas II signs away three hundred years of Romanov rule in a railway carriage at Pskov. A Provisional Government takes office beside a rival Soviet of workers and soldiers.",
  },
  {
    date: "3 Apr 1917",
    title: "Lenin at the Finland Station",
    body: "Returned from exile through Germany in a sealed train, Lenin rejects compromise: peace, land, bread — and all power to the Soviets.",
  },
  {
    date: "3–7 Jul 1917",
    title: "The July Days",
    body: "Armed sailors and workers spill into the streets. The rising is crushed, the Bolsheviks driven underground, and Kerensky rises to head the government.",
  },
  {
    date: "25 Oct 1917",
    title: "The Winter Palace",
    body: "Red Guards and Kronstadt sailors take the bridges, the telegraph, the stations. By dawn the Provisional Government is under arrest and the Soviet congress holds power.",
  },
  {
    date: "1918–1922",
    title: "Reds and Whites",
    body: "Civil war consumes the former empire. Armoured trains cross the steppe, famine follows requisition, and out of the wreckage the Soviet Union is declared.",
  },
];

const figures = [
  { name: "Vladimir Lenin", role: "Bolshevik leader", note: "Turned a fringe faction into a state." },
  { name: "Leon Trotsky", role: "Chair, Petrograd Soviet", note: "Organised the insurrection and the Red Army." },
  { name: "Alexander Kerensky", role: "Head of the Provisional Government", note: "Governed eight months, fled in October." },
  { name: "Nicholas II", role: "Last Tsar of Russia", note: "Abdicated in March, shot in July 1918." },
];

const numbers = [
  { value: "170M", label: "Subjects of the empire in 1917" },
  { value: "8", label: "Months between February and October" },
  { value: "2.4M", label: "Petrograd population under siege of hunger" },
  { value: "5+", label: "Years of civil war and famine" },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />
      {/* Hero */}
      <section className="grain relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroPetrograd}
          alt="Crowds of workers and soldiers marching with red banners through snowy Petrograd in 1917"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20">
          <span className="rule-label">Petrograd · MCMXVII</span>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,9vw,7.5rem)] font-bold leading-[0.86] tracking-tight">
            The Russian
            <span className="block text-primary">Revolution</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            In eleven months an empire of a hundred and seventy million people dissolved
            into strikes, mutiny and gunfire — and something without precedent took its
            place.
          </p>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <span className="rule-label">Scroll — the year unfolds</span>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="font-body text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.3] text-foreground">
            “There are decades where nothing happens, and there are weeks where decades
            happen.”
          </p>
          <p className="mt-6 rule-label">Attributed to Lenin</p>
        </div>
      </section>

      {/* Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {numbers.map((n) => (
            <div key={n.label} className="bg-background p-8">
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                {n.value}
              </div>
              <div className="mt-3 text-sm leading-snug text-muted-foreground">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* February */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grain relative">
          <img
            src={workerPortrait}
            alt="Portrait of a Russian factory worker in a wool coat and cap in 1917"
            width={1200}
            height={1504}
            loading="lazy"
            className="w-full object-cover grayscale-[35%]"
          />
        </div>
        <div>
          <span className="rule-label">Act One · February</span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            The empire ran out of bread
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The war had swallowed fifteen million men and the railways that fed the
            cities. In the Vyborg district queues formed before dawn for loaves that never
            arrived. When the Cossacks were ordered to clear Znamenskaya Square, they rode
            through the crowd without drawing sabres — and everyone understood what that
            meant.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Autocracy did not fall to an army. It fell to women demanding bread, to
            soldiers who would not shoot them, and to a state that had already stopped
            functioning.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <span className="rule-label">Chronology</span>
          <h2 className="mt-5 text-4xl font-semibold md:text-5xl">The year in six turns</h2>
          <ol className="mt-14 space-y-0">
            {timeline.map((t, i) => (
              <li
                key={t.date}
                className="grid grid-cols-1 gap-4 border-t border-border py-8 last:border-b md:grid-cols-[auto_9rem_1fr] md:gap-8"
              >
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm uppercase tracking-widest text-muted-foreground">
                  {t.date}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* October full-bleed */}
      <section className="grain relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <img
          src={winterPalace}
          alt="The Winter Palace in Petrograd at dusk during a snowstorm with armed guards at the gates"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-xl">
            <span className="rule-label">Act Two · October</span>
            <h2 className="mt-5 text-5xl font-bold leading-[0.95] md:text-6xl">
              Twenty-five
              <span className="block text-primary">October</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              There was no storming, not really. Red Guards walked into the palace through
              unguarded side doors while the ministers argued in the Malachite Room. The
              cruiser Aurora fired a blank. Power changed hands with fewer than a dozen
              dead — and the consequences ran for seventy-four years.
            </p>
          </div>
        </div>
      </section>

      {/* Figures */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <span className="rule-label">Dramatis Personae</span>
        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Four men, one year</h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((f) => (
            <article key={f.name} className="bg-background p-8">
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="mt-2 font-display text-xs uppercase tracking-[0.22em] text-accent">
                {f.role}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{f.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Civil war */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rule-label">Aftermath · 1918–1922</span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              The cost, counted afterwards
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              What followed October was not order but five years of civil war: armoured
              trains crossing the frozen steppe, grain seized at gunpoint, typhus and
              famine killing more than the fighting. Between seven and twelve million
              people died — the overwhelming majority of them civilians.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              In December 1922 the surviving territories were bound together as the Soviet
              Union. The revolution had won, and the country it inherited was in ruins.
            </p>
          </div>
          <div className="grain relative">
            <img
              src={civilWar}
              alt="Red Guard soldiers marching beside an armoured train on a frozen steppe during the Russian Civil War"
              width={1600}
              height={912}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <span className="rule-label">The Russian Revolution — A Visual Chronicle</span>
          <p className="text-sm text-muted-foreground">
            Imagery is photographic reconstruction, not archival record.
          </p>
        </div>
      </footer>
    </main>
  );
}
