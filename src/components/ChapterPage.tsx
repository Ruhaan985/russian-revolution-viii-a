import { Link } from "@tanstack/react-router";
import type { Chapter } from "@/data/types";
import { SiteFooter, SiteHeader } from "./SiteHeader";

export function ChapterPage({
  chapter,
  prev,
  next,
}: {
  chapter: Chapter;
  prev?: Chapter;
  next?: Chapter;
}) {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <article>
        <header className="grain vignette relative min-h-[70svh] w-full overflow-hidden">
          <img
            src={chapter.hero.src}
            alt={chapter.hero.alt}
            className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale-[35%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="relative mx-auto flex min-h-[70svh] max-w-4xl flex-col justify-end px-5 pb-14 pt-24">
            <p className="rule-label text-primary">
              Chapter {chapter.num} — {chapter.era}
            </p>
            <h1 className="mt-4 text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-6xl md:text-7xl">
              {chapter.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground italic">{chapter.subtitle}</p>
            <p className="mt-3 text-sm tracking-[0.25em] text-primary uppercase">{chapter.dateline}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5">
          <p className="border-l-2 border-primary py-1 pl-5 text-xl leading-relaxed">{chapter.dek}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {chapter.hero.caption} {chapter.hero.credit ? `(${chapter.hero.credit})` : ""}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-4">
            {chapter.facts.map((f) => (
              <div key={f.label} className="bg-background p-5">
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {f.label}
                </dt>
                <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 space-y-14">
            {chapter.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl font-semibold tracking-tight uppercase sm:text-3xl">
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-[1.75] text-foreground/85">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.pull ? (
                  <blockquote className="mt-8 border-l-2 border-primary pl-6 font-[family-name:var(--font-display)] text-xl leading-snug text-primary/90 sm:text-2xl">
                    {s.pull}
                  </blockquote>
                ) : null}
              </section>
            ))}
          </div>

          {chapter.people?.length ? (
            <section className="mt-20">
              <p className="rule-label text-primary">Dramatis personae</p>
              <div className="mt-6 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
                {chapter.people.map((p) => (
                  <div key={p.name} className="bg-background p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg uppercase">
                      {p.name}
                    </h3>
                    <p className="text-xs tracking-[0.18em] text-primary uppercase">{p.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {chapter.gallery.length ? (
          <section className="mx-auto mt-20 max-w-6xl px-5">
            <p className="rule-label text-primary">Plates</p>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {chapter.gallery.map((g) => (
                <figure key={g.src} className="grain relative">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full rounded border border-border object-cover grayscale-[25%]"
                  />
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {g.caption}
                    {g.credit ? <span className="block text-xs opacity-70">{g.credit}</span> : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto mt-20 max-w-4xl px-5">
          <p className="rule-label text-primary">Legacy</p>
          <p className="mt-5 text-xl leading-relaxed text-foreground/90">{chapter.legacy}</p>
        </section>

        <nav className="mx-auto mt-20 grid max-w-4xl gap-px overflow-hidden rounded border border-border bg-border px-0 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/chapters/$slug"
              params={{ slug: prev.slug }}
              className="bg-background p-6 transition-colors hover:bg-accent"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                ← Previous
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-lg uppercase">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="bg-background p-6" />
          )}
          {next ? (
            <Link
              to="/chapters/$slug"
              params={{ slug: next.slug }}
              className="bg-background p-6 text-right transition-colors hover:bg-accent"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Next →
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-lg uppercase">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="bg-background p-6" />
          )}
        </nav>
      </article>

      <div className="mt-20">
        <SiteFooter />
      </div>
    </div>
  );
}
