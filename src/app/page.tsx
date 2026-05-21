import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { EntriesBrowser } from "@/components/EntriesBrowser";
import { getAllEntries } from "@/lib/entries";

export default function HomePage() {
  const entries = getAllEntries();

  return (
    <>
      <Hero entryCount={entries.length} />
      <Suspense fallback={null}>
        <EntriesBrowser entries={entries} />
      </Suspense>
    </>
  );
}
