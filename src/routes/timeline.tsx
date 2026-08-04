import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { chapterBySlug } from "@/data/chapters";
import { phases, timeline } from "@/data/timeline";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Interactive Timeline 1905–1924 — The Russian Revolution" },
      {
        name: "description",
        content:
          "An interactive timeline of the Russian Revolution: filter by phase and year, expand any event from Bloody Sunday to Lenin's death.",
      },
      { property: "og:title", content: "Interactive Timeline 1905–1924 — The Russian Revolution" },
      {
        property: "og:description",
        content: "Filter by phase and year and expand any event from Bloody Sunday to Lenin's death.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimelinePage,
});

const years = Array.from(new Set(timeline.map((e) => e.year))).sort((a, b) => a - b);

function TimelinePage() {
  const [phase, setPhase] = useState<string>("All");
  const [yearIdx, setYearIdx] = useState<number>(0);
  const [open, setOpen] = useState<string | null>(null);

  const fromYear = years[yearIdx] ?? years[0]!;

  const events = useMemo(
    () =>
      timeline
        .filter((e) => (phase === "All" ? true : e.phase === phase))
        .filter((e) => e.year >= fromYear)
        .sort((a, b) => a.sortKey - b.sortKey),
    [phase, fromYear],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-16">
        <p className="rule-label text-primary">1905 — 1924</p>
        <h1 className="mt-4 text-4xl leading-[0.95] font-semibold tracking-tight uppercase sm:text-6xl">
          Interactive timeline
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Thirty-six turning points across six phases. Filter by phase, drag the year scrubber, and
          click any event to read the detail.
        </p>

        {/* Controls */}
        <div className="sticky top-[57px] z-40 -mx-5 mt-10 border-y border-border/60 bg-background/90 px-5 py-4 backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {["All", ...phases].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPhase(p)}
                className={`rounded-full border px-3 py-1.5 text-xs tracking-[0.16em] uppercase transition-colors ${
                  phase === p
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">From</span>
            <input
              type="range"
              min={0}
              max={years.length - 1}
              step={1}
              value={yearIdx}
              onChange={(e) => setYearIdx(Number(e.target.value))}
              aria-label="Filter events from year"
              className="h-1 flex-1 cursor-pointer appearance-none rounded bg-border accent-primary"
            />
            <span className="w-14 text-right font-[family-name:var(--font-display)] text-xl text-primary">
              {fromYear}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {events.length} event{events.length === 1 ? "" : "s"} shown
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative mt-12 border-l border-border pl-6 sm:pl-10">
          {events.map((e) => {
            const isOpen = open === e.id;
            const chapter = e.chapter ? chapterBySlug(e.chapter) : undefined;
            return (
              <li key={e.id} className="relative pb-8">
                <span
                  className={`absolute top-2 -left-[29px] h-3 w-3 rounded-full border-2 transition-colors sm:-left-[45px] ${
                    isOpen ? "border-primary bg-primary" : "border-primary bg-background"
                  }`}
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : e.id)}
                  aria-expanded={isOpen}
                  className="w-full rounded border border-border bg-card p-5 text-left transition-colors hover:border-primary"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.18em] text-primary uppercase">
                      {e.date}
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                      {e.phase}
                    </span>
                  </div>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-tight uppercase sm:text-2xl">
                    {e.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>

                  {isOpen ? (
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-base leading-relaxed text-foreground/85">{e.detail}</p>
                      {chapter ? (
                        <Link
                          to="/chapters/$slug"
                          params={{ slug: chapter.slug }}
                          className="mt-4 inline-block text-xs tracking-[0.2em] text-primary uppercase underline underline-offset-4"
                        >
                          Read chapter {chapter.num}: {chapter.title} →
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ol>
      </main>
      <SiteFooter />
    </div>
  );
}
