import { entries } from "@/data/entries";

export const getAllEntries = () => entries;

export const getEntryBySlug = (slug: string) =>
  entries.find((e) => e.slug === slug);

export const getRelatedEntries = (slugs: string[]) =>
  entries.filter((e) => slugs.includes(e.slug));
