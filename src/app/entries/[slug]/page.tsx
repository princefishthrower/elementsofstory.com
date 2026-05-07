import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import {
  getAllEntries,
  getEntryBySlug,
  getRelatedEntries,
} from "@/lib/entries";
import { categoryIcons, categoryStyles } from "@/lib/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Not found · The Elements of Story" };
  return {
    title: `${entry.title} · The Elements of Story`,
    description: entry.summary,
  };
}

export default async function EntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();

  const Icon = categoryIcons[entry.category];
  const style = categoryStyles[entry.category];
  const failureModeStyle = categoryStyles["Failure Modes"];
  const relatedEntries = getRelatedEntries(entry.related);
  const failureModeEntries = entry.failureModes
    ? getRelatedEntries(entry.failureModes)
    : [];

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-neutral-900"
      >
        <ArrowLeft aria-hidden className="h-4 w-4" strokeWidth={1.8} />
        All entries
      </Link>

      <header className="mt-10">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${style.iconBg}`}
          >
            <Icon
              aria-hidden
              className={`h-4 w-4 ${style.iconText}`}
              strokeWidth={1.8}
            />
          </span>
          <span className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
            <span>{entry.category}</span>
            <span aria-hidden>·</span>
            <span>{entry.level}</span>
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900">
          {entry.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-neutral-600">
          {entry.summary}
        </p>
      </header>

      <section
        className={`mt-10 rounded-2xl border border-neutral-200 border-l-4 ${style.accent} ${style.surface} p-6`}
      >
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Principle
        </p>
        <p className="mt-2 text-lg italic text-neutral-800">
          {entry.principle}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xs uppercase tracking-wide text-neutral-500">
          Takeaways
        </h2>
        <ul className="mt-4 space-y-2">
          {entry.takeaways.map((t) => (
            <li
              key={t}
              className="flex gap-3 text-base leading-relaxed text-neutral-800"
            >
              <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-neutral-400" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xs uppercase tracking-wide text-neutral-500">
          Overview
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-800">
          {entry.overview}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xs uppercase tracking-wide text-neutral-500">
          Examples
        </h2>
        <ul className="mt-4 space-y-2">
          {entry.examples.map((ex) => (
            <li
              key={ex}
              className="flex gap-3 text-base leading-relaxed text-neutral-800"
            >
              <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-neutral-400" />
              <span>{ex}</span>
            </li>
          ))}
        </ul>
      </section>

      {failureModeEntries.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-wide text-neutral-500">
            Common Failure Modes
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {failureModeEntries.map((failure) => (
              <Link
                key={failure.slug}
                href={`/entries/${failure.slug}`}
                className={`inline-flex items-center gap-2 rounded-full border border-neutral-200 ${failureModeStyle.surface} px-3 py-1 text-sm text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900`}
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-orange-400"
                />
                {failure.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedEntries.length > 0 && (
        <section className="mt-12 border-t border-neutral-200 pt-10">
          <h2 className="text-xs uppercase tracking-wide text-neutral-500">
            Related
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedEntries.map((rel) => {
              const RelIcon = categoryIcons[rel.category];
              const relStyle = categoryStyles[rel.category];
              return (
                <Link
                  key={rel.slug}
                  href={`/entries/${rel.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm"
                >
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${relStyle.iconBg}`}
                  >
                    <RelIcon
                      aria-hidden
                      className={`h-4 w-4 ${relStyle.iconText}`}
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-neutral-500">
                      {rel.category}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-neutral-900">
                      {rel.title}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
