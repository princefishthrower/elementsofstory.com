import Link from "next/link";
import { categoryIcons, categoryStyles } from "@/lib/icons";
import type { CraftEntry } from "@/types/craft";

type EntryCardProps = {
  entry: CraftEntry;
};

export function EntryCard({ entry }: EntryCardProps) {
  const Icon = categoryIcons[entry.category];
  const style = categoryStyles[entry.category];

  return (
    <Link
      href={`/entries/${entry.slug}`}
      className="group block focus:outline-none"
    >
      <article className="h-full rounded-2xl border border-neutral-200 bg-white p-6 transition group-hover:-translate-y-0.5 group-hover:border-neutral-400 group-hover:shadow-sm group-focus-visible:border-neutral-900 group-focus-visible:shadow-sm">
        <div
          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${style.iconBg}`}
        >
          <Icon
            aria-hidden
            className={`h-5 w-5 ${style.iconText}`}
            strokeWidth={1.8}
          />
        </div>

        <p className="text-xs uppercase tracking-wide text-neutral-500">
          {entry.category} · {entry.level}
        </p>

        <h2 className="mt-2 text-lg font-semibold text-neutral-900">
          {entry.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {entry.summary}
        </p>
      </article>
    </Link>
  );
}
