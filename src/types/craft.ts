export type CraftCategory =
  | "Structure"
  | "Plot Mechanics"
  | "Devices"
  | "Character"
  | "Theme & Symbol"
  | "Narrative Delivery"
  | "Worldbuilding"
  | "Reader Psychology"
  | "Continuity"
  | "Prose & Style"
  | "Mechanical"
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
