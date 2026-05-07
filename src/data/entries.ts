import type { CraftEntry } from "@/types/craft";

export const entries: CraftEntry[] = [
  // ─────────────────────────────────────────────────────────
  // STRUCTURE
  // ─────────────────────────────────────────────────────────
  {
    slug: "three-act-structure",
    title: "Three-Act Structure",
    category: "Structure",
    level: "Foundational",
    summary: "A story divides into setup, confrontation, and resolution.",
    principle:
      "Each act has a job: orient the reader, raise pressure, deliver consequence.",
    takeaways: [
      "Act One ends when the protagonist commits to the central problem.",
      "Act Two raises stakes through escalating obstacles.",
      "Act Three delivers a resolution proportional to the cost paid.",
    ],
    overview:
      "The three-act structure organises story into a beginning that establishes the problem, a middle that complicates it, and an end that resolves it. It is descriptive of how most narratives feel rather than prescriptive of how they must be built.",
    examples: [
      "A lawyer accepts a case, faces escalating opposition, and wins or loses at trial.",
      "A child enters a strange forest, becomes lost in it, and finds a way out changed.",
      "A relationship begins, breaks, and either reforms or ends.",
    ],
    related: ["heros-journey", "inciting-incident", "mice-quotient"],
  },
  {
    slug: "heros-journey",
    title: "Hero's Journey",
    category: "Structure",
    level: "Intermediate",
    summary:
      "A protagonist leaves the ordinary world, faces trials, and returns transformed.",
    principle:
      "Departure, initiation, and return are not steps; they are emotional thresholds.",
    takeaways: [
      "Refusal of the call signals what the protagonist values losing.",
      "The ordeal must change the character, not merely test them.",
      "Return must reintegrate the new self with the old world.",
    ],
    overview:
      "Joseph Campbell's monomyth describes a recurring narrative pattern across cultures: a hero crosses from the known into the unknown, undergoes ordeal, and returns with knowledge or power that benefits the community.",
    examples: [
      "A reluctant farm boy answers a call to adventure and returns wielding a power he refused to claim.",
      "A scientist crosses into a forbidden discipline, breaks, and emerges with a discovery.",
      "An exile returns to their homeland transformed by the journey.",
    ],
    related: ["three-act-structure", "character-arc", "mice-quotient"],
  },
  {
    slug: "kishotenketsu",
    title: "Kishōtenketsu",
    category: "Structure",
    level: "Advanced",
    summary:
      "A four-part structure that does not require conflict to drive narrative.",
    principle: "Tension can come from juxtaposition, not opposition.",
    takeaways: [
      "The third movement (ten — the twist) reframes earlier material rather than escalating it.",
      "Resolution can be conceptual rather than dramatic.",
      "Many Western failure modes do not apply here.",
    ],
    overview:
      "Kishōtenketsu is a Japanese four-act narrative form — introduction, development, twist, and reconciliation — common in East Asian literature and cinema. The 'twist' is a perspective shift that recontextualises the earlier parts; conflict is optional.",
    examples: [
      "A short story sets up two cousins, develops their daily lives, reframes them through a third character's view, and reconciles all three observations.",
      "A four-panel comic without antagonist produces meaning through juxtaposition.",
      "A film unfolds through accumulated scenes whose meaning emerges only in the final movement.",
    ],
    related: ["three-act-structure", "mice-quotient", "juxtaposition"],
  },
  {
    slug: "mice-quotient",
    title: "MICE Quotient",
    category: "Structure",
    level: "Intermediate",
    summary:
      "Story shapes can be classified by what kind of question they open and close.",
    principle: "A story ends when it answers the question it opened.",
    takeaways: [
      "Milieu stories open with arrival in a place and close on departure.",
      "Inquiry stories open with a question and close when it is answered.",
      "Character stories open with discontent and close when identity changes.",
      "Event stories open with disruption and close when order is restored or replaced.",
    ],
    overview:
      "Orson Scott Card's MICE Quotient classifies stories by their dominant thread: Milieu, Inquiry, Character, or Event. Each has a different opening, ending, and pacing logic. Most stories nest multiple threads; mismatch between opening and ending is a frequent structural failure.",
    examples: [
      "A travelogue (Milieu) ends with the traveller leaving.",
      "A mystery (Inquiry) ends with the answer revealed.",
      "A coming-of-age (Character) ends with the new self chosen.",
      "An apocalypse (Event) ends with the old order restored or replaced.",
    ],
    related: [
      "three-act-structure",
      "kishotenketsu",
      "inciting-incident",
      "character-arc",
    ],
  },
  {
    slug: "in-medias-res",
    title: "In Medias Res",
    category: "Structure",
    level: "Foundational",
    summary: "The story opens inside the action, not before it.",
    principle:
      "Beginning in motion forces the reader to ride the current; orientation arrives along the way.",
    takeaways: [
      "Pre-action context becomes flashback, dialogue, or implication.",
      "The opening promises later return to whatever was withheld.",
      "Mishandled, it can feel like a trick rather than a frame.",
    ],
    overview:
      "An in medias res opening drops the reader into events already underway. Background arrives later, on demand, as the story justifies its retrieval.",
    examples: [
      "A novel opens at the trial; the crime is reconstructed across the book.",
      "An epic begins on the seventh year of the war.",
      "A chapter starts mid-conversation, the subject of which becomes clear by the end.",
    ],
    related: ["three-act-structure", "frame-narrative", "scene-vs-summary"],
  },
  {
    slug: "frame-narrative",
    title: "Frame Narrative",
    category: "Structure",
    level: "Intermediate",
    summary: "An outer story contains and shapes an inner one.",
    principle: "The frame interprets the tale; the tale repays the frame.",
    takeaways: [
      "The frame establishes who is telling, to whom, and why.",
      "Choices in the frame change the meaning of the inner story.",
      "Returning to the frame at the close gives the reader an exit.",
    ],
    overview:
      "A frame narrative wraps an inner story inside another — a told story, a manuscript discovered, a deathbed confession. The framing layer affects reliability, distance, and interpretation.",
    examples: [
      "A storyteller recounts a tale to a stranger on a train.",
      "A novel presents itself as a found memoir with editorial intrusions.",
      "A character recalls events from old age, knowing how they ended.",
    ],
    related: ["unreliable-narrator", "in-medias-res", "point-of-view"],
  },
  {
    slug: "inciting-incident",
    title: "Inciting Incident",
    category: "Structure",
    level: "Foundational",
    summary:
      "The event that disturbs the protagonist's stable life and forces choice.",
    principle:
      "A story begins when the protagonist can no longer live as they have been living.",
    takeaways: [
      "It must matter specifically to this protagonist, not generically.",
      "It can arrive late, but the story does not start until it does.",
      "The protagonist's response defines them more than the event itself.",
    ],
    overview:
      "The inciting incident is the disturbance that ends the protagonist's prior equilibrium and commits them to the central conflict. It can be external (a death, a letter) or internal (a decision made under longstanding pressure).",
    examples: [
      "A telegram announces a death.",
      "A stranger arrives with a job offer.",
      "A character finally admits, after years, that they will leave.",
    ],
    related: ["three-act-structure", "stakes", "character-arc"],
  },
  {
    slug: "subplot",
    title: "Subplot",
    category: "Structure",
    level: "Intermediate",
    summary:
      "A secondary story line that contrasts, complicates, or echoes the main one.",
    principle: "A subplot earns its place by meaning, not merely by length.",
    takeaways: [
      "It should comment on, complicate, or oppose the main thread.",
      "It can carry the theme the main plot cannot say directly.",
      "A subplot disconnected from the central concern dilutes the whole.",
    ],
    overview:
      "A subplot is a secondary narrative line woven through the main plot. The strongest subplots do thematic work — they pressure the protagonist's choice from a different angle, or test the theme through a parallel case.",
    examples: [
      "A romance subplot sharpens the protagonist's question of loyalty.",
      "A mentor's failing subplot foreshadows the apprentice's risk.",
      "A sibling's parallel choice reframes the protagonist's own.",
    ],
    failureModes: ["dropped-thread", "saggy-middle"],
    related: ["theme", "foil", "mice-quotient"],
  },

  // ─────────────────────────────────────────────────────────
  // PLOT MECHANICS
  // ─────────────────────────────────────────────────────────
  {
    slug: "setup-and-payoff",
    title: "Setup and Payoff",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "Emphasis creates expectation; expectation requires consequence.",
    principle:
      "A story earns satisfaction when planted information later matters.",
    takeaways: [
      "Anything given unusual focus becomes a promise.",
      "Payoffs feel strongest when they are surprising but retrospectively inevitable.",
      "Too much setup without payoff weakens reader trust.",
    ],
    overview:
      "Setup and payoff is the causal contract between writer and reader. A detail, object, line, fear, skill, or mystery is introduced with enough weight that the reader stores it. Later, the story returns to it under pressure.",
    examples: [
      "A character's childhood lesson becomes the rule that saves them.",
      "A dismissed object becomes the key to escape.",
      "A casual warning returns as a literal danger.",
    ],
    failureModes: ["weak-payoff", "unpaid-setup", "over-signaled-setup"],
    related: ["foreshadowing", "chekhovs-gun", "inversion"],
  },
  {
    slug: "chekhovs-gun",
    title: "Chekhov's Gun",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "If a story shows a loaded gun, it must eventually fire.",
    principle: "Significant detail must earn its presence through later use.",
    takeaways: [
      "Promised objects, threats, or capabilities must return.",
      "If it will never fire, do not show it.",
      "Economy is a form of respect for the reader's attention.",
    ],
    overview:
      "Chekhov's Gun is the principle that elements given dramatic weight must serve the story. It is stricter than setup and payoff: it forbids ornamental emphasis. The reader's attention is a resource, and unfired guns spend it without return.",
    examples: [
      "A poison vial described in act one is used in act three.",
      "A scar mentioned in passing becomes the proof of identity.",
      "An overheard threat resolves into the climax.",
    ],
    failureModes: ["unpaid-setup", "over-signaled-setup", "weak-payoff"],
    related: ["setup-and-payoff", "foreshadowing"],
  },
  {
    slug: "conflict",
    title: "Conflict",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "Opposing forces produce the pressure that creates story.",
    principle: "Without resistance, decisions are not visible.",
    takeaways: [
      "Internal conflict reveals character; external conflict reveals action.",
      "The strongest stories pair them: internal stake mirrored in external obstacle.",
      "A conflict without cost is decoration.",
    ],
    overview:
      "Conflict is the friction between desire and obstacle. It can be internal (within a character), interpersonal (between characters), or environmental (against world or system). Most narrative pressure comes from layering these.",
    examples: [
      "A doctor must save a patient and choose which patient first.",
      "A spy loves the agent they are sent to deceive.",
      "A community must survive a winter that exceeds its resources.",
    ],
    related: ["stakes", "tension", "character-arc"],
  },
  {
    slug: "stakes",
    title: "Stakes",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "What the character stands to lose if they fail.",
    principle:
      "Stakes are felt only when the reader cares about what is at risk.",
    takeaways: [
      "Universal stakes (the world ends) are abstract; personal stakes (a child) are felt.",
      "Stakes must escalate, narrow, or transform across the story.",
      "Stated stakes are weaker than demonstrated stakes.",
    ],
    overview:
      "Stakes are the consequence of failure. They can be physical, emotional, social, moral, or existential. Strong narrative pressure pairs visible external stakes with invisible internal ones.",
    examples: [
      "A character risks their reputation to tell the truth.",
      "A war story narrows global stakes to a single child.",
      "A romance puts the relationship and the self in opposition.",
    ],
    related: ["conflict", "tension", "inciting-incident"],
  },
  {
    slug: "tension",
    title: "Tension",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "The reader's awareness that something important is unresolved.",
    principle: "Tension lives in the gap between expectation and outcome.",
    takeaways: [
      "Anticipation creates tension; resolution releases it.",
      "Held too long, tension flattens; released too soon, it deflates.",
      "Tension can be built from comfort as well as from threat.",
    ],
    overview:
      "Tension is the felt sense that the story is not yet finished. It is sustained by unresolved questions, opposing forces, and stakes whose outcome is uncertain.",
    examples: [
      "A conversation between two old friends carries tension because of what is unsaid.",
      "A character climbs a mountain knowing the descent will be worse.",
      "A wedding scene hums with tension because of who is absent.",
    ],
    related: ["suspense", "stakes", "conflict"],
  },
  {
    slug: "suspense",
    title: "Suspense",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "Anticipation of an outcome the reader fears or hopes for.",
    principle:
      "Suspense is built by what the reader knows, not by what the character knows.",
    takeaways: [
      "Surprise is brief; suspense is durable.",
      "Withholding from the reader generates mystery, not suspense.",
      "Showing the reader the bomb under the table — that is suspense.",
    ],
    overview:
      "Suspense is the prolonged sense of uncertainty about a meaningful outcome. Hitchcock's distinction is canonical: surprise is a single jolt; suspense is the dread that builds while a known threat approaches an unknowing character.",
    examples: [
      "A child plays in a kitchen where the reader has just seen poison.",
      "A trial nears verdict while the jury deliberates off-page.",
      "A letter arrives in a household whose member is hiding from its sender.",
    ],
    related: ["dramatic-irony", "tension", "suspense-vs-surprise"],
  },
  {
    slug: "dramatic-irony",
    title: "Dramatic Irony",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "The reader knows what the character does not.",
    principle:
      "Distance between reader and character knowledge is itself a story engine.",
    takeaways: [
      "It generates suspense, comedy, or pathos depending on tone.",
      "It rewards close reading; the irony deepens the rereading.",
      "It is fragile; one careless line can collapse the gap.",
    ],
    overview:
      "Dramatic irony arises when the reader holds information unavailable to one or more characters. Tragedy converts it to dread; comedy converts it to laughter; pathos converts it to grief.",
    examples: [
      "A character celebrates a marriage the reader knows will end the next day.",
      "A child speaks of safety the reader knows is illusory.",
      "Two strangers meet — the reader knows they are siblings.",
    ],
    related: ["suspense", "irony", "unreliable-narrator"],
  },
  {
    slug: "try-fail-cycle",
    title: "Try-Fail Cycle",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "Repeated attempts that escalate the problem rather than solve it.",
    principle: "A story progresses by complication, not by repetition.",
    takeaways: [
      "Yes-but: the attempt succeeds, but at cost or with new problem.",
      "No-and: the attempt fails, and the failure makes things worse.",
      "Pure success without complication ends the story too early.",
    ],
    overview:
      "The try-fail cycle structures the middle of most stories: the protagonist attempts to solve the problem, succeeds partially or fails entirely, and the situation worsens. Each cycle should change something — knowledge, stakes, allies, or position.",
    examples: [
      "A detective questions a suspect (yes — but they lie); follows a lead (no — and it triggers another murder).",
      "A team breaches a vault (yes — but the alarm sounds early).",
      "A negotiator de-escalates one threat (yes — but reveals another).",
    ],
    failureModes: ["saggy-middle"],
    related: ["conflict", "stakes", "setup-and-payoff"],
  },
  {
    slug: "reversal",
    title: "Reversal",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "A sudden change in direction that re-orients the story.",
    principle: "A reversal is felt only against the expectation it inverts.",
    takeaways: [
      "The strongest reversals are inevitable in retrospect.",
      "A reversal without setup feels arbitrary.",
      "A reversal without stakes is a curiosity.",
    ],
    overview:
      "Reversal — Aristotle's peripeteia — is a sudden change in fortune or knowledge that redirects the story. It overlaps with twist, but is structural rather than ornamental: the new direction supersedes the old.",
    examples: [
      "An ally reveals themselves to be the antagonist.",
      "The thing the protagonist sought destroys what they meant to protect.",
      "A safe haven becomes the trap.",
    ],
    failureModes: ["weak-payoff"],
    related: ["inversion", "setup-and-payoff", "dramatic-irony"],
  },
  {
    slug: "red-herring",
    title: "Red Herring",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "A deliberate misdirection toward a false conclusion.",
    principle: "A red herring earns its place if its dismissal still teaches.",
    takeaways: [
      "It must be plausible enough to follow.",
      "Its dismissal should leave residue — character, theme, or new information.",
      "Pure misdirection without aftertaste reads as cheating.",
    ],
    overview:
      "A red herring is a clue or thread that points the reader away from the true answer. It can serve mystery, satire, or thematic purpose, but it must do work beyond mere distraction.",
    examples: [
      "A suspicious neighbour turns out to be hiding an unrelated grief.",
      "A prophesied villain is in fact a mistranslation of an older text.",
      "A character's secret is real, but is not the secret the plot needed.",
    ],
    related: ["dramatic-irony", "setup-and-payoff", "mystery-and-curiosity"],
  },

  // ─────────────────────────────────────────────────────────
  // DEVICES
  // ─────────────────────────────────────────────────────────
  {
    slug: "foreshadowing",
    title: "Foreshadowing",
    category: "Devices",
    level: "Foundational",
    summary: "A future event casts a faint shadow into the present.",
    principle: "Foreshadowing prepares the reader without informing them.",
    takeaways: [
      "The reader should feel the weight before recognising the cause.",
      "The signal should belong to the present scene, not interrupt it.",
      "Subtlety creates inevitability; obviousness creates prediction.",
    ],
    overview:
      "Foreshadowing is the deliberate planting of atmosphere, image, language, or detail that gains meaning only in retrospect. It differs from setup in that it does not require literal payoff — it produces emotional resonance, dread, or anticipation that the later event then names.",
    examples: [
      "A storm gathers behind a peaceful conversation.",
      "A character glances at a door they will later need to break down.",
      "A song lyric quietly anticipates the ending.",
    ],
    failureModes: ["over-signaled-setup", "unpaid-setup"],
    related: ["setup-and-payoff", "chekhovs-gun", "inversion"],
  },
  {
    slug: "inversion",
    title: "Inversion",
    category: "Devices",
    level: "Intermediate",
    summary: "A setup returns with its meaning reversed or transformed.",
    principle:
      "An inversion does not merely surprise; it makes the earlier thing mean more.",
    takeaways: [
      "A warning can become an instruction.",
      "A weakness can become the means of survival.",
      "A safe place can become the trap.",
    ],
    overview:
      "Inversion turns an established role, image, belief, or phrase against its original meaning. The earlier version is not erased; it is reinterpreted. The new meaning feeds back into the old, and the reader feels the shift retroactively.",
    examples: [
      "A safe mountain becomes a prison.",
      "A cruel lesson becomes salvation.",
      "A comforting phrase returns as accusation.",
    ],
    related: ["setup-and-payoff", "foreshadowing", "reversal"],
  },
  {
    slug: "metaphor",
    title: "Metaphor",
    category: "Devices",
    level: "Foundational",
    summary: "A figure of speech that asserts identity between unlike things.",
    principle: "A metaphor must reveal, not merely decorate.",
    takeaways: [
      "The strongest metaphors reorganise how the reader sees the original thing.",
      "Mixed or layered metaphors muddy the image.",
      "An overworked metaphor calls attention to itself rather than its object.",
    ],
    overview:
      "Metaphor names one thing in terms of another to surface a hidden likeness. Unlike simile, it asserts rather than compares — the equivalence is held as truth for the duration of the figure.",
    examples: [
      "Time, the thief, who steals the night.",
      "The argument was a wall between them.",
      "Memory is silt that settles only in stillness.",
    ],
    related: ["simile", "imagery", "symbol"],
  },
  {
    slug: "simile",
    title: "Simile",
    category: "Devices",
    level: "Foundational",
    summary: "An explicit comparison using like or as.",
    principle: "A simile must clarify; an unclear simile clouds twice.",
    takeaways: [
      "It is more honest than metaphor and less compressed.",
      "The vehicle should bring sensory specificity.",
      "Strain or cuteness collapses the figure.",
    ],
    overview:
      "Simile compares one thing to another using an explicit marker (like, as, resembled). It distances the comparison slightly, which can serve precision, distance, or wit.",
    examples: [
      "She moved through the kitchen like someone disarming a bomb.",
      "The room smelled like cold copper.",
      "His voice was as flat as table-water.",
    ],
    related: ["metaphor", "imagery", "diction"],
  },
  {
    slug: "irony",
    title: "Irony",
    category: "Devices",
    level: "Intermediate",
    summary:
      "A gap between what is said or shown and what is meant or true.",
    principle: "Irony names the distance the reader must cross.",
    takeaways: [
      "Verbal irony: the speaker means the opposite.",
      "Dramatic irony: the reader knows what the character does not.",
      "Situational irony: the outcome violates the implied expectation.",
    ],
    overview:
      "Irony in its broadest sense is a gap between surface and substance. It depends on the reader noticing that something else is happening underneath the visible surface.",
    examples: [
      "A character says they trust the reader the moment we suspect them.",
      "A warning is mocked by the very person it concerns.",
      "A safety device causes the death.",
    ],
    related: ["dramatic-irony", "subtext", "tone"],
  },
  {
    slug: "imagery",
    title: "Imagery",
    category: "Devices",
    level: "Foundational",
    summary: "Language that recruits the senses to construct experience.",
    principle:
      "A reader who cannot see, hear, or feel the scene cannot enter it.",
    takeaways: [
      "Specific images outperform abstract ones.",
      "All five senses are available — most prose uses two.",
      "Image without weight is decoration; image with weight is access.",
    ],
    overview:
      "Imagery is the use of sensory language — visual, auditory, tactile, olfactory, gustatory, and kinaesthetic — to render experience. The reader builds the world from what the prose makes them perceive.",
    examples: [
      "The kettle whistled through the wallpaper.",
      "Frost stitched the window from the inside.",
      "The bread tore with the sound of paper.",
    ],
    related: ["sensory-specificity", "metaphor", "diction"],
  },
  {
    slug: "allusion",
    title: "Allusion",
    category: "Devices",
    level: "Intermediate",
    summary:
      "A reference to another work, figure, or event that imports its meaning.",
    principle:
      "An allusion succeeds only if the reader can hear the second voice.",
    takeaways: [
      "The reference must land for at least the implied reader.",
      "Lazy allusion borrows weight without earning context.",
      "Misjudged allusion patronises or excludes.",
    ],
    overview:
      "Allusion brings outside material — myth, scripture, prior art, history — into the text without retelling it. The economy of allusion is that the reader supplies the missing context themselves.",
    examples: [
      "A character carries a single apple in their bag through a chapter about temptation.",
      "A funeral procession echoes a famous painting.",
      "A line of dialogue quotes a song without naming it.",
    ],
    related: ["symbol", "subtext", "motif"],
  },
  {
    slug: "juxtaposition",
    title: "Juxtaposition",
    category: "Devices",
    level: "Foundational",
    summary:
      "Placing two unlike elements side by side so each reframes the other.",
    principle: "Meaning lives in the seam, not the parts.",
    takeaways: [
      "Juxtaposition can substitute for argument.",
      "Order and proximity matter; reverse them and the meaning shifts.",
      "It is a quiet device that does loud work.",
    ],
    overview:
      "Juxtaposition sets one element next to another so the contrast or resonance produces meaning the elements would not produce alone. It is the basic building block of montage, contrast, and structural irony.",
    examples: [
      "A wedding scene cut against a hospital scene.",
      "A child's birthday party in a chapter about war.",
      "Two characters speaking the same line in different rooms.",
    ],
    related: ["irony", "transitions", "kishotenketsu"],
  },
  {
    slug: "defamiliarization",
    title: "Defamiliarization",
    category: "Devices",
    level: "Advanced",
    summary: "Rendering the familiar strange so it can be seen again.",
    principle: "Habit dulls perception; art interrupts habit.",
    takeaways: [
      "Description that resists the obvious word can revive a stale subject.",
      "Defamiliarization at sentence level slows the reader productively.",
      "Overdone, it becomes mannerism.",
    ],
    overview:
      "Defamiliarization (Shklovsky's ostranenie) is the deliberate technique of presenting common things in unfamiliar ways to renew perception. It is the philosophical heart of much modernist prose.",
    examples: [
      "A character watches a clock as if seeing time for the first time.",
      "A familiar street is described from the angle of an animal.",
      "A wedding is rendered in the cadence of a courtroom.",
    ],
    related: ["imagery", "voice", "sensory-specificity"],
  },
  {
    slug: "personification",
    title: "Personification",
    category: "Devices",
    level: "Foundational",
    summary: "Granting human qualities to non-human things.",
    principle:
      "Personification only works if the human gesture clarifies the thing.",
    takeaways: [
      "It is a form of metaphor specialised to agency.",
      "Lazy personification reduces the world to mood.",
      "Used precisely, it gives ideas the ability to act in scene.",
    ],
    overview:
      "Personification attributes human qualities — intention, mood, will, body — to non-human entities. It overlaps with pathetic fallacy when nature mirrors emotion.",
    examples: [
      "The wind argued with the door.",
      "Hunger taught the dog its better lessons.",
      "Time forgot the village.",
    ],
    related: ["pathetic-fallacy", "metaphor", "imagery"],
  },
  {
    slug: "pathetic-fallacy",
    title: "Pathetic Fallacy",
    category: "Devices",
    level: "Intermediate",
    summary: "Nature reflects the emotional state of the characters.",
    principle: "The world feels with the protagonist when the prose lets it.",
    takeaways: [
      "Used quietly, it deepens mood.",
      "Used loudly, it becomes melodrama.",
      "It assumes a unified consciousness behind setting and feeling.",
    ],
    overview:
      "Pathetic fallacy is the literary convention by which weather, landscape, or environment mirrors emotional content. It is a subset of personification and a frequent target of parody when overplayed.",
    examples: [
      "A storm gathers as a marriage ends.",
      "Sunlight returns the morning after a confession.",
      "The road dries as the character begins to forgive.",
    ],
    related: ["personification", "imagery", "tone"],
  },

  // ─────────────────────────────────────────────────────────
  // CHARACTER
  // ─────────────────────────────────────────────────────────
  {
    slug: "character-arc",
    title: "Character Arc",
    category: "Character",
    level: "Foundational",
    summary: "The internal change a character undergoes across a story.",
    principle:
      "An arc is the gap between who the character is and who they become.",
    takeaways: [
      "Positive arc: the character learns and grows.",
      "Negative arc: the character refuses to learn and falls.",
      "Flat arc: the character does not change but the world does.",
    ],
    overview:
      "Character arc is the trajectory of internal change. It is built by pressure: the world refuses to let the character hold their old self, and they either evolve, break, or hold the line.",
    examples: [
      "A coward learns courage through repeated cost.",
      "An idealist hardens into the cynic they once despised.",
      "A truth-teller refuses to lie even as the world changes around them.",
    ],
    related: ["want-vs-need", "lie-the-character-believes", "fatal-flaw"],
  },
  {
    slug: "want-vs-need",
    title: "Want vs Need",
    category: "Character",
    level: "Foundational",
    summary:
      "What the character pursues versus what would actually heal them.",
    principle: "Story drama lives in the gap between desire and necessity.",
    takeaways: [
      "The want is conscious; the need is hidden.",
      "Achieving the want at the cost of the need is tragedy.",
      "Surrendering the want for the need is growth.",
    ],
    overview:
      "Most character-driven stories are organised by the difference between what the protagonist wants and what they need. The plot pressures one against the other until the character must choose.",
    examples: [
      "A character wants revenge but needs to forgive.",
      "A character wants approval but needs to be themselves.",
      "A character wants safety but needs to risk love.",
    ],
    related: ["character-arc", "lie-the-character-believes", "conflict"],
  },
  {
    slug: "characterization",
    title: "Direct vs Indirect Characterization",
    category: "Character",
    level: "Foundational",
    summary:
      "What characters do tells more than what they are said to be.",
    principle:
      "Show character through action, choice, and reaction; tell only what action cannot reach.",
    takeaways: [
      "Directly stated traits are weakly held; demonstrated traits stick.",
      "Reactions reveal more than declarations.",
      "Inconsistency over time is character; inconsistency in a moment is error.",
    ],
    overview:
      "Direct characterization names the trait ('she was brave'); indirect characterization shows behaviour from which the reader infers the trait. Most rich characters are built indirectly, with sparing direct touches.",
    examples: [
      "A character offers their seat without comment.",
      "A character corrects a stranger's accent and then apologises.",
      "A character does not flinch when struck.",
    ],
    failureModes: ["telling-instead-of-showing"],
    related: ["show-dont-tell", "voice", "want-vs-need"],
  },
  {
    slug: "foil",
    title: "Foil",
    category: "Character",
    level: "Intermediate",
    summary: "A character whose contrast illuminates another.",
    principle: "Difference, not similarity, defines a foil.",
    takeaways: [
      "A foil shares enough surface to make the contrast legible.",
      "The foil need not be antagonistic.",
      "A foil's choices throw the protagonist's choices into relief.",
    ],
    overview:
      "A foil is a secondary character whose contrasting traits highlight the qualities, choices, or trajectory of another character. The foil need not oppose, only differ in a meaningful axis.",
    examples: [
      "A reckless brother to a cautious one.",
      "A devout neighbour to a doubting protagonist.",
      "A second courtship that exposes the protagonist's first.",
    ],
    related: ["subplot", "characterization", "theme"],
  },
  {
    slug: "archetype",
    title: "Archetype",
    category: "Character",
    level: "Intermediate",
    summary: "A recurring character pattern recognised across stories.",
    principle: "Archetypes are scaffolds; they require flesh to live.",
    takeaways: [
      "An archetype gives the reader fast orientation.",
      "Stopping at the archetype produces the stereotype.",
      "Subverting an archetype only works if the original was felt.",
    ],
    overview:
      "An archetype is a recurring character role — mentor, trickster, threshold guardian, shadow — that readers recognise across narratives. They simplify recognition and risk flattening individuality if not particularised.",
    examples: [
      "An old mentor whose wisdom is also a wound.",
      "A trickster whose chaos exposes the social order.",
      "A shadow self who is the protagonist's refused future.",
    ],
    related: ["foil", "characterization", "heros-journey"],
  },
  {
    slug: "lie-the-character-believes",
    title: "The Lie the Character Believes",
    category: "Character",
    level: "Intermediate",
    summary:
      "A false conviction the protagonist holds about themselves or the world.",
    principle:
      "The arc bends toward the moment the lie can no longer be held.",
    takeaways: [
      "The lie produces the want; the truth answers the need.",
      "The lie should be visible to the reader before it is visible to the character.",
      "Some stories end with the lie traded for a better lie.",
    ],
    overview:
      "Many character arcs are organised around an internal falsehood — about worth, safety, love, or possibility — that the protagonist holds until story pressure breaks it. The breaking, not the believing, is the arc.",
    examples: [
      "A character who believes they are unlovable until forced to act otherwise.",
      "A scientist convinced data alone explains people.",
      "A leader who believes mercy is weakness.",
    ],
    related: ["character-arc", "want-vs-need", "fatal-flaw"],
  },
  {
    slug: "fatal-flaw",
    title: "Fatal Flaw",
    category: "Character",
    level: "Intermediate",
    summary:
      "A trait that produces the protagonist's defeat or transformation.",
    principle: "A flaw is fatal only when the world stops indulging it.",
    takeaways: [
      "Hamartia is closer to error than evil.",
      "The flaw should be inseparable from the character's strengths.",
      "If the flaw never costs anything, it is not a flaw.",
    ],
    overview:
      "The fatal flaw — Aristotle's hamartia — is the trait, error, or blind spot that brings about a tragic outcome or forces the transformation. Its strength as device lies in being intrinsic, not bolted on.",
    examples: [
      "A general's loyalty becomes the means by which he is betrayed.",
      "A mother's love refuses the truth her child is telling.",
      "A scholar's caution costs them the only living source.",
    ],
    related: ["lie-the-character-believes", "character-arc", "reversal"],
  },
  {
    slug: "active-vs-reactive-protagonist",
    title: "Active vs Reactive Protagonist",
    category: "Character",
    level: "Intermediate",
    summary:
      "A protagonist who chooses drives story; one who only responds drifts.",
    principle: "Agency, not virtue, makes a protagonist.",
    takeaways: [
      "A reactive protagonist can become active by choosing a stance, not just acting.",
      "Pure reaction tires the reader.",
      "Even constrained characters must make decisions visible.",
    ],
    overview:
      "Active protagonists make decisions that move the plot; reactive protagonists are moved by it. Reactivity is not inherently weak — it can be the subject of the story — but the prose must make the inner decisions visible to keep agency felt.",
    examples: [
      "A prisoner cannot leave but chooses how to address each guard.",
      "A character refuses to choose, and the refusal becomes the choice.",
      "A passive narrator commits a single small act that changes everything.",
    ],
    related: ["character-arc", "want-vs-need", "stakes"],
  },

  // ─────────────────────────────────────────────────────────
  // THEME & SYMBOL
  // ─────────────────────────────────────────────────────────
  {
    slug: "theme",
    title: "Theme",
    category: "Theme & Symbol",
    level: "Foundational",
    summary:
      "The underlying argument or question the story embodies.",
    principle: "Theme is what the story is doing, not what it is about.",
    takeaways: [
      "A story's surface is its plot; its argument is its theme.",
      "The strongest themes are dramatised, not stated.",
      "If the theme can be reduced to a moral, it is probably too thin.",
    ],
    overview:
      "Theme is the underlying concern that the events of the story argue, test, or interrogate. It is rarely a single sentence; it is closer to a question the story holds open and pressures from many sides.",
    examples: [
      "A story about a heist becomes a meditation on loyalty.",
      "A children's book argues that grief is not curable but is bearable.",
      "A war novel asks whether mercy survives memory.",
    ],
    related: ["motif", "symbol", "subtext"],
  },
  {
    slug: "motif",
    title: "Motif",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary:
      "A recurring image, phrase, or element that builds thematic weight.",
    principle: "Repetition transmutes detail into meaning.",
    takeaways: [
      "A single instance is detail; three instances is design.",
      "Variation strengthens the motif more than repetition does.",
      "Untransformed return is decoration.",
    ],
    overview:
      "A motif is a recurring element — image, phrase, sound, object — that accumulates meaning through repetition. It works at the level beneath plot, threading the work together.",
    examples: [
      "A door closing in three different rooms across a novel.",
      "Birds at the window of every chapter that involves the missing brother.",
      "A repeated phrase whose meaning shifts with each utterance.",
    ],
    related: ["theme", "symbol", "allusion"],
  },
  {
    slug: "symbol",
    title: "Symbol",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary:
      "An object, image, or action that carries meaning beyond its literal use.",
    principle: "A symbol must function literally first; meaning accumulates.",
    takeaways: [
      "Symbols become symbolic through repetition or weight, not through assertion.",
      "If the symbol cannot be cut without loss, it is doing real work.",
      "Symbol that overrides plot becomes allegory.",
    ],
    overview:
      "A symbol is an element that carries thematic charge. It is not always a chosen object; it is whatever the story trains the reader to read twice — once as itself, once as something more.",
    examples: [
      "A clock that runs backward in a story about regret.",
      "A coat passed across three generations.",
      "A locked room nobody discusses.",
    ],
    related: ["motif", "theme", "objective-correlative"],
  },
  {
    slug: "subtext",
    title: "Subtext",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary: "What the scene is really about, beneath what is said.",
    principle:
      "Most real conversations are about something other than their surface.",
    takeaways: [
      "Strong dialogue rarely says what it means.",
      "Subtext respects the reader's inference.",
      "Without subtext, scenes feel transactional.",
    ],
    overview:
      "Subtext is the unstated layer beneath dialogue, action, or description. It is what the scene is really negotiating — power, fear, love, history — under the surface text.",
    examples: [
      "Two parents argue about dishes while negotiating divorce.",
      "A subordinate praises a superior in language that audits them.",
      "A character orders coffee in a way that ends a friendship.",
    ],
    failureModes: ["on-the-nose-dialogue"],
    related: ["theme", "show-dont-tell", "dialogue"],
  },
  {
    slug: "objective-correlative",
    title: "Objective Correlative",
    category: "Theme & Symbol",
    level: "Advanced",
    summary: "An external object or scene that evokes a specific emotion.",
    principle: "Find the object that is the feeling; do not name the feeling.",
    takeaways: [
      "Eliot's term for emotion delivered through pattern, not statement.",
      "The reader feels the emotion before recognising it.",
      "Stating the emotion alongside the object weakens both.",
    ],
    overview:
      "T. S. Eliot's term for the technique of producing a particular emotion in the reader by presenting a set of objects, situations, or events that, taken together, evoke that emotion without naming it.",
    examples: [
      "A widow folds her husband's shirt the way he folded it.",
      "A long shot of an empty kitchen at dawn.",
      "A bowl of fruit that no one is eating.",
    ],
    related: ["symbol", "imagery", "show-dont-tell"],
  },

  // ─────────────────────────────────────────────────────────
  // NARRATIVE DELIVERY
  // ─────────────────────────────────────────────────────────
  {
    slug: "point-of-view",
    title: "Point of View",
    category: "Narrative Delivery",
    level: "Foundational",
    summary: "The vantage from which the story is told.",
    principle:
      "POV is not a technique; it is a contract about whose mind we may enter.",
    takeaways: [
      "First person grants intimacy at the cost of breadth.",
      "Third limited grants flexibility while preserving focus.",
      "Third omniscient grants reach at the cost of intimacy.",
      "Second person addresses the reader and refuses to settle.",
    ],
    overview:
      "Point of view governs whose perception, knowledge, and language the prose adopts. It controls what the reader can see, feel, and infer, and it is the most consequential choice in narrative delivery.",
    examples: [
      "A first-person narrator who hides their guilt from themselves.",
      "A third-limited POV that briefly slips into a stranger's mind.",
      "An omniscient narrator who comments on the period.",
    ],
    failureModes: ["head-hopping"],
    related: ["narrative-distance", "free-indirect-discourse", "pov-discipline"],
  },
  {
    slug: "show-dont-tell",
    title: "Show, Don't Tell",
    category: "Narrative Delivery",
    level: "Foundational",
    summary: "Render experience in scene rather than summarising it.",
    principle:
      "The reader should arrive at the conclusion before being told the conclusion.",
    takeaways: [
      "Telling has its place: transition, summary, distance.",
      "Showing dramatises; telling reports.",
      "Used as an absolute, the rule produces overwritten scenes.",
    ],
    overview:
      "Show, don't tell is the principle that emotional and characterising content lands harder when dramatised than when stated. It is a guideline, not a law: the most economical prose mixes scene and summary deliberately.",
    examples: [
      "Instead of 'she was angry', her hand finds the chair back.",
      "Instead of 'the house was old', the floor remembered each step.",
      "Instead of 'they were in love', neither moved when the kettle began to scream.",
    ],
    failureModes: ["telling-instead-of-showing", "on-the-nose-dialogue", "info-dump"],
    related: ["scene-vs-summary", "narrative-distance", "characterization"],
  },
  {
    slug: "scene-vs-summary",
    title: "Scene vs Summary",
    category: "Narrative Delivery",
    level: "Foundational",
    summary:
      "Stories alternate between rendered moments and compressed time.",
    principle:
      "Render what the reader must feel; summarise what they only need to know.",
    takeaways: [
      "Scene runs in story-time; summary collapses it.",
      "Pure scene exhausts; pure summary distances.",
      "The interplay is pacing.",
    ],
    overview:
      "Scenes happen in something close to real time, with action and dialogue rendered. Summary compresses time to deliver context, transition, or reflection. The texture of a novel is largely the rhythm between them.",
    examples: [
      "A wedding rendered in scene; the year that follows summarised in a paragraph.",
      "Years of childhood compressed before a key dinner is shown beat by beat.",
      "A summary chapter that gathers what the reader does not need to live through.",
    ],
    failureModes: ["info-dump", "telling-instead-of-showing"],
    related: ["pacing", "show-dont-tell", "narrative-distance", "prose-movement"],
  },
  {
    slug: "narrative-distance",
    title: "Narrative Distance",
    category: "Narrative Delivery",
    level: "Advanced",
    summary:
      "How close the prose stands to a character's immediate experience.",
    principle: "Distance is not fixed; it modulates within paragraphs.",
    takeaways: [
      "Far distance: the narrator reports across time.",
      "Near distance: the language adopts the character's diction and rhythm.",
      "Modulating distance is one of the most subtle skills in prose.",
    ],
    overview:
      "Narrative distance — sometimes called psychic distance — is the apparent gap between the narrator's voice and the character's interiority. Far distance reads like reportage; close distance approaches stream of consciousness. Most strong scenes move along this axis.",
    examples: [
      "Far: 'She saw a horse across the field.'",
      "Medium: 'A horse stood across the field, dark in the long grass.'",
      "Close: 'Ember. The grass had hidden him. He was here.'",
    ],
    related: ["point-of-view", "free-indirect-discourse", "voice"],
  },
  {
    slug: "free-indirect-discourse",
    title: "Free Indirect Discourse",
    category: "Narrative Delivery",
    level: "Advanced",
    summary:
      "Third-person prose that adopts a character's voice and judgement without quoting it.",
    principle:
      "Free indirect lets the narrator and character share a sentence.",
    takeaways: [
      "It collapses the wall between report and interiority.",
      "It permits irony — the narrator can let the character condemn themselves.",
      "Misused, it produces ambiguity about who is speaking.",
    ],
    overview:
      "Free indirect discourse renders a character's thought, idiom, and bias inside the third-person sentence, without attribution or quotation marks. It is the engine of much realist and modernist prose, from Austen onward.",
    examples: [
      "Of course she would go to the dance. Why wouldn't she. The dress would simply have to do.",
      "The fool. Hadn't he been told three times.",
      "The town was beautiful, if you didn't look at it for too long.",
    ],
    related: ["point-of-view", "narrative-distance", "voice", "irony"],
  },
  {
    slug: "unreliable-narrator",
    title: "Unreliable Narrator",
    category: "Narrative Delivery",
    level: "Intermediate",
    summary: "A narrator whose account cannot be fully trusted.",
    principle: "Unreliability rewards the reader for double-listening.",
    takeaways: [
      "Unreliability can be moral, perceptual, factual, or temporal.",
      "The reader must be able to detect the gap to enjoy the device.",
      "Pure unreliability without anchor reads as failure rather than design.",
    ],
    overview:
      "An unreliable narrator presents an account that the text invites the reader to question. The unreliability may stem from delusion, deception, immaturity, partiality, or limited knowledge.",
    examples: [
      "A narrator who cannot bear to remember what they did.",
      "A child whose account of the household is more truthful than the adults'.",
      "A killer who hides the killing from themselves through grammar.",
    ],
    related: ["point-of-view", "frame-narrative", "dramatic-irony"],
  },
  {
    slug: "tense-choice",
    title: "Tense",
    category: "Narrative Delivery",
    level: "Intermediate",
    summary: "Past tense reports; present tense lives.",
    principle: "Tense governs whether the story has happened or is happening.",
    takeaways: [
      "Past tense allows reflection and shape.",
      "Present tense produces immediacy at the cost of perspective.",
      "Mixed tenses can carry memory or simultaneity if controlled.",
    ],
    overview:
      "Tense determines the temporal stance of the narration. Past tense — by far the most common — implies a narrator who has survived the events. Present tense renders the events as ongoing and reduces narrator perspective.",
    examples: [
      "A reflective memoir in past tense.",
      "A thriller in present tense to refuse the reader the comfort of survival.",
      "A novel that shifts to present in flashback to mark its weight.",
    ],
    related: ["point-of-view", "narrative-distance", "voice"],
  },

  // ─────────────────────────────────────────────────────────
  // WORLDBUILDING
  // ─────────────────────────────────────────────────────────
  {
    slug: "sensory-specificity",
    title: "Sensory Specificity",
    category: "Worldbuilding",
    level: "Foundational",
    summary: "The exact detail outperforms the general one.",
    principle: "Specifics create the world; generalities erase it.",
    takeaways: [
      "Name the species, the year, the weight.",
      "Five senses are available — most prose uses two.",
      "Strange specifics outweigh accurate ones in plausibility.",
    ],
    overview:
      "Sensory specificity is the practice of choosing concrete, particular detail over abstraction. It does the work of immersion, characterisation, and theme at once. Vague description is a frequent failure mode of underconfident prose.",
    examples: [
      "Not 'a tree' but 'a sycamore split by an old lightning'.",
      "Not 'the kitchen smelled' but 'the kitchen smelled of bay leaf and burnt sugar'.",
      "Not 'a long time' but 'between the second war and the second daughter'.",
    ],
    related: ["imagery", "diction", "verisimilitude"],
  },
  {
    slug: "verisimilitude",
    title: "Verisimilitude",
    category: "Worldbuilding",
    level: "Intermediate",
    summary: "The felt sense that the world is consistent and inhabited.",
    principle:
      "A world is believed when its rules outlast any single scene.",
    takeaways: [
      "Specificity beats accuracy.",
      "Inhabited worlds have weather, work, money, and time.",
      "A single contradiction punctures more than a hundred small details support.",
    ],
    overview:
      "Verisimilitude is the texture of plausibility. It is built from accumulated specifics that imply a world living off the page — economy, weather, idiom, custom — and from internal consistency the reader can rely upon.",
    examples: [
      "A fictional currency the reader never has to be taught.",
      "A trade route mentioned twice in passing.",
      "A holiday whose absence is felt by characters.",
    ],
    failureModes: ["continuity-error", "info-dump"],
    related: ["sensory-specificity", "iceberg-theory", "timeline-integrity"],
  },
  {
    slug: "setting-as-character",
    title: "Setting as Character",
    category: "Worldbuilding",
    level: "Intermediate",
    summary:
      "A place that exerts pressure, agency, or identity in the story.",
    principle: "Setting earns the role of character when it acts.",
    takeaways: [
      "A setting that only decorates is backdrop.",
      "When the place changes the protagonist's choices, it has agency.",
      "The reader should miss it when the story leaves it.",
    ],
    overview:
      "Some places function less as backdrop than as participants — pressing the characters, shaping their choices, holding the central thematic charge. The technique appears across regional fiction, gothic, and epic.",
    examples: [
      "A town that punishes outsiders without naming the pact that does so.",
      "A house whose architecture forces certain conversations.",
      "A coastline that takes someone every generation.",
    ],
    related: ["verisimilitude", "sensory-specificity", "pathetic-fallacy"],
  },
  {
    slug: "iceberg-theory",
    title: "Iceberg Theory",
    category: "Worldbuilding",
    level: "Advanced",
    summary: "Most of the world should be felt without being stated.",
    principle: "What the writer omits, if known, can be heard.",
    takeaways: [
      "Knowing more than is shown produces texture; knowing less produces thinness.",
      "Cut what the reader can supply, not what they need.",
      "The omission only works if the writer earned the buried mass.",
    ],
    overview:
      "Hemingway's iceberg principle: a writer who knows the full world they are writing can leave most of it submerged, and the reader will feel the weight beneath the prose. The danger is the inverse — surface mistaken for depth.",
    examples: [
      "A war story that never names the war.",
      "A family novel where the inheritance is felt before it is mentioned.",
      "A short story whose central event happens off-page.",
    ],
    failureModes: ["info-dump", "purple-prose"],
    related: ["sensory-specificity", "subtext", "compression"],
  },
  {
    slug: "hard-vs-soft-magic-system",
    title: "Hard vs Soft Magic Systems",
    category: "Worldbuilding",
    level: "Intermediate",
    summary:
      "Magic that is rule-bound generates plot; magic that is mysterious generates wonder.",
    principle:
      "The reader can only be surprised by magic in proportion to the rules they understand.",
    takeaways: [
      "Hard systems can solve problems on the page.",
      "Soft systems should not solve problems they have not earned.",
      "Most stories blend the two; the failure is when the reader cannot tell which they are in.",
    ],
    overview:
      "A hard magic system has explicit rules, costs, and limits known to the reader; a soft system is mysterious and resists explanation. Sanderson's First Law: the reliability of magic to solve problems is proportional to the reader's understanding of it.",
    examples: [
      "A hard system: every spell costs a measurable physical price.",
      "A soft system: a wizard whose powers are ancient and unspoken.",
      "A blended system: hard rules at the surface, soft mythology beneath.",
    ],
    failureModes: ["deus-ex-machina"],
    related: ["verisimilitude", "setup-and-payoff"],
  },

  // ─────────────────────────────────────────────────────────
  // READER PSYCHOLOGY
  // ─────────────────────────────────────────────────────────
  {
    slug: "reader-memory-decay",
    title: "Reader Memory Decay",
    category: "Reader Psychology",
    level: "Intermediate",
    summary:
      "What is not refreshed is forgotten; what is forgotten cannot pay off.",
    principle:
      "A dormant thread must still feel alive, or its return will land on empty ground.",
    takeaways: [
      "The longer the gap, the louder the reminder must be.",
      "Reminders should arrive through consequence, not recap.",
      "A payoff fails if the reader cannot remember the setup.",
    ],
    overview:
      "Reader memory decay is the gradual erosion of details from the reader's working model of the story. Without periodic refreshment — through reference, consequence, or echo — even well-planted material fades. Long novels and serial works are most vulnerable.",
    examples: [
      "A first-act mystery is forgotten by the time it is solved.",
      "A minor character returns and the reader cannot place them.",
      "A rule of magic becomes decisive after the reader has stopped tracking it.",
    ],
    failureModes: ["dropped-thread", "weak-payoff", "over-exposition"],
    related: ["setup-and-payoff", "foreshadowing"],
  },
  {
    slug: "pacing",
    title: "Pacing",
    category: "Reader Psychology",
    level: "Foundational",
    summary: "The felt rate at which the story unfolds.",
    principle: "Pacing is what the reader notices when something is wrong.",
    takeaways: [
      "Pacing is built from sentence rhythm, scene length, and time compression.",
      "Slow is not a failure; deliberate is the standard.",
      "Acceleration before climax is a near-universal pattern.",
    ],
    overview:
      "Pacing is the perceived speed and density of narrative unfolding. It is built locally (sentence rhythm), in scenes (length and stakes), and structurally (compression and expansion of time). It is felt rather than measured.",
    examples: [
      "A romance that lingers in a long, slow first half and accelerates in the second.",
      "A thriller built on short chapters whose ends accelerate the reader.",
      "A literary novel that uses pacing to mimic memory.",
    ],
    failureModes: ["saggy-middle", "info-dump"],
    related: ["scene-vs-summary", "prose-movement", "tension"],
  },
  {
    slug: "suspense-vs-surprise",
    title: "Suspense vs Surprise",
    category: "Reader Psychology",
    level: "Intermediate",
    summary: "Surprise is a moment; suspense is a state.",
    principle: "Tell the reader the threat; let them watch it approach.",
    takeaways: [
      "Suspense relies on shared knowledge; surprise relies on its absence.",
      "Suspense is reusable; surprise is consumed once.",
      "Both have their use; relying only on surprise impoverishes a long work.",
    ],
    overview:
      "Hitchcock's distinction: surprise is generated by unexpected events; suspense is generated by knowledge withheld from characters but shared with the reader. Suspense is the longer-burning fuel of most narrative.",
    examples: [
      "A bomb under the table, ticking — the reader knows; the diners do not.",
      "A character drinks the cup the reader has just seen poisoned.",
      "A letter is mailed; the reader watches the days until it arrives.",
    ],
    related: ["suspense", "dramatic-irony", "tension"],
  },
  {
    slug: "reader-contract",
    title: "The Reader Contract",
    category: "Reader Psychology",
    level: "Intermediate",
    summary: "The implicit promise the opening makes to the reader.",
    principle:
      "The early pages teach the reader what kind of book they are in.",
    takeaways: [
      "Tone, scope, voice, and stakes set the contract.",
      "Breaking the contract shocks; bending it surprises.",
      "Genre is a strong contract; breaking it is harder than honouring it.",
    ],
    overview:
      "The reader contract is the set of expectations the opening establishes — about voice, pace, scope, genre, and stakes — and which the rest of the book either honours, deepens, or deliberately renegotiates.",
    examples: [
      "An opening chapter that teaches the reader to expect strangeness.",
      "A first chapter that hides the genre and earns the reveal.",
      "A novel that opens in one mode and earns its shift to another.",
    ],
    related: ["voice", "tone", "pacing"],
  },
  {
    slug: "mystery-and-curiosity",
    title: "Mystery and Curiosity",
    category: "Reader Psychology",
    level: "Intermediate",
    summary: "Open questions in the reader's mind are story fuel.",
    principle:
      "A reader holds a story in their hands as long as a question is unanswered.",
    takeaways: [
      "Plant questions early and visibly.",
      "Answer some quickly to teach the reader the questions matter.",
      "An unanswered question that the reader has stopped tracking is wasted.",
    ],
    overview:
      "Curiosity — a felt gap between what the reader knows and wants to know — is one of the most reliable engines of engagement. Strong narratives layer questions of different sizes, each with their own answer-cadence.",
    examples: [
      "A small question per chapter, a medium question per arc, a large question per book.",
      "A first paragraph that produces a question the rest of the book answers.",
      "A reveal that creates a larger question than it answers.",
    ],
    related: ["suspense", "tension", "reader-memory-decay"],
  },
  {
    slug: "identification",
    title: "Identification",
    category: "Reader Psychology",
    level: "Intermediate",
    summary: "The reader inhabiting the character's stance.",
    principle:
      "Identification is built by interiority and consequence, not by likability.",
    takeaways: [
      "Vulnerability invites identification more than virtue.",
      "Active desire is more inviting than passive observation.",
      "A reader can identify with a character they would not befriend.",
    ],
    overview:
      "Identification is the reader's adopted alignment with a character — feeling their stakes, seeing through their eyes, wanting what they want. It is the basic emotional currency of much narrative and is built by access to interiority more than by traits.",
    examples: [
      "A morally compromised character whose fear is given to the reader fully.",
      "A child protagonist whose first wound the reader holds with them.",
      "A criminal whose hope, briefly, the reader catches.",
    ],
    related: ["narrative-distance", "want-vs-need", "characterization"],
  },

  // ─────────────────────────────────────────────────────────
  // CONTINUITY
  // ─────────────────────────────────────────────────────────
  {
    slug: "timeline-integrity",
    title: "Timeline Integrity",
    category: "Continuity",
    level: "Foundational",
    summary: "The story's events fit a coherent calendar.",
    principle: "Time, once established, becomes binding.",
    takeaways: [
      "Track seasons, durations, and travel times.",
      "Implied timelines are still timelines.",
      "A small slip in time often produces a larger slip in meaning.",
    ],
    overview:
      "Timeline integrity is the consistency of the story's temporal scaffolding — how long events take, how long has passed between them, how seasons and ages line up. It is invisible when correct and corrosive when wrong.",
    examples: [
      "A pregnancy that lasts the wrong number of months.",
      "A journey that takes a week in one chapter and a day in the next.",
      "A character whose age does not square with their stated history.",
    ],
    failureModes: ["continuity-error"],
    related: ["verisimilitude", "character-knowledge-state"],
  },
  {
    slug: "character-knowledge-state",
    title: "Character Knowledge State",
    category: "Continuity",
    level: "Intermediate",
    summary: "Each character knows specific things at specific times.",
    principle: "A character cannot use information they have not learned.",
    takeaways: [
      "Track who knows what, when, and from whom.",
      "Reveals must respect prior knowledge states.",
      "Surprise produced by violating knowledge state reads as cheating.",
    ],
    overview:
      "Character knowledge state is the running ledger of what each character knows at each moment of the story. Continuity errors here are more frequent and more damaging than spatial or temporal ones.",
    examples: [
      "A character cannot react to news they have not been told.",
      "A villain cannot anticipate a plan they did not overhear.",
      "A confession lands only if the listener was previously kept in the dark.",
    ],
    failureModes: ["continuity-error"],
    related: ["dramatic-irony", "timeline-integrity", "pov-discipline"],
  },
  {
    slug: "pov-discipline",
    title: "POV Discipline",
    category: "Continuity",
    level: "Intermediate",
    summary: "The narration stays inside the rules its viewpoint established.",
    principle:
      "What the POV cannot perceive cannot be reported as fact.",
    takeaways: [
      "Limited POV must not narrate other characters' inner lives.",
      "Omniscient POV may, but should still be deliberate about it.",
      "Slips read as cheating even when readers cannot name the rule.",
    ],
    overview:
      "POV discipline is the consistency of perception, knowledge, and interpretation within the chosen viewpoint. It is the most frequent technical failure of intermediate writers and one of the easiest to detect on rereading.",
    examples: [
      "A first-person narrator who suddenly knows the antagonist's thought.",
      "A close third that names a smell the POV character cannot have noticed.",
      "A multi-POV novel that briefly forgets whose chapter it is in.",
    ],
    failureModes: ["head-hopping"],
    related: ["point-of-view", "narrative-distance"],
  },

  // ─────────────────────────────────────────────────────────
  // PROSE & STYLE
  // ─────────────────────────────────────────────────────────
  {
    slug: "voice",
    title: "Voice",
    category: "Prose & Style",
    level: "Foundational",
    summary: "The recognisable signature of the prose.",
    principle: "Voice is the residue of every choice the writer makes.",
    takeaways: [
      "Voice is built by diction, syntax, rhythm, and stance — together, not separately.",
      "Imitation produces accent; sustained attention produces voice.",
      "A consistent voice survives genre, scene, and tense changes.",
    ],
    overview:
      "Voice is the cumulative effect of word-level, sentence-level, and rhetorical choices that make a prose surface recognisable. It is partly the writer's; in fiction, partly the narrator's; partly the character's. The interaction is the texture of the work.",
    examples: [
      "A laconic narrator whose sentences run short by principle.",
      "A baroque narrator who refuses to leave a noun unmodified.",
      "A voice that mocks itself before any reader can.",
    ],
    failureModes: ["purple-prose"],
    related: ["tone", "register", "diction", "narrative-distance"],
  },
  {
    slug: "tone",
    title: "Tone",
    category: "Prose & Style",
    level: "Foundational",
    summary: "The emotional posture of the prose toward its subject.",
    principle:
      "Tone is what the prose feels about what the prose is saying.",
    takeaways: [
      "Tone can be earnest, ironic, mournful, comic, distant, intimate.",
      "Tonal whiplash without intent reads as instability.",
      "Tonal shift with intent reads as movement.",
    ],
    overview:
      "Tone is the writer's or narrator's stance toward the subject as conveyed in the prose. It is distinct from voice (the manner) and mood (the reader's resulting feeling), though they interact closely.",
    examples: [
      "A funeral rendered in dry comedy without dishonouring the dead.",
      "A romance held at ironic distance until the last chapter relents.",
      "A horror story whose tone refuses ever to break.",
    ],
    related: ["voice", "register", "irony"],
  },
  {
    slug: "register",
    title: "Register",
    category: "Prose & Style",
    level: "Intermediate",
    summary:
      "The level of formality, social context, and idiom of the prose.",
    principle:
      "Register signals to whom and from where the prose is speaking.",
    takeaways: [
      "Register encodes class, era, profession, and intimacy.",
      "Slipping register accidentally exposes the writer.",
      "Mixing registers deliberately produces irony or texture.",
    ],
    overview:
      "Register is the social and contextual level of language — formal, casual, technical, intimate, archaic — that the prose adopts. It is closely tied to character, narrator, and historical setting.",
    examples: [
      "A legal pleading written in the cadence of folk tale.",
      "A teenager's monologue interrupted by a single archaic word.",
      "A scientific report whose register breaks under emotion.",
    ],
    related: ["voice", "tone", "diction", "characterization"],
  },
  {
    slug: "diction",
    title: "Diction",
    category: "Prose & Style",
    level: "Foundational",
    summary: "The choice of words, considered as a system.",
    principle:
      "Every word is a decision, and the decisions accumulate.",
    takeaways: [
      "Latinate diction abstracts; Anglo-Saxon diction grounds.",
      "Diction reveals class, era, education, and intent.",
      "Imprecise diction blurs scenes regardless of plotting.",
    ],
    overview:
      "Diction is the systematic choice of vocabulary in a text. It carries register, voice, and characterisation, and it operates at every sentence. Strong diction is invisible; weak diction is the first thing the reader notices.",
    examples: [
      "A character whose vocabulary narrows under stress.",
      "A narrator whose Latinate verbs betray their education.",
      "A child whose dictation accidentally enters the prose.",
    ],
    failureModes: ["purple-prose"],
    related: ["voice", "register", "tone", "sensory-specificity"],
  },
  {
    slug: "dialogue",
    title: "Dialogue",
    category: "Prose & Style",
    level: "Foundational",
    summary: "Speech that does several jobs at once.",
    principle:
      "A line of dialogue should reveal character, advance story, or hold subtext — ideally all three.",
    takeaways: [
      "Realistic speech is not the same as good dialogue.",
      "Each speaker should sound like themselves under pressure.",
      "What is not said often does more work than what is.",
    ],
    overview:
      "Dialogue in fiction is heightened, stylised speech. It compresses real talk to retain its shape while doing characterisation, plot, and thematic work simultaneously.",
    examples: [
      "Two characters argue about laundry while ending a marriage.",
      "A speech is interrupted by silence that finishes it.",
      "A line of dialogue that the reader will reinterpret in chapter twelve.",
    ],
    failureModes: ["talking-heads", "on-the-nose-dialogue"],
    related: ["subtext", "voice", "register", "show-dont-tell"],
  },
  {
    slug: "sentence-rhythm",
    title: "Sentence Rhythm",
    category: "Prose & Style",
    level: "Intermediate",
    summary:
      "Variation in length and stress across sentences carries the reader.",
    principle:
      "A reader breathes with the sentences; uniformity suffocates.",
    takeaways: [
      "Long sentences stretch; short sentences stop.",
      "Rhythm modulates speed and emotion at the line.",
      "Repetition without variation flattens; variation without intent confuses.",
    ],
    overview:
      "Sentence rhythm is the pattern of cadence, length, and stress across consecutive sentences. It is largely felt, rarely noticed, and one of the surest signs of prose competence.",
    examples: [
      "A paragraph of long sentences ending on a single clipped one.",
      "A scene of mounting fragments before a long, deliberate exhalation.",
      "Speech rendered as quick rhythm against narration's slower one.",
    ],
    related: ["voice", "tone", "prose-movement"],
  },
  {
    slug: "compression",
    title: "Compression",
    category: "Prose & Style",
    level: "Intermediate",
    summary: "The amount of meaning carried per unit of language.",
    principle: "Compression is not brevity; it is density without loss.",
    takeaways: [
      "Strong compression survives slow reading.",
      "Compression that demands too much produces opacity.",
      "Compression rises and falls deliberately across a work.",
    ],
    overview:
      "Compression is the density of meaning per sentence — how much character, world, theme, or feeling is packed into the prose. Poetry is the limit case; the strongest fiction borrows from it without becoming it.",
    examples: [
      "A sentence that names the marriage, the betrayal, and the season at once.",
      "An opening line that loads the entire premise into a clause.",
      "A description in which the object also indicts.",
    ],
    related: ["prose-movement", "iceberg-theory", "sensory-specificity"],
  },
  {
    slug: "prose-movement",
    title: "Prose Movement",
    category: "Prose & Style",
    level: "Advanced",
    summary: "The speed, compression, and memory of the prose at the line.",
    principle:
      "Story-time and reading-time are different clocks; the prose chooses the ratio.",
    takeaways: [
      "Speed: how much story-time passes per sentence.",
      "Compression: how much of the world is loaded into a sentence.",
      "Memory: how the prose tracks accumulated weight.",
    ],
    overview:
      "Prose movement is the local pacing and density of the language — how quickly story-time advances, how much weight each sentence carries, and how the prose remembers what it has set up. It is the texture-level analogue of structural pacing.",
    examples: [
      "A chapter that moves a year in three sentences.",
      "A paragraph that loads a marriage into a single image.",
      "A scene whose every sentence is haunted by the second chapter.",
    ],
    related: ["pacing", "scene-vs-summary", "compression"],
  },

  // ─────────────────────────────────────────────────────────
  // MECHANICAL
  // ─────────────────────────────────────────────────────────
  {
    slug: "chapter-hook",
    title: "Chapter Hook",
    category: "Mechanical",
    level: "Foundational",
    summary:
      "Each chapter ends in a way that pulls the reader into the next.",
    principle:
      "The end of a chapter is the most powerful sentence in it.",
    takeaways: [
      "A hook need not be a cliffhanger; resonance also pulls.",
      "Different hooks for different rhythms — question, image, decision, threat.",
      "An unmarked chapter ending wastes the reader's pause.",
    ],
    overview:
      "Chapter hooks are the sentences and beats that close a chapter so as to shape the reader's pause and propulsion. They range from cliffhangers to quiet final images that gather the chapter's weight.",
    examples: [
      "A chapter ending on a decision the next chapter will execute.",
      "A chapter ending on an image whose meaning will deepen.",
      "A chapter ending on a question the reader will carry into the next room.",
    ],
    related: ["scene-break", "transitions", "cliffhanger"],
  },
  {
    slug: "scene-break",
    title: "Scene Break",
    category: "Mechanical",
    level: "Foundational",
    summary: "White space that crosses time, place, or perspective.",
    principle:
      "A scene break should pay for itself with what the reader finds on the other side.",
    takeaways: [
      "Use scene breaks for time, place, and POV shifts.",
      "Overuse fragments; underuse strands the reader in transition.",
      "The first sentence after a scene break does heavy orienting work.",
    ],
    overview:
      "A scene break is a typographic pause — usually rendered as blank lines or an ornament — that signals a shift in time, place, or perspective. It is a small but consequential mechanical decision.",
    examples: [
      "A break between morning and evening of the same day.",
      "A break that switches POV without warning.",
      "A break that compresses three weeks into white space.",
    ],
    related: ["transitions", "scene-vs-summary", "pacing"],
  },
  {
    slug: "transitions",
    title: "Transitions",
    category: "Mechanical",
    level: "Intermediate",
    summary: "The seams between scenes, chapters, and time periods.",
    principle: "A transition is felt more than read.",
    takeaways: [
      "Hard cut: scene break with no ramp.",
      "Bridge: a sentence or paragraph carries the reader across.",
      "Echo: an image or phrase hands off across the seam.",
    ],
    overview:
      "Transitions are the joins between units of narrative — sentence to sentence, scene to scene, chapter to chapter, story-time to flashback. The strongest transitions do work invisibly; the weakest leave the reader unmoored or recap what the white space already said.",
    examples: [
      "A character closes a door at the end of a scene; the next scene opens with a knock.",
      "A line of dialogue interrupted, completed three pages later in a different room.",
      "A chapter ending on a colour that opens the next.",
    ],
    related: ["scene-break", "chapter-hook", "scene-vs-summary"],
  },
  {
    slug: "cliffhanger",
    title: "Cliffhanger",
    category: "Mechanical",
    level: "Intermediate",
    summary:
      "A chapter ends mid-action with the outcome withheld.",
    principle: "A cliffhanger is a debt; the next chapter must pay it.",
    takeaways: [
      "Used too often, the device tires.",
      "A cheap cliffhanger interrupts; an earned one accelerates.",
      "The resolution should reframe the threat, not merely defuse it.",
    ],
    overview:
      "A cliffhanger is a chapter or scene end that leaves a high-stakes question open at the most charged possible moment. It is propulsive, conventional in genre fiction, and easily overused.",
    examples: [
      "A chapter ends as the door begins to open.",
      "A chapter ends mid-confession.",
      "A chapter ends on a phone ringing.",
    ],
    related: ["chapter-hook", "suspense", "transitions"],
  },

  // ─────────────────────────────────────────────────────────
  // FAILURE MODES
  // ─────────────────────────────────────────────────────────
  {
    slug: "weak-payoff",
    title: "Weak Payoff",
    category: "Failure Modes",
    level: "Intermediate",
    summary:
      "A setup resolves without sufficient impact or transformation.",
    principle:
      "A payoff must change meaning, stakes, emotion, or outcome — not merely occur.",
    takeaways: [
      "A payoff that simply happens is often weak.",
      "The return must justify the attention spent on the setup.",
      "The reader should feel that the earlier emphasis mattered.",
    ],
    overview:
      "A weak payoff occurs when a planted element returns but does not deliver enough narrative, emotional, thematic, or causal force. The setup may technically resolve, but the resolution feels smaller than the promise.",
    examples: [
      "A mysterious object is used, but only in a trivial way.",
      "A long-teased confrontation resolves without consequence.",
      "A character's fear is faced but not meaningfully changed.",
    ],
    related: ["setup-and-payoff", "chekhovs-gun", "inversion"],
  },
  {
    slug: "unpaid-setup",
    title: "Unpaid Setup",
    category: "Failure Modes",
    level: "Foundational",
    summary: "A story gives weight to something that never matters.",
    principle:
      "Emphasis creates a promise; ignored emphasis becomes narrative debt.",
    takeaways: [
      "Not every detail needs payoff, but weighted detail usually does.",
      "The more attention something receives, the more consequence it needs.",
      "Unpaid setup weakens reader trust.",
    ],
    overview:
      "Unpaid setup happens when the story trains the reader to remember a detail, object, line, threat, rule, or wound, then never returns to it with consequence.",
    examples: [
      "A strange key is described carefully but never used.",
      "A prophecy is introduced and then ignored.",
      "A character's rare skill is emphasised but never affects a decision.",
    ],
    related: ["setup-and-payoff", "chekhovs-gun", "reader-memory-decay"],
  },
  {
    slug: "dropped-thread",
    title: "Dropped Thread",
    category: "Failure Modes",
    level: "Advanced",
    summary:
      "An emphasised promise disappears without continuation, transformation, or payoff.",
    principle: "A dormant thread must still feel alive.",
    takeaways: [
      "Silence reads as abandonment unless the thread is re-tagged.",
      "Long threads need faint reminders or consequences.",
      "A multi-book seed still needs local evidence of intention.",
    ],
    overview:
      "A dropped thread is an unresolved story element that was given enough weight for the reader to track, then vanishes from the narrative's active pressure system.",
    examples: [
      "A feared institution is introduced, then never affects the plot.",
      "A missing character stops mattering to everyone.",
      "A named object receives emphasis but has no later function or reminder.",
    ],
    related: ["reader-memory-decay", "setup-and-payoff", "subplot"],
  },
  {
    slug: "continuity-error",
    title: "Continuity Error",
    category: "Failure Modes",
    level: "Foundational",
    summary: "The story contradicts its own established facts.",
    principle:
      "Once established, a story fact remains binding unless the text deliberately changes it.",
    takeaways: [
      "Timeline, weather, injuries, objects, names, and knowledge states must remain consistent.",
      "Small contradictions can damage immersion.",
      "A change needs either explanation or invisibility.",
    ],
    overview:
      "A continuity error occurs when a later passage conflicts with an earlier established fact, such as location, time, object possession, character knowledge, weather, injury, rank, or sequence of events.",
    examples: [
      "A character knows information they never learned.",
      "A broken arm is used normally two chapters later.",
      "A rainy night is later remembered as dry without explanation.",
    ],
    related: ["timeline-integrity", "character-knowledge-state", "verisimilitude"],
  },
  {
    slug: "over-signaled-setup",
    title: "Over-Signaled Setup",
    category: "Failure Modes",
    level: "Intermediate",
    summary:
      "The story points so strongly at a future payoff that surprise collapses.",
    principle:
      "A setup should be memorable without becoming a visible instruction.",
    takeaways: [
      "Readers enjoy recognition, not obviousness.",
      "Repeated emphasis can flatten mystery.",
      "The best planting hides inside present-moment necessity.",
    ],
    overview:
      "Over-signaled setup happens when a detail is marked so heavily that the reader can see the author preparing a later payoff. It weakens surprise and can make the story feel mechanically arranged.",
    examples: [
      "A weapon is described repeatedly before it is used.",
      "A rule of magic is explained too neatly before becoming decisive.",
      "A character repeats a phrase so often that its later return feels predetermined.",
    ],
    related: ["setup-and-payoff", "foreshadowing", "chekhovs-gun"],
  },
  {
    slug: "over-exposition",
    title: "Over-Exposition",
    category: "Failure Modes",
    level: "Foundational",
    summary: "Explanation replaces dramatized discovery.",
    principle:
      "Readers retain information better when it is needed, pressured, and embodied.",
    takeaways: [
      "Explanation should usually arrive under pressure.",
      "Worldbuilding is strongest when it affects action.",
      "Exposition becomes heavy when it pauses the scene without changing it.",
    ],
    overview:
      "Over-exposition occurs when the story explains more than the reader needs at that moment, especially when the information is detached from conflict, desire, decision, or consequence.",
    examples: [
      "A character explains political history while no scene pressure exists.",
      "A magic system is described before the reader has a reason to care.",
      "A paragraph answers questions the reader has not yet asked.",
    ],
    related: ["info-dump", "reader-memory-decay"],
  },
  {
    slug: "confused-blocking",
    title: "Confused Blocking",
    category: "Failure Modes",
    level: "Foundational",
    summary:
      "The reader cannot track bodies, objects, or movement in a scene.",
    principle:
      "A scene loses force when the reader cannot orient themselves in space.",
    takeaways: [
      "Readers need to know who is where.",
      "Action depends on spatial clarity.",
      "Physical confusion is rarely productive unless deliberately designed.",
    ],
    overview:
      "Confused blocking occurs when character position, object location, gesture, movement, or physical sequence becomes unclear. It is especially damaging in action, argument, escape, ritual, and group scenes.",
    examples: [
      "A character crosses a room they already seemed to be across.",
      "Two speakers become physically untrackable in a group scene.",
      "An object appears in a hand without being picked up.",
    ],
    related: ["continuity-error", "talking-heads"],
  },
  {
    slug: "head-hopping",
    title: "Head-Hopping",
    category: "Failure Modes",
    level: "Intermediate",
    summary:
      "POV shifts mid-scene without preparation, costing the reader their footing.",
    principle:
      "Each scene should belong to a perspective; movement between perspectives must be earned.",
    takeaways: [
      "Brief slips are felt even when invisible.",
      "Omniscient narration permits movement; close third does not.",
      "Plan transitions; do not let them happen by accident.",
    ],
    overview:
      "Head-hopping is the unintended movement between characters' inner lives within a single scene. It costs the reader the steady ground their identification depends on.",
    examples: [
      "A close-third scene briefly enters another character's thought to deliver information.",
      "A romance scene names what each lover is thinking simultaneously.",
      "A POV drifts to a stranger to relay reaction.",
    ],
    related: ["point-of-view", "pov-discipline", "narrative-distance"],
  },
  {
    slug: "info-dump",
    title: "Info Dump",
    category: "Failure Modes",
    level: "Foundational",
    summary:
      "A passage delivers world or backstory without scene pressure.",
    principle: "Information without need does not retain.",
    takeaways: [
      "Distribute exposition across scene.",
      "Pressure the information against character desire or conflict.",
      "If a paragraph could be cut without loss, the reader did not need it.",
    ],
    overview:
      "An info dump is a stretch of exposition — history, magic system, backstory, geography — delivered detached from scene pressure. It produces unread paragraphs and tonal sag.",
    examples: [
      "A character explains the political system to no one in particular.",
      "A chapter pauses to summarise three centuries of magic.",
      "A protagonist remembers a long backstory unprompted.",
    ],
    related: ["over-exposition", "iceberg-theory", "pacing"],
  },
  {
    slug: "telling-instead-of-showing",
    title: "Telling Instead of Showing",
    category: "Failure Modes",
    level: "Foundational",
    summary:
      "The prose names emotions and traits the scene could enact.",
    principle: "Stated feeling lands less than felt feeling.",
    takeaways: [
      "If the action is on the page, the label is not needed.",
      "Telling has its uses; reflexive telling does not.",
      "Underlining a moment with a label can flatten it.",
    ],
    overview:
      "When the prose names an emotional or characterising fact that the scene already enacts, the label diminishes the rendering. It can also stand in for a scene the writer has not figured out how to dramatise.",
    examples: [
      "A line saying she was afraid, after a paragraph that has shown the fear.",
      "A summary of a quarrel rather than a scene.",
      "A character described as charming without ever charming anyone.",
    ],
    related: ["show-dont-tell", "characterization", "scene-vs-summary"],
  },
  {
    slug: "deus-ex-machina",
    title: "Deus Ex Machina",
    category: "Failure Modes",
    level: "Intermediate",
    summary:
      "An external power resolves the climax in a way the story has not earned.",
    principle:
      "The resolution must arise from what the story has already established.",
    takeaways: [
      "Lucky rescues without setup feel like cheating.",
      "Setup-then-rescue is not deus ex machina; it is preparation.",
      "If the climax depends on a force the reader has not been taught, something is broken.",
    ],
    overview:
      "The deus ex machina is a sudden, externally-introduced resolution — a god, a discovery, an unforeshadowed power — that ends the conflict without growing from the story. It violates the causal contract.",
    examples: [
      "A previously unmentioned army arrives at the last moment.",
      "A character is rescued by a power they did not have on page two.",
      "A villain is defeated by a coincidence the reader was not invited to expect.",
    ],
    related: ["setup-and-payoff", "weak-payoff", "hard-vs-soft-magic-system"],
  },
  {
    slug: "talking-heads",
    title: "Talking Heads",
    category: "Failure Modes",
    level: "Foundational",
    summary:
      "Dialogue in a vacuum, without bodies, setting, or stakes.",
    principle:
      "A scene is not its dialogue; it is dialogue inside a place under pressure.",
    takeaways: [
      "Anchor speakers in space and gesture.",
      "Let the room interrupt them.",
      "Dialogue without setting drifts into essay.",
    ],
    overview:
      "Talking heads is the failure of dialogue scenes that float without setting, body, gesture, or environmental pressure. The reader hears the words and forgets where they are.",
    examples: [
      "A long argument with no description of the room.",
      "Two voices crossing a page with no stage business.",
      "A philosophical exchange that could occur anywhere.",
    ],
    related: ["confused-blocking", "dialogue", "subtext"],
  },
  {
    slug: "saggy-middle",
    title: "Saggy Middle",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "Story momentum collapses in the middle act.",
    principle:
      "The middle must keep raising stakes, narrowing options, or revealing depth.",
    takeaways: [
      "Repetition without escalation is sag.",
      "A subplot can revive the middle if it pressures the main thread.",
      "Pacing is felt sentence by sentence, not just scene by scene.",
    ],
    overview:
      "Saggy middle is the recurring failure of the second act in long-form narrative — episodes accrue without escalation, repetitions without revelation, and the reader's forward pressure drains. It is usually a structural problem before it becomes a prose one.",
    examples: [
      "A protagonist tries the same approach in three chapters with no escalation.",
      "A long sequence of obstacles that do not change the central question.",
      "A subplot that occupies pages without affecting the protagonist.",
    ],
    related: ["try-fail-cycle", "pacing", "subplot"],
  },
  {
    slug: "on-the-nose-dialogue",
    title: "On-the-Nose Dialogue",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "Characters say exactly what they mean.",
    principle: "Real conversation is rarely about its surface.",
    takeaways: [
      "Subtext is what gives dialogue dimension.",
      "Stating the emotion or theme aloud collapses the scene.",
      "Even when characters are honest, the world around them complicates.",
    ],
    overview:
      "On-the-nose dialogue is speech that names the emotion, theme, or stakes directly, without the indirection that makes most real talk interesting. It is among the most common signs of an underdeveloped scene.",
    examples: [
      "A character announces they are angry, instead of being angry.",
      "A character states the theme of the novel mid-conversation.",
      "A character explains their feelings to a person who already knows them.",
    ],
    related: ["dialogue", "subtext", "telling-instead-of-showing"],
  },
  {
    slug: "purple-prose",
    title: "Purple Prose",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "Ornament that exceeds what the moment can carry.",
    principle: "Prose should be in scale with what it describes.",
    takeaways: [
      "Beauty without function tires the reader.",
      "Mixed metaphors and stacked adjectives are warning signs.",
      "Voice and excess are not the same.",
    ],
    overview:
      "Purple prose is overwritten language — too many adjectives, exotic synonyms, strained metaphors — that calls attention to itself rather than to the world it describes. It usually arises from anxiety, not love, of the language.",
    examples: [
      "A sunset rendered in five different metaphors in three sentences.",
      "A face described with adjectives that do not survive a second reading.",
      "A chapter that strives for lyricism the scene does not earn.",
    ],
    related: ["voice", "compression", "diction"],
  },
];
