import { chapters1 } from "./chapters-1";
import { chapters2 } from "./chapters-2";
import { chapters3 } from "./chapters-3";
import type { Chapter } from "./types";

export type { Chapter } from "./types";

export const chapters: Chapter[] = [...chapters1, ...chapters2, ...chapters3];

export const chapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug);

export const neighbours = (slug: string) => {
  const i = chapters.findIndex((c) => c.slug === slug);
  return { prev: i > 0 ? chapters[i - 1] : undefined, next: i >= 0 && i < chapters.length - 1 ? chapters[i + 1] : undefined };
};
