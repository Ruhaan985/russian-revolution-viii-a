import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/conclusion")({
  head: () => ({
    meta: [
      { title: "Conclusion — What 1917 Left Behind" },
      {
        name: "description",
        content:
          "Closing verdict on the Russian Revolution: why the empire fell, why the Bolsheviks held power, and what the year 1917 still asks of us.",
      },
      { property: "og:title", content: "Conclusion — What 1917 Left Behind" },
      {
        property: "og:description",
        content:
          "Why the empire fell, why the Bolsheviks held power, and what 1917 still asks of us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConclusionPage,
});

const findings = [
  {
    n: "01",
    title: "The empire fell before the Bolsheviks arrived",
    body: "February was not a plot. It was bread queues, a mutinous garrison and a monarchy that had spent its last credit at the front. By the time Lenin stepped off the train at the Finland Station in April, the tsar had already been gone for a month.",
  },
  {
    n: "02",
    title: "The Provisional Government chose the war over the peasants",
    body: "Its fatal decision was to keep fighting and to postpone land reform until a Constituent Assembly that kept receding into the future. Every month of delay handed the countryside — and the trenches — to whoever promised peace and land first.",
  },
  {
    n: "03",
    title: "October was won by organisation, not by numbers",
    body: "A disciplined minority with a clear slogan, a military-revolutionary committee and control of the Petrograd garrison outmanoeuvred a government with no armed defenders left. Power was not so much seized as picked up.",
  },
  {
    n: "04",
    title: "The civil war made the state that followed",
    body: "Requisitioning, the Cheka, war communism and rule by decree began as emergency measures against the Whites and hardened into permanent habits. The Soviet Union of 1922 was shaped less by 1917 than by the four years of fighting after it.",
  },
  {
    n: "05",
    title: "The cost was counted in millions",
    body: "Combat deaths, the Red and White terrors, typhus and the famine of 1921 together consumed a population larger than that of many European states. No account of the revolution is honest without that column.",
  },
];

function ConclusionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <header className="relative overflow-hidden border-b border-border">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5f/The_defense_of_Petrograd_1919.jpg"
          alt="The defence of Petrograd, 1919"
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
        />
        <div className="vignette relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="rule-label text-primary">Closing the chronicle</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.92] font-semibold tracking-tight uppercase sm:text-6xl">
            Conclusion
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Nineteen chapters, three hundred years of monarchy, and eight months between a tsar's
            abdication and a night raid on the Winter Palace. What does the year add up to?
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-16">
        <section className="border-l-2 border-primary pl-6">
          <p className="font-[family-name:var(--font-display)] text-2xl leading-snug uppercase sm:text-3xl">
            "The old world was already dead. The argument of 1917 was over what would be built on
            top of it — and who would be allowed to hold the tools."
          </p>
        </section>

        <section className="mt-16">
          <p className="rule-label text-primary">Five findings</p>
          <div className="mt-8 space-y-10">
            {findings.map((f) => (
              <article key={f.n} className="flex gap-5">
                <span className="font-[family-name:var(--font-display)] text-3xl text-primary">
                  {f.n}
                </span>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl leading-tight uppercase sm:text-2xl">
                    {f.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="rule-label text-primary">What it still asks</p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              The revolution answered a real grievance. Land was held by the few, the war was
              consuming a generation, and a parliament without power had failed to change either.
              To call the whole thing a mistake is to pretend the empire was liveable.
            </p>
            <p>
              But the means outlived the emergency. A dictatorship declared temporary in 1918 was
              still in place in 1922, and the party that promised all power to the soviets kept it
              in a committee of a dozen men. The lesson of 1917 is not that people should endure
              injustice quietly — it is that whoever takes power in a hurry rarely gives it back.
            </p>
            <p>
              That is why we ended this chronicle with photographs rather than verdicts. The faces
              in the bread queues, on the armoured trains and in the famine villages did not know
              how the story finished. Reading their year forward, not backward, is the only honest
              way to study it.
            </p>
          </div>
        </section>

        <section className="mt-20 rounded border border-border bg-card p-8 text-center">
          <p className="rule-label text-primary">Made by a group of students · Grade VIII A</p>
          <p className="mt-4 text-muted-foreground">
            Thank you for reading to the end of the year 1917.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/chapters"
              className="rounded bg-primary px-5 py-3 text-sm tracking-widest text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Back to the chapters
            </Link>
            <Link
              to="/outreach"
              className="rounded border border-border px-5 py-3 text-sm tracking-widest uppercase transition-colors hover:border-primary"
            >
              See our outreach
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
