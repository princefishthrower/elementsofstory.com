import { Hero } from "@/components/Hero";
import { EntriesBrowser } from "@/components/EntriesBrowser";
import { getAllEntries } from "@/lib/entries";

export default function HomePage() {
  const entries = getAllEntries();

  return (
    <>
      <Hero entryCount={entries.length} />
      <EntriesBrowser entries={entries} />
    </>
  );
}
