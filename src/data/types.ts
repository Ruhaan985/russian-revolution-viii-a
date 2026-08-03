export type Figure = { src: string; alt: string; caption: string; credit?: string };

export type Section = {
  heading: string;
  body: string[];
  pull?: string;
};

export type Chapter = {
  slug: string;
  num: string;
  era: string;
  dateline: string;
  title: string;
  subtitle: string;
  dek: string;
  hero: Figure;
  facts: { label: string; value: string }[];
  sections: Section[];
  gallery: Figure[];
  people?: { name: string; role: string; note: string }[];
  legacy: string;
};

export const CREDIT = "Wikimedia Commons — public domain";
