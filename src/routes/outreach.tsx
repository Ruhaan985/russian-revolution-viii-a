import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach — Sharing the 1917 Chronicle" },
      {
        name: "description",
        content:
          "How Grade VIII A took the Russian Revolution chronicle beyond the classroom: exhibitions, talks, reading circles and ways to use this archive.",
      },
      { property: "og:title", content: "Outreach — Sharing the 1917 Chronicle" },
      {
        property: "og:description",
        content:
          "Exhibitions, school talks, reading circles and classroom resources built around the 1917 chronicle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OutreachPage,
});

const programmes = [
  {
    kicker: "Corridor exhibition",
    title: "Nineteen plates, one wall",
    body: "Every chapter printed at A2, hung in chronological order along the school corridor with a red thread running between the February and October panels. Visitors walk the year from strike to storming.",
  },
  {
    kicker: "Assembly talk",
    title: "Twelve minutes on 1917",
    body: "A short talk for the whole school: bread queues in Petrograd, the abdication of a tsar in a railway carriage, and the night the Provisional Government sat down to a dinner it never finished.",
  },
  {
    kicker: "Reading circle",
    title: "Sources, not slogans",
    body: "Weekly sessions comparing Bolshevik decrees, White proclamations and peasant petitions — asking who wrote each document, for whom, and what it left out.",
  },
  {
    kicker: "Junior workshop",
    title: "Make your own poster",
    body: "Grades V–VII design constructivist posters using red, black and bone paper. The rule: one slogan, one shape, no more than three words.",
  },
];

const ways = [
  {
    n: "01",
    title: "Use it in class",
    body: "Each chapter carries a dateline, a fact grid and archival plates with credits — enough for a source-analysis lesson without extra preparation.",
  },
  {
    n: "02",
    title: "Walk the timeline",
    body: "The interactive timeline filters by phase and year. Project it and let a class scrub from 1905 to 1924 in a single lesson.",
  },
  {
    n: "03",
    title: "Borrow the images",
    body: "Every photograph here comes from Wikimedia Commons and is in the public domain. Credits are printed beneath each plate — keep them attached.",
  },
  {
    n: "04",
    title: "Argue with us",
    body: "History is contested. If you think a chapter leans too far one way, tell us — corrections and counter-readings are part of the project.",
  },
];

function OutreachPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <header className="relative overflow-hidden border-b border-border">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Russian_Civil_War_posters.jpg/1920px-Russian_Civil_War_posters.jpg"
          alt="Wall of Russian Civil War propaganda posters"
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
        />
        <div className="vignette relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="rule-label text-primary">Beyond the classroom</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[0.92] font-semibold tracking-tight uppercase sm:text-6xl">
            Outreach
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A chronicle nobody reads is only homework. This is how Grade VIII A carried 1917 out of
            the exercise book and into the corridor, the assembly hall and the reading circle.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-16">
        <section>
          <p className="rule-label text-primary">Programmes</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {programmes.map((p) => (
              <article
                key={p.title}
                className="rounded border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs tracking-[0.2em] text-primary uppercase">{p.kicker}</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-tight uppercase">
                  {p.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="rule-label text-primary">Four ways to use this archive</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
            {ways.map((w) => (
              <div key={w.n} className="bg-card p-6">
                <span className="font-[family-name:var(--font-display)] text-3xl text-primary">
                  {w.n}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl uppercase">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded border border-border bg-card p-8 sm:p-12">
          <p className="rule-label text-primary">Invite us</p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight uppercase sm:text-4xl">
            We will bring the plates, the timeline and the argument
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Other sections, other schools, history clubs and parents' evenings — the exhibition
            travels in a folder and the talk fits inside a lunch break. Ask your history teacher to
            put Grade VIII A on the schedule.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/timeline"
              className="rounded bg-primary px-5 py-3 text-sm tracking-widest text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Open the timeline
            </Link>
            <Link
              to="/conclusion"
              className="rounded border border-border px-5 py-3 text-sm tracking-widest uppercase transition-colors hover:border-primary"
            >
              Read the conclusion
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
