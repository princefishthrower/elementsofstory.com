type HeroProps = {
  entryCount: number;
};

export function Hero({ entryCount }: HeroProps) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          A field guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          The Elements of Story
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          A field guide to literary devices, narrative principles, and
          reader-facing effects.
        </p>

        <blockquote className="mt-10 max-w-2xl border-l-2 border-neutral-300 pl-5 text-lg italic text-neutral-700">
          Great stories do not use every device. They use the necessary
          elements well.
        </blockquote>

        <p className="mt-10 text-xs uppercase tracking-wide text-neutral-500">
          {entryCount} {entryCount === 1 ? "entry" : "entries"}
        </p>
      </div>
    </section>
  );
}
