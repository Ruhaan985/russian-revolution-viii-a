import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="rule-label text-primary">
          1917
        </Link>
        <div className="flex items-center gap-5 text-sm tracking-wide">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/timeline"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Timeline
          </Link>
          <Link
            to="/chapters"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="transition-colors hover:text-foreground"
          >
            Chapters
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-5 py-10 text-center text-xs text-muted-foreground">
      <p className="rule-label text-primary">Made by a group of students · Grade VIII A</p>
      <p className="mt-3">Archival photographs via Wikimedia Commons — public domain.</p>

      <p className="mt-2">
        <Link to="/chapters" className="underline underline-offset-4 hover:text-foreground">
          Browse all chapters
        </Link>
      </p>
    </footer>
  );
}
