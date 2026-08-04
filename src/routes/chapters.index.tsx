import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { chapters } from "@/data/chapters";

export const Route = createFileRoute("/chapters/")({
  head: () => ({
    meta: [
      { title: "All Chapters — The Russian Revolution 1917" },
      {
        name: "description",
        content:
          "Nineteen illustrated chapters from imperial Russia to the founding of the USSR: February, October, the civil war, the terror and the famine.",
      },
      { property: "og:title", content: "All Chapters — The Russian Revolution 1917" },
      {
        property: "og:description",
        content: "Nineteen illustrated chapters from imperial Russia to the founding of the USSR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChaptersIndex,
});

function ChaptersIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="rule-label text-primary">The chronicle</p>
        <h1 className="mt-4 text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-6xl">
          Nineteen chapters
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          From the contradictions of the empire in 1894 to Lenin's death and the buried Testament in
          1924 — each chapter with archival plates, key figures and the numbers behind the events.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              to="/chapters/$slug"
              params={{ slug: c.slug }}
              className="group block overflow-hidden rounded border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.hero.src}
                  alt={c.hero.alt}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 grayscale-[35%] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute top-3 left-3 rounded bg-background/85 px-2 py-1 font-[family-name:var(--font-display)] text-xs tracking-widest">
                  {c.num}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.2em] text-primary uppercase">{c.dateline}</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-tight uppercase">
                  {c.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {c.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
