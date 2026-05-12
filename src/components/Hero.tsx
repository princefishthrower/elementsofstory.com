type HeroProps = {
  entryCount: number;
};

export function Hero({ entryCount }: HeroProps) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          The Elements of Story
        </h1>

        <p className="mt-10 text-xs uppercase tracking-wide text-neutral-500">
          {entryCount} {entryCount === 1 ? "entry" : "entries"}
        </p>
      </div>
    </section>
  );
}
