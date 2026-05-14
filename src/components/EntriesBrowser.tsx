"use client";

import { useMemo, useState } from "react";
import {
  LayoutGrid,
  ArrowUpNarrowWide,
  ArrowDownWideNarrow,
  ChevronDown,
  Search,
  X,
} from "lucide-react";
import { categoryIcons, categoryStyles, CATEGORY_ORDER } from "@/lib/icons";
import { genericSearch } from "@/lib/search";
import { EntryCard } from "@/components/EntryCard";
import type { CraftCategory, CraftEntry, CraftLevel } from "@/types/craft";

type Props = { entries: CraftEntry[] };

const LEVEL_RANK: Record<CraftLevel, number> = {
  Foundational: 0,
  Intermediate: 1,
  Advanced: 2,
};

export function EntriesBrowser({ entries }: Props) {
  const [active, setActive] = useState<CraftCategory | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [query, setQuery] = useState("");
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);
  const hasQuery = query.trim() !== "";

  const handleQueryChange = (nextQuery: string) => {
    const nextHasQuery = nextQuery.trim() !== "";
    setQuery(nextQuery);
    if (!nextHasQuery) {
      setCategoriesExpanded(true);
      return;
    }
    if (!hasQuery) {
      setCategoriesExpanded(false);
    }
  };

  const clearQuery = () => {
    setQuery("");
    setCategoriesExpanded(true);
  };

  const titleMatches = useMemo(
    () => entries.filter((entry) => genericSearch(entry, ["title"], query)),
    [entries, query],
  );

  const counts = useMemo(() => {
    const map = new Map<CraftCategory, number>();
    for (const e of titleMatches) {
      map.set(e.category, (map.get(e.category) ?? 0) + 1);
    }
    return map;
  }, [titleMatches]);

  const visibleCategories = CATEGORY_ORDER.filter((category) => {
    if (hasQuery) {
      return (counts.get(category) ?? 0) > 0;
    }
    return entries.some((entry) => entry.category === category);
  });

  const filtered = useMemo(() => {
    const list =
      active === null
        ? titleMatches
        : titleMatches.filter((e) => e.category === active);
    return [...list].sort((a, b) => {
      const diff = LEVEL_RANK[a.level] - LEVEL_RANK[b.level];
      return sortAsc ? diff : -diff;
    });
  }, [active, sortAsc, titleMatches]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <h2 className="text-xs uppercase tracking-wide text-neutral-500">
          Browse by category
        </h2>

        <div className="mt-5 max-w-xl">
          <label htmlFor="entry-search" className="sr-only">
            Search entries by title
          </label>
          <div className="relative">
            <Search
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              strokeWidth={1.8}
            />
            <input
              id="entry-search"
              type="search"
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              placeholder="Search entries"
              className="h-11 w-full rounded-xl border border-neutral-200 bg-white pl-10 pr-10 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-900 [&::-webkit-search-cancel-button]:appearance-none"
            />
            {hasQuery && (
              <button
                type="button"
                onClick={clearQuery}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none focus-visible:bg-neutral-100 focus-visible:text-neutral-900"
              >
                <X aria-hidden className="h-4 w-4" strokeWidth={1.8} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-controls="category-grid"
            aria-expanded={categoriesExpanded}
            onClick={() => setCategoriesExpanded((expanded) => !expanded)}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 focus:outline-none focus-visible:border-neutral-900"
          >
            {categoriesExpanded ? "Hide categories" : "Show categories"}
            <ChevronDown
              aria-hidden
              className={`h-3.5 w-3.5 transition ${
                categoriesExpanded ? "rotate-180" : ""
              }`}
              strokeWidth={1.8}
            />
          </button>
          {hasQuery && !categoriesExpanded && (
            <p className="text-xs text-neutral-500">
              Categories are hidden while filtering.
            </p>
          )}
        </div>

        {categoriesExpanded && (
          <div
            id="category-grid"
            className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            <CategoryTile
              label="All"
              count={titleMatches.length}
              isActive={active === null}
              anyActive={active !== null}
              onClick={() => setActive(null)}
            />
            {visibleCategories.map((cat) => (
              <CategoryTile
                key={cat}
                category={cat}
                label={cat}
                count={counts.get(cat) ?? 0}
                isActive={active === cat}
                anyActive={active !== null}
                onClick={() => setActive(active === cat ? null : cat)}
              />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xs uppercase tracking-wide text-neutral-500">
            {active ?? "All entries"}
          </h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSortAsc((v) => !v)}
              aria-label={
                sortAsc
                  ? "Currently: Foundational first. Switch to Advanced first."
                  : "Currently: Advanced first. Switch to Foundational first."
              }
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 focus:outline-none focus-visible:border-neutral-900"
            >
              {sortAsc ? (
                <ArrowUpNarrowWide
                  aria-hidden
                  className="h-3.5 w-3.5"
                  strokeWidth={1.8}
                />
              ) : (
                <ArrowDownWideNarrow
                  aria-hidden
                  className="h-3.5 w-3.5"
                  strokeWidth={1.8}
                />
              )}
              {sortAsc ? "Foundational first" : "Advanced first"}
            </button>
            <p className="text-xs text-neutral-500">
              {filtered.length} of {entries.length}
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-6 text-sm text-neutral-600">
            No entries match that title.
          </p>
        )}
      </section>
    </>
  );
}

type TileProps = {
  category?: CraftCategory;
  label: string;
  count: number;
  isActive: boolean;
  anyActive: boolean;
  onClick: () => void;
};

function CategoryTile({
  category,
  label,
  count,
  isActive,
  anyActive,
  onClick,
}: TileProps) {
  if (!category) {
    // "All" tile — neutral
    const base =
      "group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition";
    const palette = isActive
      ? "bg-neutral-900 border-neutral-900 text-white"
      : "bg-white border-neutral-200 hover:bg-neutral-50 hover:-translate-y-0.5";
    const dim = !isActive && anyActive ? "opacity-60 hover:opacity-100" : "";
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isActive}
        className={`${base} ${palette} ${dim}`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
            isActive ? "bg-white/15 text-white" : "bg-neutral-100 text-neutral-700"
          }`}
        >
          <LayoutGrid aria-hidden className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold">{label}</span>
          <span
            className={`block text-xs ${
              isActive ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            {count} {count === 1 ? "entry" : "entries"}
          </span>
        </span>
      </button>
    );
  }

  const Icon = categoryIcons[category];
  const style = categoryStyles[category];

  const base =
    "group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition focus:outline-none";
  const fill = isActive
    ? `${style.tileBgActive} ${style.tileBorder} ring-2 ${style.tileRing}`
    : `${style.tileBg} ${style.tileBorder} ${style.tileBgHover} hover:-translate-y-0.5`;
  const dim = !isActive && anyActive ? "opacity-60 hover:opacity-100" : "";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`${base} ${fill} ${dim}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${style.tileChip}`}
      >
        <Icon
          aria-hidden
          className={`h-4 w-4 ${style.iconText}`}
          strokeWidth={1.8}
        />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-neutral-900">
          {label}
        </span>
        <span className="block text-xs text-neutral-600">
          {count} {count === 1 ? "entry" : "entries"}
        </span>
      </span>
    </button>
  );
}
