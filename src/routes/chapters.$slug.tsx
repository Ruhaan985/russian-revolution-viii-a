import { createFileRoute, notFound } from "@tanstack/react-router";
import { ChapterPage } from "@/components/ChapterPage";
import { chapterBySlug, neighbours } from "@/data/chapters";

export const Route = createFileRoute("/chapters/$slug")({
  loader: ({ params }) => {
    const chapter = chapterBySlug(params.slug);
    if (!chapter) throw notFound();
    return { chapter, ...neighbours(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Chapter not found — The Russian Revolution" }, { name: "robots", content: "noindex" }],
      };
    }
    const { chapter } = loaderData;
    const title = `${chapter.title} — The Russian Revolution`;
    return {
      meta: [
        { title },
        { name: "description", content: chapter.subtitle },
        { property: "og:title", content: title },
        { property: "og:description", content: chapter.subtitle },
        { property: "og:type", content: "article" },
        { property: "og:image", content: chapter.hero.src },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: chapter.hero.src },
      ],
    };
  },
  component: ChapterRoute,
});

function ChapterRoute() {
  const { chapter, prev, next } = Route.useLoaderData();
  return <ChapterPage chapter={chapter} prev={prev} next={next} />;
}
