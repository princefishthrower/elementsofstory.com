import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-neutral-900 transition hover:text-neutral-600"
        >
          Elements of Story
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <Link href="/" className="transition hover:text-neutral-900">
            Index
          </Link>
        </nav>
      </div>
    </header>
  );
}
