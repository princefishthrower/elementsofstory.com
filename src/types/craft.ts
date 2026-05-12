export type CraftCategory =
  | "Structure"
  | "Openings & Thresholds"
  | "Plot Mechanics"
  | "Devices"
  | "Rhetoric & Figures"
  | "Character"
  | "Theme & Symbol"
  | "Narrative Delivery"
  | "Narratology"
  | "Worldbuilding"
  | "Reader Psychology"
  | "Reader Contract & Promise"
  | "Continuity"
  | "Prose & Style"
  | "Genre & Form"
  | "Poetry"
  | "Drama"
  | "Mechanical"
  | "Publishing"
  | "Writer & Reader Slang"
  | "Failure Modes";

export type CraftLevel = "Foundational" | "Intermediate" | "Advanced";

export type CraftEntry = {
  slug: string;
  title: string;
  category: CraftCategory;
  level: CraftLevel;
  summary: string;
  principle: string;
  takeaways: string[];
  overview: string;
  examples: string[];
  failureModes?: string[];
  related: string[];
};
