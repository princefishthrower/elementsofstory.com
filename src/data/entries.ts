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
  // PUBLISHING
  // ─────────────────────────────────────────────────────────
  {
    slug: "literary-agent",
    title: "Literary Agent",
    category: "Publishing",
    level: "Foundational",
    summary:
      "A professional representative who submits, negotiates, and advocates for an author's work.",
    principle:
      "An agent is not a gate to fame; they are a business representative for rights, strategy, and leverage.",
    takeaways: [
      "Agents usually earn commission only when the author earns money.",
      "They submit manuscripts to editors the author often cannot reach directly.",
      "The strongest agent relationship is editorial, strategic, and contractual.",
    ],
    overview:
      "A literary agent represents an author and their work to publishers, usually by selecting submission targets, managing auctions or offers, negotiating contract terms, and tracking the long tail of rights and payments. For most large trade publishers, an agented submission is the standard path into acquisition.",
    examples: [
      "An agent revises a pitch package before sending it to editors.",
      "An agent negotiates royalty escalators and subsidiary rights language.",
      "An agent advises an author to decline a weak offer and revise instead.",
    ],
    related: ["query-letter", "submission-package", "book-auction"],
  },
  {
    slug: "query-letter",
    title: "Query Letter",
    category: "Publishing",
    level: "Foundational",
    summary:
      "A short professional pitch used to interest an agent or editor in a manuscript.",
    principle:
      "A query sells the reading experience, not the author's hope for it.",
    takeaways: [
      "It should identify the project, category, word count, and central hook.",
      "The pitch should make conflict, stakes, and audience legible quickly.",
      "Personalisation helps only when it is specific and relevant.",
    ],
    overview:
      "A query letter is the first formal approach many writers make to literary agents. It usually contains a concise pitch, essential market information, brief author credentials, and sometimes comparable titles. Its job is not to explain the whole book; its job is to earn a request for more material.",
    examples: [
      "A novel query names the protagonist, problem, stakes, and genre in one compact pitch.",
      "A nonfiction query foregrounds platform, argument, audience, and authority.",
      "A query mentions a comparable title to clarify shelf and readership.",
    ],
    related: ["literary-agent", "submission-package", "comp-titles"],
  },
  {
    slug: "synopsis",
    title: "Synopsis",
    category: "Publishing",
    level: "Foundational",
    summary:
      "A compressed account of the whole work, including the ending.",
    principle:
      "A synopsis proves the story has shape; it is not teaser copy.",
    takeaways: [
      "It should reveal the ending rather than preserve suspense.",
      "Emotional and causal turns matter more than scene inventory.",
      "A synopsis exposes structural weakness quickly.",
    ],
    overview:
      "A synopsis is a practical publishing document that summarises the full arc of a manuscript for an agent, editor, or acquisitions process. Unlike jacket copy, it does not conceal the resolution. Its usefulness lies in showing whether the premise, escalation, character arc, and ending cohere.",
    examples: [
      "A one-page synopsis tracks the protagonist from initial desire to final choice.",
      "A mystery synopsis identifies the culprit and the discovery path.",
      "A romance synopsis shows why the central relationship fails and then earns repair.",
    ],
    related: ["submission-package", "query-letter", "character-arc"],
  },
  {
    slug: "submission-package",
    title: "Submission Package",
    category: "Publishing",
    level: "Foundational",
    summary:
      "The materials sent to an agent or editor for consideration.",
    principle:
      "The package should answer the recipient's practical questions before they have to ask.",
    takeaways: [
      "Fiction packages often include a query, sample pages, and sometimes a synopsis.",
      "Nonfiction packages may require a proposal, chapter outline, sample chapter, and platform notes.",
      "Instructions matter; ignoring stated guidelines is an avoidable rejection risk.",
    ],
    overview:
      "A submission package is the assembled set of materials used to evaluate a project. Its contents vary by category, recipient, and stage, but the function is constant: it lets the industry reader assess premise, prose, market position, completeness, and author fit efficiently.",
    examples: [
      "An agent asks for the query, first ten pages, and a one-page synopsis.",
      "An editor receives a proposal, sample chapter, and author platform summary.",
      "A small press requests the full manuscript and a brief cover letter.",
    ],
    related: ["query-letter", "synopsis", "comp-titles"],
  },
  {
    slug: "comp-titles",
    title: "Comp Titles",
    category: "Publishing",
    level: "Intermediate",
    summary:
      "Comparable books used to position a project for audience, shelf, and market.",
    principle:
      "A comp title clarifies the promise of a book without claiming equivalence to its success.",
    takeaways: [
      "Useful comps are recent, specific, and plausible for the same readership.",
      "Comps can identify tone, structure, audience, or sales channel.",
      "Overlarge comps can make a project seem naive or unfocused.",
    ],
    overview:
      "Comp titles are published works used to help agents, editors, sales teams, and booksellers understand where a new project belongs. They are a market-positioning tool, not a literary ranking. Good comps create a fast, credible map of audience expectation.",
    examples: [
      "A pitch frames a novel as the intimacy of one book with the premise engine of another.",
      "A nonfiction proposal uses comps to show the audience already buys in the category.",
      "A weak comp compares a quiet debut to a once-in-a-decade bestseller without explaining fit.",
    ],
    related: ["query-letter", "submission-package", "reader-contract"],
  },
  {
    slug: "acquiring-editor",
    title: "Acquiring Editor",
    category: "Publishing",
    level: "Foundational",
    summary:
      "The editor who champions a manuscript inside a publishing house and seeks approval to buy it.",
    principle:
      "An acquiring editor must persuade the house, not only love the manuscript.",
    takeaways: [
      "Acquisition depends on editorial enthusiasm and internal business support.",
      "The editor often prepares the project for an acquisitions meeting.",
      "After the deal, the editor usually leads developmental revision.",
    ],
    overview:
      "An acquiring editor is the publishing-house editor who evaluates submissions, decides whether to pursue a project, and advocates for it internally. Their role combines literary judgement with market argument: they must make the manuscript intelligible to editorial, sales, marketing, publicity, and finance stakeholders.",
    examples: [
      "An editor reads an agented manuscript and asks for a second read from colleagues.",
      "An editor presents the project at an acquisitions meeting.",
      "An editor buys a book and then sends a developmental edit letter.",
    ],
    related: ["literary-agent", "imprint", "developmental-edit"],
  },
  {
    slug: "imprint",
    title: "Imprint",
    category: "Publishing",
    level: "Foundational",
    summary:
      "A publishing brand within a larger house, often with its own editorial identity.",
    principle:
      "An imprint is a promise about taste, category, and audience.",
    takeaways: [
      "Large publishers may contain many imprints with different missions.",
      "Imprints help readers, agents, and booksellers understand a book's positioning.",
      "The imprint name can carry reputation even when the parent company is less visible.",
    ],
    overview:
      "An imprint is a named publishing line within a company. It may specialise by genre, audience, literary sensibility, format, or commercial lane. For writers, imprints matter because they shape editorial fit, sales expectations, and how a book is presented to the market.",
    examples: [
      "A literary imprint publishes prize-oriented fiction inside a larger trade house.",
      "A genre imprint focuses its list on romance, horror, or science fiction.",
      "A children's imprint handles picture books, middle grade, or young adult work.",
    ],
    related: ["acquiring-editor", "the-big-five", "independent-press"],
  },
  {
    slug: "the-big-five",
    title: "The Big Five",
    category: "Publishing",
    level: "Foundational",
    summary:
      "Industry shorthand for the largest corporate trade-publishing groups.",
    principle:
      "The phrase names market concentration, not a guarantee of quality or success.",
    takeaways: [
      "Big Five houses contain many imprints with distinct editorial identities.",
      "They tend to have broad distribution, sales, marketing, and rights infrastructure.",
      "Access is commonly mediated through literary agents.",
    ],
    overview:
      "The Big Five is a publishing-industry shorthand for the dominant corporate trade publishers. The term is useful because it describes scale: large lists, many imprints, national distribution, and integrated sales and rights operations. It should not be mistaken for the whole publishing ecosystem.",
    examples: [
      "A novel sells to a Big Five imprint after a multi-editor submission.",
      "An author compares a Big Five offer with one from an independent press.",
      "A book benefits from wide distribution but still depends on positioning and support.",
    ],
    related: ["imprint", "book-auction", "independent-press"],
  },
  {
    slug: "independent-press",
    title: "Independent Press",
    category: "Publishing",
    level: "Foundational",
    summary:
      "A publisher operating outside the largest corporate trade groups.",
    principle:
      "Independence changes scale; it does not automatically define quality, taste, or ambition.",
    takeaways: [
      "Independent presses can be highly selective and editorially distinctive.",
      "Some accept unagented submissions; many still use agents or reading periods.",
      "Distribution, advances, print runs, and marketing capacity vary widely.",
    ],
    overview:
      "An independent press is a publishing house outside the largest corporate groups. Independent presses often build reputation through focused lists, strong editorial identity, regional or genre specialisation, literary risk, or close author relationships. Their business terms and reach differ widely from press to press.",
    examples: [
      "A poetry collection finds its audience through a small literary press.",
      "A regional nonfiction book fits an independent publisher's list better than a conglomerate imprint.",
      "A genre press builds a loyal readership through careful curation.",
    ],
    related: ["imprint", "the-big-five", "rights"],
  },
  {
    slug: "advance",
    title: "Advance",
    category: "Publishing",
    level: "Foundational",
    summary:
      "Money paid upfront against future royalties.",
    principle:
      "An advance is not a bonus; it is prepaid royalty income tied to expected sales.",
    takeaways: [
      "The author usually keeps the advance even if the book does not earn out.",
      "Payments are often split across contract milestones.",
      "A larger advance can bring pressure as well as opportunity.",
    ],
    overview:
      "An advance is the amount a publisher pays an author before royalties are earned through sales. It is normally paid against future royalties, meaning royalty payments begin only after the book has earned back the advance under the contract's accounting terms.",
    examples: [
      "An advance is paid in portions on signing, delivery, and publication.",
      "A book earns out when accumulated royalties exceed the advance.",
      "A publisher offers a smaller advance but better rights terms.",
    ],
    related: ["royalties", "rights", "book-auction"],
  },
  {
    slug: "royalties",
    title: "Royalties",
    category: "Publishing",
    level: "Foundational",
    summary:
      "The author's contractual share of revenue from book sales or licensed rights.",
    principle:
      "Royalty language determines how success is converted into author income.",
    takeaways: [
      "Rates can differ by format, territory, channel, and sales threshold.",
      "Royalty payments may not begin until an advance earns out.",
      "Statements are part of the relationship; understanding them matters.",
    ],
    overview:
      "Royalties are the author's contractual earnings from sales or licensing after the accounting rules in the contract are applied. They may be calculated on list price, net receipts, or another defined base, and they interact closely with advances, reserves, discounts, and rights grants.",
    examples: [
      "Hardcover, paperback, ebook, and audiobook royalties use different rates.",
      "A royalty escalator increases the percentage after a sales threshold.",
      "A statement shows that a book has sold well but has not yet earned out.",
    ],
    related: ["advance", "rights", "subsidiary-rights"],
  },
  {
    slug: "rights",
    title: "Rights",
    category: "Publishing",
    level: "Intermediate",
    summary:
      "The legal permissions to publish, adapt, translate, distribute, or otherwise exploit a work.",
    principle:
      "Rights are the book's future uses; granting them casually can be expensive.",
    takeaways: [
      "Contracts define which rights are granted, reserved, or shared.",
      "Territory, language, format, and term are central rights questions.",
      "A smaller advance can be outweighed by retaining valuable rights.",
    ],
    overview:
      "Rights are the bundle of permissions attached to a literary work: print, ebook, audio, translation, territory, film, television, dramatic, merchandising, and more. Publishing contracts are largely rights documents, because they determine who may do what with the work, where, for how long, and for what compensation.",
    examples: [
      "An author grants North American print and ebook rights but reserves translation.",
      "An agent sells audio rights separately from print rights.",
      "A contract asks for broad rights the publisher is unlikely to exploit.",
    ],
    related: ["subsidiary-rights", "royalties", "option-clause"],
  },
  {
    slug: "subsidiary-rights",
    title: "Subsidiary Rights",
    category: "Publishing",
    level: "Intermediate",
    summary:
      "Secondary rights that allow a work to be licensed beyond its primary publication.",
    principle:
      "A book can have more than one market life if its rights are managed well.",
    takeaways: [
      "Translation, audio, book club, film, television, and serial rights can be subsidiary rights.",
      "Rights splits determine how income is shared between author and publisher.",
      "Retained rights may be sold separately by the agent or author.",
    ],
    overview:
      "Subsidiary rights are rights beyond the main edition or primary publishing grant. They can create additional revenue and readership through translation, audio, adaptation, excerpt, educational, or other licensing channels. Their value depends on contract language and active exploitation.",
    examples: [
      "A translation deal brings a novel into a new territory.",
      "A magazine buys first serial rights to excerpt a nonfiction book.",
      "A production company options dramatic rights.",
    ],
    related: ["rights", "royalties", "literary-agent"],
  },
  {
    slug: "option-clause",
    title: "Option Clause",
    category: "Publishing",
    level: "Intermediate",
    summary:
      "A contract term giving a publisher first opportunity to consider the author's next work.",
    principle:
      "An option clause is future leverage written into the present contract.",
    takeaways: [
      "Scope matters: the clause should define what kind of next work is covered.",
      "Timing matters: a broad or slow option can delay the author's next sale.",
      "Negotiation often narrows the clause to protect the author's flexibility.",
    ],
    overview:
      "An option clause gives a publisher a contractual first look at a future work by the same author. The practical importance lies in its limits: which work, how soon, under what response period, and what happens if the publisher declines or makes an offer the author rejects.",
    examples: [
      "A publisher asks to see the author's next novel in the same genre.",
      "An agent narrows an option from any next work to the next adult thriller.",
      "An overly broad option complicates a separate nonfiction proposal.",
    ],
    related: ["rights", "advance", "literary-agent"],
  },
  {
    slug: "book-auction",
    title: "Book Auction",
    category: "Publishing",
    level: "Intermediate",
    summary:
      "A competitive submission process in which multiple publishers bid for a project.",
    principle:
      "An auction is designed to turn editorial enthusiasm into comparable offers.",
    takeaways: [
      "Auctions can raise advances, clarify rights terms, and reveal editorial vision.",
      "The highest offer is not always the best publishing home.",
      "Auction structure is usually managed by the agent.",
    ],
    overview:
      "A book auction occurs when more than one publisher wants to acquire the same project. The agent sets rules for bidding, deadlines, rounds, and information flow. The author then compares money, rights, editorial fit, publication plan, and long-term relationship.",
    examples: [
      "Several editors bid after reading the same manuscript over a short submission window.",
      "One publisher offers less money but stronger editorial and marketing commitments.",
      "An auction ends in a pre-empt when a publisher offers enough to stop competition.",
    ],
    related: ["literary-agent", "acquiring-editor", "advance"],
  },
  {
    slug: "developmental-edit",
    title: "Developmental Edit",
    category: "Publishing",
    level: "Foundational",
    summary:
      "A large-scale editorial pass focused on structure, argument, character, and reader experience.",
    principle:
      "Developmental editing works on the book's architecture before polishing its surfaces.",
    takeaways: [
      "It may address plot, pacing, character, theme, structure, or market fit.",
      "A developmental edit letter diagnoses patterns rather than only marking lines.",
      "Line-level polish before developmental clarity can waste effort.",
    ],
    overview:
      "A developmental edit is an editorial stage concerned with the manuscript's largest working parts: premise, structure, argument, escalation, audience, clarity, character, and emotional logic. In traditional publishing, the acquiring editor often leads this stage after acquisition.",
    examples: [
      "An editor asks for a clearer midpoint reversal and a stronger ending choice.",
      "A nonfiction edit reshapes the chapter order around the reader's learning path.",
      "A memoir edit identifies where chronology obscures emotional causality.",
    ],
    related: ["acquiring-editor", "copyedit", "pacing"],
  },
  {
    slug: "copyedit",
    title: "Copyedit",
    category: "Publishing",
    level: "Foundational",
    summary:
      "An editorial pass for correctness, consistency, clarity, and house style.",
    principle:
      "A copyedit protects the reader from avoidable friction.",
    takeaways: [
      "Copyediting addresses grammar, usage, continuity, factual queries, and style consistency.",
      "It does not usually solve large structural problems.",
      "Author responses to queries are part of the edit, not an interruption of it.",
    ],
    overview:
      "A copyedit is the editorial stage that checks the manuscript's surface and consistency after the major shape is settled. It may catch grammar, spelling, punctuation, timeline slips, repeated words, unclear antecedents, factual issues, style-guide conflicts, and internal contradictions.",
    examples: [
      "A copyeditor queries whether a character's age conflicts with an earlier date.",
      "A copyedit standardises spelling, capitalization, and treatment of invented terms.",
      "A sentence is edited for clarity without changing the scene's intent.",
    ],
    related: ["developmental-edit", "proofs-and-galleys", "continuity-error"],
  },
  {
    slug: "proofs-and-galleys",
    title: "Proofs and Galleys",
    category: "Publishing",
    level: "Intermediate",
    summary:
      "Late-stage page proofs or advance copies used for correction, review, and production.",
    principle:
      "Proofs are for catching errors in the nearly finished book, not for rewriting it.",
    takeaways: [
      "Page proofs check typeset pages before final printing or release.",
      "Galleys or advance reader copies can circulate before final correction.",
      "Late changes are constrained because production has already begun.",
    ],
    overview:
      "Proofs and galleys are late production forms of a book. Page proofs let the author, proofreader, and production team catch remaining errors in layout and text. Galleys or advance reader copies may be sent to reviewers, booksellers, librarians, or media before publication, sometimes before every correction is final.",
    examples: [
      "An author reviews page proofs and marks only true errors.",
      "A galley is sent to booksellers months before publication.",
      "A proofread catches a missing line break introduced during typesetting.",
    ],
    related: ["copyedit", "developmental-edit", "chapter-hook"],
  },

  // ─────────────────────────────────────────────────────────
  // NARRATOLOGY
  // ─────────────────────────────────────────────────────────
  {
    slug: "focalization",
    title: "Focalization",
    category: "Narratology",
    level: "Advanced",
    summary: "The perspective through which narrative information is filtered.",
    principle: "Who sees is different from who speaks.",
    takeaways: [
      "A narrator may tell while a character supplies the field of perception.",
      "Shifts in focalization change what counts as knowable.",
      "Control of focalization is control of reader access.",
    ],
    overview:
      "Focalization names the perceptual and cognitive lens through which narrated events are selected, limited, and interpreted. It is useful because point of view describes the grammar of narration, while focalization describes the source of perception.",
    examples: [
      "A third-person chapter narrated in neutral prose but limited to one child's misunderstanding.",
      "An omniscient narrator briefly focalizes through a servant to expose class blindness.",
    ],
    related: ["point-of-view", "narrative-distance", "free-indirect-discourse"],
  },
  {
    slug: "implied-author",
    title: "Implied Author",
    category: "Narratology",
    level: "Advanced",
    summary: "The authorial presence inferred from the work itself.",
    principle: "The implied author is built by choices on the page, not by biography.",
    takeaways: [
      "It is distinct from the real historical author.",
      "It helps explain tone, selection, ethics, and design.",
      "Readers infer it from pattern, omission, emphasis, and judgement.",
    ],
    overview:
      "The implied author is the organising intelligence a reader reconstructs from a text. It is not the narrator and not the living writer, but the version of authorship created by the work's total arrangement.",
    examples: [
      "A cruel narrator can still imply an authorial intelligence that condemns cruelty.",
      "A fragmented novel implies an author who values fracture as form.",
    ],
    related: ["voice", "tone", "unreliable-narrator"],
  },
  {
    slug: "narratee",
    title: "Narratee",
    category: "Narratology",
    level: "Advanced",
    summary: "The listener or reader addressed inside the narrative situation.",
    principle: "Every act of telling implies someone being told.",
    takeaways: [
      "A narratee may be named, implied, or invisible.",
      "The narratee shapes what the narrator explains, hides, or assumes.",
      "Confusing narratee with actual reader flattens the narration.",
    ],
    overview:
      "The narratee is the recipient of a narrative within the fiction's communicative structure. Attending to the narratee clarifies why a narrator chooses certain explanations, defenses, omissions, or forms of intimacy.",
    examples: [
      "A confession addressed to a judge has a different narratee than one addressed to a lover.",
      "A second-person novel may invent a narratee who is not identical to the reader holding the book.",
    ],
    related: ["frame-narrative", "unreliable-narrator", "point-of-view"],
  },
  {
    slug: "mimesis-vs-diegesis",
    title: "Mimesis vs Diegesis",
    category: "Narratology",
    level: "Advanced",
    summary: "Showing enacted action versus telling narrated account.",
    principle: "A story can present events directly or report them through telling.",
    takeaways: [
      "Mimesis imitates action as if unfolding before us.",
      "Diegesis mediates events through narration and report.",
      "Most prose moves constantly between the two.",
    ],
    overview:
      "Mimesis and diegesis distinguish between represented action and narrated telling. The pair is older and broader than the workshop rule of showing versus telling, and it helps describe how narrative mediates experience.",
    examples: [
      "A fight rendered blow by blow leans mimetic.",
      "A paragraph summarising a decade of exile leans diegetic.",
    ],
    related: ["show-dont-tell", "scene-vs-summary", "narrative-distance"],
  },
  {
    slug: "fabula-vs-syuzhet",
    title: "Fabula vs Syuzhet",
    category: "Narratology",
    level: "Advanced",
    summary: "The chronological story versus the arranged plot as presented.",
    principle: "What happened and how it is told are different structures.",
    takeaways: [
      "Fabula is the inferred sequence of events.",
      "Syuzhet is the order and manner of presentation.",
      "Suspense, mystery, and irony often depend on their gap.",
    ],
    overview:
      "Fabula and syuzhet are formalist terms for the raw story chronology and the shaped presentation the reader receives. The distinction explains why two works with the same events can produce entirely different effects.",
    examples: [
      "A murder mystery's fabula begins with the crime; its syuzhet begins with the discovery.",
      "A memoir may arrange childhood late to make adult behaviour legible first.",
    ],
    related: ["in-medias-res", "mystery-and-curiosity", "reversal"],
  },
  {
    slug: "analepsis",
    title: "Analepsis",
    category: "Narratology",
    level: "Advanced",
    summary: "A backward movement in narrative time.",
    principle: "A flashback should alter the present, not merely explain it.",
    takeaways: [
      "Analepsis retrieves earlier material from a later narrative moment.",
      "It can reveal cause, trauma, motive, or contradiction.",
      "Poorly placed analepsis stalls present-tense pressure.",
    ],
    overview:
      "Analepsis is the technical term for flashback or retrospective narration. It changes the reader's understanding of the present by inserting prior events into the current sequence of telling.",
    examples: [
      "A trial scene pauses for the childhood event that made testimony impossible.",
      "A present argument is reinterpreted by a memory from the marriage's first week.",
    ],
    related: ["timeline-integrity", "scene-vs-summary", "backstory"],
  },
  {
    slug: "prolepsis",
    title: "Prolepsis",
    category: "Narratology",
    level: "Advanced",
    summary: "A forward movement that anticipates later events.",
    principle: "Foreshadowing hints; prolepsis reaches forward.",
    takeaways: [
      "It can create dread by naming a future consequence early.",
      "It changes suspense by making outcome partially known.",
      "Used carelessly, it spends tension before the scene earns it.",
    ],
    overview:
      "Prolepsis is an anticipatory leap in narrative time, ranging from a brief future-tense aside to a structural flash-forward. It lets the text make the future exert pressure on the present.",
    examples: [
      "The narrator notes that this was the last ordinary morning.",
      "A novel opens with the execution and then returns to the events that caused it.",
    ],
    related: ["foreshadowing", "suspense", "fabula-vs-syuzhet"],
  },
  {
    slug: "ellipsis",
    title: "Ellipsis",
    category: "Narratology",
    level: "Intermediate",
    summary: "A deliberate omission or gap in narrated time or information.",
    principle: "What is skipped can become as meaningful as what is shown.",
    takeaways: [
      "Ellipsis compresses time by leaving events unnarrated.",
      "A gap can create mystery, tact, speed, or trauma.",
      "The reader must still understand the shape of what was omitted.",
    ],
    overview:
      "Ellipsis is the narrative gap produced when the telling skips material. It may be a simple time jump, a strategic withholding of information, or a formal absence that the reader must interpret.",
    examples: [
      "A chapter ends before the verdict and the next begins years later.",
      "A memoir leaves a family rupture unnamed until the final third.",
    ],
    related: ["scene-break", "transitions", "mystery-and-curiosity"],
  },
  {
    slug: "stream-of-consciousness",
    title: "Stream of Consciousness",
    category: "Narratology",
    level: "Advanced",
    summary: "Narration shaped to resemble the flow of thought.",
    principle: "Consciousness has logic, but not always orderly syntax.",
    takeaways: [
      "It privileges association, perception, memory, and interruption.",
      "It can dissolve the boundary between narration and thought.",
      "Unreadability is not depth; pressure still needs shape.",
    ],
    overview:
      "Stream of consciousness attempts to render mental life as it moves, often through association, fragments, sensory impressions, and unstable syntax. It is a hallmark of modernist experimentation but appears in many degrees.",
    examples: [
      "A character walking through a city moves from shop signs to childhood memory to dread.",
      "A chapter follows thought rather than external sequence.",
    ],
    related: ["interior-monologue", "free-indirect-discourse", "syntax"],
  },
  {
    slug: "interior-monologue",
    title: "Interior Monologue",
    category: "Narratology",
    level: "Intermediate",
    summary: "Direct representation of a character's inner speech.",
    principle: "Inner speech is dramatic when it is pressured, partial, and alive.",
    takeaways: [
      "It can be quoted, unquoted, orderly, or fragmentary.",
      "It differs from summary of thought because it gives thought a present-tense surface.",
      "Too much undirected interiority can dissolve scene pressure.",
    ],
    overview:
      "Interior monologue presents a character's thought as a kind of inward speech. It may be grammatically controlled or fragmentary, but its purpose is to put the reader inside the movement of thought rather than outside it.",
    examples: [
      "A character silently rehearses a confession while saying nothing aloud.",
      "A commuter's fear appears as repeated fragments rather than explanation.",
    ],
    related: ["stream-of-consciousness", "narrative-distance", "identification"],
  },
  {
    slug: "metalepsis",
    title: "Metalepsis",
    category: "Narratology",
    level: "Advanced",
    summary: "A transgression between narrative levels.",
    principle: "Metalepsis breaks the border between frame and framed world.",
    takeaways: [
      "It can be playful, uncanny, comic, or philosophically destabilising.",
      "It often exposes narration as constructed.",
      "A small breach can reframe the whole work's reality rules.",
    ],
    overview:
      "Metalepsis occurs when a narrative crosses levels that normally remain separate: author and character, narrator and story-world, frame and embedded tale. It is a boundary violation that makes the act of telling visible.",
    examples: [
      "A character notices the narrator's description.",
      "A frame narrator appears to alter events inside the framed tale.",
    ],
    related: ["frame-narrative", "defamiliarization", "reader-contract"],
  },

  // ─────────────────────────────────────────────────────────
  // EXPANDED STRUCTURE
  // ─────────────────────────────────────────────────────────
  {
    slug: "exposition",
    title: "Exposition",
    category: "Structure",
    level: "Foundational",
    summary: "The delivery of background information the reader needs.",
    principle: "Exposition works best when information arrives under pressure.",
    takeaways: [
      "It should answer a live reader question.",
      "It can be dramatized through conflict, discovery, or consequence.",
      "Explaining too early creates drag before need.",
    ],
    overview:
      "Exposition supplies context: history, world, relationship, rules, and prior events. Its craft problem is timing, because information retains when the reader has a reason to want it.",
    examples: [
      "A political system is explained only when a character is punished by it.",
      "Family history emerges during a contested inheritance meeting.",
    ],
    failureModes: ["over-exposition", "info-dump"],
    related: ["scene-vs-summary", "reader-memory-decay", "verisimilitude"],
  },
  {
    slug: "rising-action",
    title: "Rising Action",
    category: "Structure",
    level: "Foundational",
    summary: "The sequence of complications that intensifies the central problem.",
    principle: "Rising action must change the situation, not merely extend it.",
    takeaways: [
      "Each step should raise stakes, narrow options, or reveal new knowledge.",
      "Escalation can be emotional, social, moral, or physical.",
      "Repetition without transformation produces sag.",
    ],
    overview:
      "Rising action is the structural movement from disturbance toward crisis. It converts premise into pressure through complications that make the old solution less available.",
    examples: [
      "A detective's suspects vanish one by one as the inquiry grows dangerous.",
      "A family argument spreads from private grievance to public rupture.",
    ],
    failureModes: ["saggy-middle"],
    related: ["try-fail-cycle", "escalation", "stakes"],
  },
  {
    slug: "crisis",
    title: "Crisis",
    category: "Structure",
    level: "Intermediate",
    summary: "The decisive pressure point where evasion stops working.",
    principle: "Crisis forces choice under maximum meaningful pressure.",
    takeaways: [
      "A crisis is not just danger; it is a decision point.",
      "It should expose the story's deepest value conflict.",
      "The crisis prepares the climax by making the final action necessary.",
    ],
    overview:
      "Crisis is the moment when the protagonist must choose, reveal, confess, act, or refuse. It is often near the climax, but its defining quality is decision rather than spectacle.",
    examples: [
      "A leader must choose between victory and the person victory was meant to protect.",
      "A witness must decide whether truth is worth exile.",
    ],
    related: ["climax", "want-vs-need", "stakes"],
  },
  {
    slug: "climax",
    title: "Climax",
    category: "Structure",
    level: "Foundational",
    summary: "The peak moment where the central conflict reaches decisive expression.",
    principle: "The climax should answer the story's governing pressure.",
    takeaways: [
      "It need not be loud, but it must be consequential.",
      "The strongest climaxes join outer event to inner change.",
      "A climax without prior pressure feels arbitrary.",
    ],
    overview:
      "Climax is the point of highest structural consequence: the central conflict becomes unavoidable and produces the action, revelation, or refusal that determines the ending's shape.",
    examples: [
      "A duel resolves a political conflict and a private fear at once.",
      "A quiet confession changes the terms of every earlier scene.",
    ],
    related: ["crisis", "denouement", "character-arc"],
  },
  {
    slug: "denouement",
    title: "Denouement",
    category: "Structure",
    level: "Intermediate",
    summary: "The unwinding after the climax.",
    principle: "After consequence, the reader needs changed order made visible.",
    takeaways: [
      "Denouement shows what the climax has altered.",
      "It can settle plot, emotion, theme, or social arrangement.",
      "Too much denouement explains what consequence should reveal.",
    ],
    overview:
      "Denouement is the post-climactic settling of the story's threads. It lets the reader see the new equilibrium, the remaining wound, or the price of resolution.",
    examples: [
      "A village returns to ritual, but the absent chair remains.",
      "A final conversation shows the relationship cannot return to its old terms.",
    ],
    related: ["climax", "closure", "weak-payoff"],
  },
  {
    slug: "anagnorisis",
    title: "Anagnorisis",
    category: "Structure",
    level: "Advanced",
    summary: "A moment of recognition or discovery that changes understanding.",
    principle: "Recognition matters when knowledge arrives too late to be innocent.",
    takeaways: [
      "It is central to many tragic and revelatory structures.",
      "The discovery should reorganise prior events.",
      "Recognition without consequence is only information.",
    ],
    overview:
      "Anagnorisis is the movement from ignorance to knowledge, often a recognition of identity, guilt, kinship, truth, or self. In strong stories it changes action because the old interpretation can no longer hold.",
    examples: [
      "A ruler discovers the criminal they hunt is themselves.",
      "A daughter recognises the enemy's story as her own family history.",
    ],
    related: ["revelation", "reversal", "dramatic-irony"],
  },
  {
    slug: "parallel-plot",
    title: "Parallel Plot",
    category: "Structure",
    level: "Intermediate",
    summary: "Two or more plot lines arranged to echo, contrast, or converge.",
    principle: "Parallel plots earn their space by producing comparison.",
    takeaways: [
      "They can mirror theme across different circumstances.",
      "Convergence should feel prepared, not mechanically convenient.",
      "A parallel line that adds no pressure becomes a detached subplot.",
    ],
    overview:
      "A parallel plot runs alongside another plot so that the reader reads them in relation. The parallel may create irony, contrast, foreshadowing, thematic argument, or eventual convergence.",
    examples: [
      "A parent's courtship and a child's courtship test the same idea of loyalty.",
      "A political collapse and a marriage collapse unfold in alternating chapters.",
    ],
    related: ["subplot", "juxtaposition", "theme"],
  },

  // ─────────────────────────────────────────────────────────
  // EXPANDED PLOT MECHANICS
  // ─────────────────────────────────────────────────────────
  {
    slug: "causality",
    title: "Causality",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "The chain by which events produce other events.",
    principle: "Because is stronger than and then.",
    takeaways: [
      "Causality lets readers feel inevitability rather than sequence.",
      "Weak causal links make plot feel episodic.",
      "Coincidence can begin trouble, but should rarely solve it.",
    ],
    overview:
      "Causality is the logic by which one event leads to another. It is the difference between incidents arranged in order and a plot whose pressures accumulate.",
    examples: [
      "A lie forces a cover story, which creates the alibi that later traps the liar.",
      "A mercy shown early leaves alive the witness who changes the trial.",
    ],
    related: ["setup-and-payoff", "conflict", "coincidence"],
  },
  {
    slug: "coincidence",
    title: "Coincidence",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "An unlikely event not caused by the story's prior chain.",
    principle: "Coincidence may create problems more easily than it may solve them.",
    takeaways: [
      "Readers tolerate chance that complicates.",
      "Chance that rescues often feels like cheating.",
      "The more consequential the coincidence, the more framing it needs.",
    ],
    overview:
      "Coincidence is the arrival of an event without clear causal preparation. It can feel lifelike, comic, tragic, or contrived depending on whether it increases pressure or removes it.",
    examples: [
      "A missed train forces two enemies into the same inn.",
      "A lost letter appears at the climax with no prior path and solves everything badly.",
    ],
    failureModes: ["deus-ex-machina", "contrivance"],
    related: ["causality", "reader-contract", "deus-ex-machina"],
  },
  {
    slug: "complication",
    title: "Complication",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "A development that makes the current problem harder or richer.",
    principle: "A complication changes the problem's shape.",
    takeaways: [
      "It can add obstacle, cost, knowledge, urgency, or moral pressure.",
      "Good complications narrow easy choices.",
      "Random difficulty is not the same as complication.",
    ],
    overview:
      "A complication is any development that alters the protagonist's path by making the goal harder, stranger, more costly, or more morally charged.",
    examples: [
      "The witness agrees to testify but asks for protection the protagonist cannot provide.",
      "The treasure exists, but retrieving it will flood the only safe town.",
    ],
    related: ["try-fail-cycle", "rising-action", "stakes"],
  },
  {
    slug: "revelation",
    title: "Revelation",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "New information that changes the meaning of prior events.",
    principle: "A revelation should reorganise the story, not merely add data.",
    takeaways: [
      "It is strongest when surprising and retrospectively prepared.",
      "It can alter motive, identity, cause, or stakes.",
      "A revelation without aftermath is trivia.",
    ],
    overview:
      "Revelation is the disclosure of information that changes what the reader or character understands. It often functions as a hinge between mystery and consequence.",
    examples: [
      "The victim was protecting the accused, not fearing them.",
      "A family story turns out to be a cover for an act of mercy.",
    ],
    related: ["anagnorisis", "reversal", "mystery-and-curiosity"],
  },
  {
    slug: "recognition-scene",
    title: "Recognition Scene",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "A scene built around the discovery of identity, truth, or relation.",
    principle: "Recognition lands when the audience sees both old ignorance and new consequence.",
    takeaways: [
      "It often joins revelation to emotional reversal.",
      "The scene should change what characters can do next.",
      "Recognition can be private, public, comic, or tragic.",
    ],
    overview:
      "A recognition scene stages the moment when a character recognises what or whom they have been misreading. It is the dramatic embodiment of anagnorisis.",
    examples: [
      "A scar identifies the stranger as the lost heir.",
      "A repeated phrase reveals that two enemies share the same teacher.",
    ],
    related: ["anagnorisis", "dramatic-irony", "revelation"],
  },
  {
    slug: "twist",
    title: "Twist",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "A turn that sharply reorients the reader's understanding.",
    principle: "A twist should reveal hidden order, not replace order with shock.",
    takeaways: [
      "It must be possible to reread as prepared.",
      "It should change stakes, meaning, or character position.",
      "A twist that exists only to surprise is quickly consumed.",
    ],
    overview:
      "A twist is a designed reorientation of expectation. It differs from a random surprise because the new information makes the earlier material more coherent, not less.",
    examples: [
      "The apparent rescuer has been arranging the danger.",
      "The narrator's addressee is revealed to be dead.",
    ],
    failureModes: ["unearned-twist"],
    related: ["reversal", "setup-and-payoff", "reader-contract"],
  },
  {
    slug: "escalation",
    title: "Escalation",
    category: "Plot Mechanics",
    level: "Foundational",
    summary: "The increase of pressure, cost, danger, intimacy, or consequence.",
    principle: "Escalation is change in pressure, not just more events.",
    takeaways: [
      "It can move inward as well as outward.",
      "Escalation should alter available choices.",
      "Without escalation, pacing feels flat even when events are busy.",
    ],
    overview:
      "Escalation is the rising intensity of a narrative problem. It may increase physical risk, emotional exposure, social cost, moral compromise, or informational urgency.",
    examples: [
      "A private lie becomes a public accusation.",
      "A small theft forces an alliance with the person most likely to expose it.",
    ],
    related: ["rising-action", "stakes", "try-fail-cycle"],
  },
  {
    slug: "constraint",
    title: "Constraint",
    category: "Plot Mechanics",
    level: "Intermediate",
    summary: "A limit that shapes what characters can do.",
    principle: "Constraint creates invention by removing easy exits.",
    takeaways: [
      "Constraints can be physical, social, legal, moral, formal, or temporal.",
      "A clear limit makes choices legible.",
      "Changing constraints can refresh a middle act.",
    ],
    overview:
      "Constraint is any boundary that limits action and therefore sharpens drama. It makes agency visible because characters must choose within pressure rather than from infinite possibility.",
    examples: [
      "A rescue must happen before the tide covers the causeway.",
      "A diplomat can tell the truth only in a room where every word is recorded.",
    ],
    related: ["conflict", "stakes", "active-vs-reactive-protagonist"],
  },

  // ─────────────────────────────────────────────────────────
  // EXPANDED CHARACTER
  // ─────────────────────────────────────────────────────────
  {
    slug: "antagonist",
    title: "Antagonist",
    category: "Character",
    level: "Foundational",
    summary: "The force or figure that actively opposes the protagonist's desire.",
    principle: "An antagonist is defined by opposition, not villainy.",
    takeaways: [
      "The antagonist may be a person, system, environment, or self.",
      "Strong antagonists pressure the protagonist's weakness.",
      "A villain without structural opposition is only decoration.",
    ],
    overview:
      "An antagonist is the opposing force that makes the protagonist's pursuit difficult and meaningful. The role is structural before it is moral.",
    examples: [
      "A loving parent antagonises a protagonist's need for independence.",
      "A bureaucracy blocks a rescue without any single evil official.",
    ],
    related: ["conflict", "foil", "fatal-flaw"],
  },
  {
    slug: "motivation",
    title: "Motivation",
    category: "Character",
    level: "Foundational",
    summary: "The reason a character acts.",
    principle: "Action convinces when desire has cause.",
    takeaways: [
      "Motivation can be conscious, hidden, contradictory, or mistaken.",
      "Readers need enough motive to read choice as character.",
      "Unmotivated action feels like authorial manipulation.",
    ],
    overview:
      "Motivation is the causal interior of character action: what a person wants, fears, believes, owes, or refuses. It gives behaviour continuity without making it predictable.",
    examples: [
      "A character steals not from greed but from terror of being useless.",
      "A public betrayal is motivated by a private debt.",
    ],
    related: ["want-vs-need", "lie-the-character-believes", "backstory"],
  },
  {
    slug: "backstory",
    title: "Backstory",
    category: "Character",
    level: "Foundational",
    summary: "Prior events that shape the present character or conflict.",
    principle: "Backstory matters when it changes present action.",
    takeaways: [
      "It should be deployed by need, not chronology.",
      "The reader does not need everything the writer knows.",
      "Backstory becomes dramatic when it returns as pressure.",
    ],
    overview:
      "Backstory is the earlier life, history, wound, training, or relationship that informs the story's present. Its craft problem is placement: too soon and it burdens, too late and it cannot deepen.",
    examples: [
      "A childhood oath explains why an adult refuses an easy compromise.",
      "A former friendship makes the current betrayal hurt in two time periods.",
    ],
    failureModes: ["info-dump"],
    related: ["analepsis", "motivation", "iceberg-theory"],
  },
  {
    slug: "character-web",
    title: "Character Web",
    category: "Character",
    level: "Intermediate",
    summary: "The network of characters arranged around shared pressures and contrasts.",
    principle: "A cast is strongest when each major figure tests the story's central question differently.",
    takeaways: [
      "Foils, allies, rivals, and doubles can all belong to the web.",
      "Each major character should reveal another angle of the theme.",
      "A web prevents secondary characters from feeling interchangeable.",
    ],
    overview:
      "A character web is the designed relationship among a cast's desires, wounds, roles, and thematic positions. It lets the story argue through multiple lives rather than one protagonist alone.",
    examples: [
      "Three siblings each answer inheritance with loyalty, greed, and escape.",
      "A mentor, rival, and lover each pressure a different version of courage.",
    ],
    related: ["foil", "subplot", "theme"],
  },
  {
    slug: "round-vs-flat-character",
    title: "Round vs Flat Character",
    category: "Character",
    level: "Intermediate",
    summary: "A distinction between psychologically complex and functionally simple characters.",
    principle: "Flatness is not always failure; mismatch is.",
    takeaways: [
      "Round characters can surprise convincingly.",
      "Flat characters may serve comedy, allegory, satire, or economy.",
      "A major role written flatter than its function requires feels thin.",
    ],
    overview:
      "Round and flat character are terms for degrees of complexity and dimensionality. The useful question is not whether every character is round, but whether the degree of complexity fits the role.",
    examples: [
      "A comic messenger can be flat without harming the story.",
      "A protagonist whose choices never exceed one trait feels underbuilt.",
    ],
    failureModes: ["flat-character"],
    related: ["characterization", "stock-character", "archetype"],
  },
  {
    slug: "stock-character",
    title: "Stock Character",
    category: "Character",
    level: "Intermediate",
    summary: "A conventional character type recognised by role and pattern.",
    principle: "A stock character trades individuality for speed of recognition.",
    takeaways: [
      "Stock types can serve comedy, genre, and social satire.",
      "They become weak when the story needs inner life they do not have.",
      "Refreshing a stock role requires pressure, specificity, or inversion.",
    ],
    overview:
      "A stock character is a familiar type whose traits and function are quickly legible: miser, braggart, ingenue, confidant, hardboiled detective. The type can be efficient or lazy depending on use.",
    examples: [
      "A pompous official appears briefly to embody institutional vanity.",
      "A genre mentor begins as stock but gains force through a private contradiction.",
    ],
    related: ["archetype", "stereotype", "round-vs-flat-character"],
  },
  {
    slug: "stereotype",
    title: "Stereotype",
    category: "Character",
    level: "Intermediate",
    summary: "A reductive character pattern based on inherited social assumptions.",
    principle: "Stereotype replaces observation with received simplification.",
    takeaways: [
      "It narrows character into a cultural shortcut.",
      "It can harm both craft and ethics.",
      "Subversion requires more than reversing a single trait.",
    ],
    overview:
      "A stereotype is a flattened representation that relies on social cliché rather than particularity. Unlike an archetype or stock role, it often imports unexamined assumptions about identity, class, gender, race, age, or culture.",
    examples: [
      "A character's entire personality is reduced to accent and occupation.",
      "A supposed subversion keeps the same assumptions while changing only competence.",
    ],
    failureModes: ["flat-character"],
    related: ["characterization", "stock-character", "verisimilitude"],
  },
  {
    slug: "double",
    title: "Double",
    category: "Character",
    level: "Advanced",
    summary: "A character who mirrors, splits, or externalises another self.",
    principle: "The double makes identity visible by dividing it.",
    takeaways: [
      "Doubles can express repression, fate, rivalry, or alternate possibility.",
      "They often operate through uncanny resemblance and difference.",
      "A double should pressure identity, not merely duplicate it.",
    ],
    overview:
      "The double is a character pattern in which one figure mirrors, shadows, or splits another. It is common in gothic, psychological, modernist, and mythic forms because it externalises internal conflict.",
    examples: [
      "A rival lives the life the protagonist refused.",
      "A stranger's resemblance forces a character to confront their hidden violence.",
    ],
    related: ["foil", "archetype", "gothic"],
  },

  // ─────────────────────────────────────────────────────────
  // EXPANDED THEME & SYMBOL
  // ─────────────────────────────────────────────────────────
  {
    slug: "allegory",
    title: "Allegory",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary: "A narrative whose literal elements systematically carry abstract meaning.",
    principle: "Allegory turns story into a second-order argument.",
    takeaways: [
      "Characters, places, and events often correspond to ideas or institutions.",
      "It differs from symbol by its sustained system of meaning.",
      "Too rigid an allegory can become diagram rather than drama.",
    ],
    overview:
      "Allegory is an extended mode of meaning in which the visible story points consistently toward another level of moral, political, spiritual, or philosophical significance.",
    examples: [
      "A journey through named temptations stages a spiritual education.",
      "An animal society represents political revolution and its betrayals.",
    ],
    related: ["symbol", "theme", "satire"],
  },
  {
    slug: "ambiguity",
    title: "Ambiguity",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary: "A meaningful openness that permits more than one reading.",
    principle: "Ambiguity is productive when the alternatives matter.",
    takeaways: [
      "It is not the same as confusion.",
      "Strong ambiguity is bounded by textual evidence.",
      "It can preserve moral, emotional, or metaphysical complexity.",
    ],
    overview:
      "Ambiguity occurs when a text sustains multiple plausible interpretations without collapsing into a single answer. Its power lies in pressure between meanings, not in vagueness.",
    examples: [
      "A ghost story never fully decides whether the haunting is supernatural or psychological.",
      "A final gesture can be read as forgiveness or surrender.",
    ],
    related: ["subtext", "reader-contract", "closure"],
  },
  {
    slug: "paradox",
    title: "Paradox",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary: "An apparent contradiction that reveals a deeper truth or tension.",
    principle: "Paradox makes thought move by refusing easy resolution.",
    takeaways: [
      "It can operate in phrase, character, theme, or plot.",
      "The contradiction should be meaningful rather than merely clever.",
      "Paradox often preserves complexity that thesis would flatten.",
    ],
    overview:
      "Paradox is a statement or structure that appears contradictory but discloses a more complex relation. Literature often uses paradox to hold incompatible truths in active tension.",
    examples: [
      "A character gains freedom only by accepting obligation.",
      "A comic ending reveals the seriousness of the social wound.",
    ],
    related: ["theme", "irony", "oxymoron"],
  },
  {
    slug: "countertheme",
    title: "Countertheme",
    category: "Theme & Symbol",
    level: "Advanced",
    summary: "A competing thematic claim that tests the story's dominant concern.",
    principle: "Theme grows stronger when the story gives its opposition real force.",
    takeaways: [
      "Countertheme prevents the work from becoming sermon.",
      "It may be carried by a foil, subplot, or antagonist.",
      "The ending need not destroy the countertheme; it may leave residue.",
    ],
    overview:
      "A countertheme is the rival argument or value system inside a work. It pressures the main theme by showing what a serious alternative would cost, achieve, or reveal.",
    examples: [
      "A novel about mercy gives vengeance its strongest case through a wronged survivor.",
      "A romance about openness lets a guarded character be right about danger.",
    ],
    related: ["theme", "foil", "subplot"],
  },
  {
    slug: "moral-premise",
    title: "Moral Premise",
    category: "Theme & Symbol",
    level: "Intermediate",
    summary: "The value proposition that links inner error to outer consequence.",
    principle: "A story's moral logic is strongest when tested through action.",
    takeaways: [
      "It can guide arcs without becoming a stated moral.",
      "The premise should be dramatised by choices and consequences.",
      "Overly neat moral premise reduces complexity.",
    ],
    overview:
      "Moral premise names the underlying value logic by which a story connects belief, action, consequence, and change. It is a tool for reading how a story judges choices.",
    examples: [
      "A story tests whether control protects love or destroys it.",
      "A tragedy links prideful certainty to social and personal ruin.",
    ],
    related: ["theme", "lie-the-character-believes", "character-arc"],
  },
  {
    slug: "intertextuality",
    title: "Intertextuality",
    category: "Theme & Symbol",
    level: "Advanced",
    summary: "The way a text derives meaning through relation to other texts.",
    principle: "No text speaks entirely alone.",
    takeaways: [
      "It includes allusion, adaptation, quotation, genre memory, and revision.",
      "Readers may recognise different intertexts at different depths.",
      "Intertextuality can honour, argue with, or undo its sources.",
    ],
    overview:
      "Intertextuality describes the network of prior texts, forms, myths, genres, and phrases through which a work makes meaning. It expands allusion into a broader theory of textual relation.",
    examples: [
      "A modern novel rewrites a myth from the silenced character's view.",
      "A detective story gains force by violating rules older detective stories trained readers to expect.",
    ],
    related: ["allusion", "genre", "parody"],
  },

  // ─────────────────────────────────────────────────────────
  // RHETORIC & FIGURES
  // ─────────────────────────────────────────────────────────
  {
    slug: "metonymy",
    title: "Metonymy",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "A figure that names something by an associated thing.",
    principle: "Association can stand in for identity.",
    takeaways: [
      "Metonymy relies on contiguity rather than resemblance.",
      "It can compress institutions, places, and powers into concrete terms.",
      "It works when the association is culturally or textually legible.",
    ],
    overview:
      "Metonymy substitutes an associated term for the thing meant: crown for monarchy, press for journalism, stage for theatre. Unlike metaphor, it does not claim likeness; it uses relation.",
    examples: [
      "The crown refuses the petition.",
      "The whole room waited for the bench to speak.",
    ],
    related: ["synecdoche", "metaphor", "symbol"],
  },
  {
    slug: "synecdoche",
    title: "Synecdoche",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "A figure in which part stands for whole, or whole for part.",
    principle: "Scale can concentrate meaning.",
    takeaways: [
      "It is often treated as a subtype of metonymy.",
      "The chosen part should reveal the whole's pressure.",
      "It can humanise abstraction or reduce people to function.",
    ],
    overview:
      "Synecdoche uses a part-whole relation to carry meaning. It can make an army into hands, a ship into sails, or a nation into a crowd of faces.",
    examples: [
      "All hands on deck.",
      "A city of hungry mouths waited outside the bakery.",
    ],
    related: ["metonymy", "imagery", "diction"],
  },
  {
    slug: "hyperbole",
    title: "Hyperbole",
    category: "Rhetoric & Figures",
    level: "Foundational",
    summary: "Deliberate exaggeration for force, humour, or emphasis.",
    principle: "Exaggeration reveals feeling by exceeding fact.",
    takeaways: [
      "Hyperbole is not meant to be literal.",
      "It can signal voice, scale, comedy, or emotional intensity.",
      "Uncontrolled hyperbole weakens stakes by inflating everything.",
    ],
    overview:
      "Hyperbole is purposeful overstatement. It can enlarge emotion, sharpen satire, or make a voice memorable, provided the reader understands the excess as expressive.",
    examples: [
      "He had apologised a thousand times before breakfast.",
      "The silence weighed more than the house.",
    ],
    related: ["voice", "satire", "tone"],
  },
  {
    slug: "litotes",
    title: "Litotes",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "Understatement through negating the opposite.",
    principle: "Saying less can imply more.",
    takeaways: [
      "Litotes often produces irony, restraint, or social coding.",
      "It depends on the reader hearing the suppressed positive claim.",
      "It can make emotion more powerful by refusing display.",
    ],
    overview:
      "Litotes is a rhetorical understatement such as not bad for good or not unkind for kind. Its force lies in indirection, often making the speaker's restraint part of the meaning.",
    examples: [
      "The ruined wedding was not ideal.",
      "She was not unaware of his fear.",
    ],
    related: ["irony", "subtext", "tone"],
  },
  {
    slug: "oxymoron",
    title: "Oxymoron",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "A compressed phrase joining contradictory terms.",
    principle: "Contradiction can make a state newly visible.",
    takeaways: [
      "It is the local phrase-level cousin of paradox.",
      "It should disclose tension, not merely decorate.",
      "Strong oxymoron makes the contradiction feel exact.",
    ],
    overview:
      "Oxymoron brings apparently incompatible words together in a single phrase. It is useful when an experience is best captured by contradiction rather than description.",
    examples: [
      "A terrible mercy.",
      "The room was filled with eloquent silence.",
    ],
    related: ["paradox", "diction", "compression"],
  },
  {
    slug: "apostrophe",
    title: "Apostrophe",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "Direct address to an absent, dead, abstract, or nonhuman addressee.",
    principle: "Address can make absence theatrically present.",
    takeaways: [
      "It turns lyric or rhetorical pressure outward.",
      "The addressee need not be able to answer.",
      "It can heighten grief, praise, accusation, or invocation.",
    ],
    overview:
      "Apostrophe occurs when a speaker turns to address someone or something not literally present or responsive. It is common in poetry, drama, prayer, elegy, and heightened prose.",
    examples: [
      "O memory, leave the room for once.",
      "A mourner speaks directly to the dead child.",
    ],
    related: ["speaker", "soliloquy", "personification"],
  },
  {
    slug: "anaphora",
    title: "Anaphora",
    category: "Rhetoric & Figures",
    level: "Foundational",
    summary: "Repetition at the beginning of successive phrases or clauses.",
    principle: "Initial repetition builds rhythm, emphasis, and expectation.",
    takeaways: [
      "It can create momentum, ceremony, insistence, or argument.",
      "Variation after the repeated opening keeps it alive.",
      "Overuse turns emphasis into monotony.",
    ],
    overview:
      "Anaphora is the repeated beginning of successive units. It is one of the most visible ways prose and poetry turn repetition into pattern.",
    examples: [
      "We waited for rain. We waited for news. We waited for the door.",
      "I remember the road, I remember the smoke, I remember nothing after.",
    ],
    related: ["repetition", "cadence", "sentence-rhythm"],
  },
  {
    slug: "epistrophe",
    title: "Epistrophe",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "Repetition at the end of successive phrases or clauses.",
    principle: "Final repetition makes each unit land on the same pressure point.",
    takeaways: [
      "It creates closure, insistence, and accumulating force.",
      "It can sound ceremonial, comic, obsessive, or accusatory.",
      "The repeated ending should gain weight through return.",
    ],
    overview:
      "Epistrophe repeats the ending of successive units. Where anaphora launches each phrase from the same place, epistrophe drives each phrase toward the same destination.",
    examples: [
      "They lied in spring, they lied in court, they lied at the grave.",
      "No money for bread, no money for coal, no money for mercy.",
    ],
    related: ["anaphora", "repetition", "cadence"],
  },
  {
    slug: "chiasmus",
    title: "Chiasmus",
    category: "Rhetoric & Figures",
    level: "Advanced",
    summary: "A mirrored reversal of grammatical or conceptual structure.",
    principle: "Reversal in form can reveal reversal in thought.",
    takeaways: [
      "Chiasmus often follows an ABBA pattern.",
      "It can make a line feel balanced, aphoristic, or inevitable.",
      "Clever symmetry without necessity sounds ornamental.",
    ],
    overview:
      "Chiasmus arranges terms or structures in mirrored order. It is a rhetorical figure of crossing, useful for showing reciprocity, inversion, irony, or conceptual balance.",
    examples: [
      "She left the city for freedom and found freedom leaving the city.",
      "He shaped the law, and the law shaped him.",
    ],
    related: ["inversion", "sentence-rhythm", "paradox"],
  },
  {
    slug: "ekphrasis",
    title: "Ekphrasis",
    category: "Rhetoric & Figures",
    level: "Advanced",
    summary: "Verbal representation of visual art or visual object.",
    principle: "Ekphrasis turns looking into interpretation.",
    takeaways: [
      "It is never only description; it stages the act of seeing.",
      "The described artwork can mirror, resist, or judge the observer.",
      "It can create dialogue between media.",
    ],
    overview:
      "Ekphrasis is writing that represents a visual artwork, image, or object. Its interest lies in how language translates visual form and how the act of description exposes the viewer.",
    examples: [
      "A poem addresses a painted figure who cannot answer.",
      "A novel describes a portrait until the observer's desire becomes the subject.",
    ],
    related: ["imagery", "symbol", "objective-correlative"],
  },
  {
    slug: "satire",
    title: "Satire",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "Ridicule or distortion used to expose vice, folly, or corruption.",
    principle: "Satire entertains by judging.",
    takeaways: [
      "It needs a target and a standard of judgement.",
      "Satire may be comic, savage, playful, or bleak.",
      "If the target is unclear, satire can look like endorsement.",
    ],
    overview:
      "Satire uses humour, exaggeration, irony, parody, or grotesque distortion to criticize people, institutions, habits, or systems. It depends on a felt gap between what is and what should be.",
    examples: [
      "A bureaucracy is exaggerated until its cruelty becomes visible as procedure.",
      "A polite dinner scene exposes an entire class system.",
    ],
    related: ["irony", "parody", "allegory"],
  },
  {
    slug: "parody",
    title: "Parody",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "Imitation that exposes, mocks, or refunctions a recognizable style or form.",
    principle: "Parody depends on the reader hearing the original through the imitation.",
    takeaways: [
      "It can mock, homage, critique, or renew its source.",
      "The target must be recognisable enough to be activated.",
      "Parody without transformation is only mimicry.",
    ],
    overview:
      "Parody imitates the features of a text, genre, style, or discourse in order to create critical or comic distance. It is intertextual by design.",
    examples: [
      "A mock-epic style is applied to a petty household dispute.",
      "A detective formula is exaggerated until its assumptions become comic.",
    ],
    related: ["intertextuality", "satire", "pastiche"],
  },
  {
    slug: "pastiche",
    title: "Pastiche",
    category: "Rhetoric & Figures",
    level: "Intermediate",
    summary: "Imitation or assemblage of recognizable styles without necessary mockery.",
    principle: "Pastiche borrows style as material.",
    takeaways: [
      "It may be homage, collage, exercise, or critique.",
      "Unlike parody, it need not ridicule its source.",
      "The borrowed style should do work beyond display.",
    ],
    overview:
      "Pastiche imitates or combines prior styles, genres, or voices. Its effect can be affectionate, decorative, postmodern, critical, or archival depending on how the borrowing is framed.",
    examples: [
      "A novel chapter adopts the style of a Victorian newspaper report.",
      "A story assembles noir, fairy tale, and academic prose into one surface.",
    ],
    related: ["parody", "intertextuality", "voice"],
  },

  // ─────────────────────────────────────────────────────────
  // GENRE & FORM
  // ─────────────────────────────────────────────────────────
  {
    slug: "genre",
    title: "Genre",
    category: "Genre & Form",
    level: "Foundational",
    summary: "A category of works organised by shared conventions and reader expectations.",
    principle: "Genre is a contract before it is a label.",
    takeaways: [
      "Genres teach readers what to expect and how to read.",
      "A work can belong to several genres at once.",
      "Innovation depends on knowing what convention is being bent.",
    ],
    overview:
      "Genre names a recognisable field of conventions, forms, settings, plots, affects, and expectations. It is both a market category and a literary structure of reading.",
    examples: [
      "A mystery promises an inquiry and some form of answer.",
      "A gothic novel trains the reader to read setting as psychological pressure.",
    ],
    related: ["reader-contract", "convention", "trope"],
  },
  {
    slug: "mode",
    title: "Mode",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A manner or tonal logic that can appear across genres.",
    principle: "Mode describes how a work operates, not just where it shelves.",
    takeaways: [
      "Modes include tragic, comic, pastoral, gothic, satiric, and elegiac patterns.",
      "A mode can inflect many genres.",
      "Mode helps describe works that cross market categories.",
    ],
    overview:
      "Mode is a broader formal or tonal way of organising experience. Unlike genre, it need not define a shelf; it describes the work's operating logic.",
    examples: [
      "A science-fiction novel may operate in pastoral mode.",
      "A realist family story may turn gothic in its treatment of the house.",
    ],
    related: ["genre", "tone", "gothic"],
  },
  {
    slug: "convention",
    title: "Convention",
    category: "Genre & Form",
    level: "Foundational",
    summary: "An expected pattern, device, or rule within a form or genre.",
    principle: "Convention is shared knowledge between writer and reader.",
    takeaways: [
      "Conventions create legibility and expectation.",
      "Breaking convention works only when the convention is felt.",
      "A convention can be refreshed through context or consequence.",
    ],
    overview:
      "A convention is a recognised formal or genre practice: the detective's reveal, the comedy's social repair, the lyric's speaker, the gothic house. Conventions are not automatically clichés; they are tools with history.",
    examples: [
      "A romance convention promises emotional resolution around the central relationship.",
      "A tragedy convention prepares the reader for recognition and irreversible cost.",
    ],
    related: ["genre", "trope", "reader-contract"],
  },
  {
    slug: "trope",
    title: "Trope",
    category: "Genre & Form",
    level: "Foundational",
    summary: "A recurring pattern of situation, image, character, or turn.",
    principle: "A trope is raw material; execution decides freshness.",
    takeaways: [
      "Tropes create fast recognition.",
      "They can be fulfilled, inverted, combined, or interrogated.",
      "Calling something a trope does not make it weak.",
    ],
    overview:
      "Trope is a broad term for recurring patterns readers recognise: enemies to lovers, the haunted house, the chosen one, the locked room. A trope becomes stale only when the work stops particularising it.",
    examples: [
      "A chosen-one story asks what communal cost creates the chosen figure.",
      "A locked-room mystery uses the old pattern to test digital surveillance.",
    ],
    related: ["archetype", "convention", "inversion"],
  },
  {
    slug: "tragedy",
    title: "Tragedy",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A form organised around irreversible loss, recognition, and consequence.",
    principle: "Tragedy makes suffering intelligible without making it small.",
    takeaways: [
      "It often joins error, fate, character, and social order.",
      "Recognition may arrive too late to prevent cost.",
      "The ending should feel necessary, not merely unhappy.",
    ],
    overview:
      "Tragedy is a major dramatic and narrative form in which conflict leads toward serious, often irreversible consequence. Its force lies in necessity, recognition, and the dignity or terror of loss.",
    examples: [
      "A ruler's strength becomes the error that destroys the city.",
      "A family curse is fulfilled through choices meant to escape it.",
    ],
    related: ["fatal-flaw", "anagnorisis", "catharsis"],
  },
  {
    slug: "comedy",
    title: "Comedy",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A form oriented toward social release, exposure, and renewal.",
    principle: "Comedy reveals disorder by arranging a return, repair, or release.",
    takeaways: [
      "Comedy is not simply anything funny.",
      "It often ends in recognition, reintegration, marriage, feast, or restored community.",
      "Comic form can carry severe social criticism.",
    ],
    overview:
      "Comedy is a literary and dramatic form that moves through confusion, exposure, and constraint toward some kind of release or reordering. Its laughter often depends on social diagnosis.",
    examples: [
      "A mistaken identity plot exposes class performance before ending in marriage.",
      "A satire uses comic absurdity to reveal institutional violence.",
    ],
    related: ["satire", "irony", "genre"],
  },
  {
    slug: "romance",
    title: "Romance",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A mode or genre of desire, adventure, idealisation, and eventual fulfilment.",
    principle: "Romance tests whether longing can find a livable form.",
    takeaways: [
      "As a mode, romance reaches beyond the modern love genre.",
      "It often uses quest, separation, recognition, and restoration.",
      "Modern genre romance carries strong reader-contract expectations.",
    ],
    overview:
      "Romance can mean a market genre centred on a love relationship, but in literary history it also names a broader mode of adventure, wonder, quest, and idealised desire.",
    examples: [
      "A medieval romance sends a knight through tests of identity and loyalty.",
      "A contemporary romance structures its plot around the central relationship's earned union.",
    ],
    related: ["genre", "reader-contract", "recognition-scene"],
  },
  {
    slug: "gothic",
    title: "Gothic",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A mode of haunted spaces, buried histories, dread, and unstable boundaries.",
    principle: "The gothic makes the past architectural.",
    takeaways: [
      "Setting often carries repressed history.",
      "Fear may be supernatural, psychological, social, or all three.",
      "The gothic thrives on uncertainty between explanation and haunting.",
    ],
    overview:
      "Gothic is a genre and mode built from enclosure, dread, inheritance, secrets, ruins, doubles, and haunted space. It turns setting into pressure from the past.",
    examples: [
      "A house seems to remember what the family refuses to say.",
      "A double appears as both supernatural threat and psychological truth.",
    ],
    related: ["setting-as-character", "double", "ambiguity"],
  },
  {
    slug: "bildungsroman",
    title: "Bildungsroman",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A novel of formation, education, and maturation.",
    principle: "The form asks what kind of self society makes possible.",
    takeaways: [
      "It tracks development across youth, education, work, love, and social entry.",
      "The ending may reconcile the self to society or expose the cost of doing so.",
      "Formation can be intellectual, moral, artistic, sexual, or political.",
    ],
    overview:
      "The Bildungsroman is the novel of formation: a protagonist grows into, against, or away from a social world. Its central drama is development under social pressure.",
    examples: [
      "A young artist discovers that vocation requires exile from home.",
      "A student learns the language of class mobility and its cost.",
    ],
    related: ["character-arc", "genre", "motivation"],
  },
  {
    slug: "pastoral",
    title: "Pastoral",
    category: "Genre & Form",
    level: "Intermediate",
    summary: "A mode that imagines rural simplicity against social complexity.",
    principle: "Pastoral is never only about the countryside; it is about contrast.",
    takeaways: [
      "It can idealise, critique, mourn, or expose rural life.",
      "The city-country contrast often carries moral and political weight.",
      "Anti-pastoral works reveal what idealisation hides.",
    ],
    overview:
      "Pastoral is a literary mode centred on rural life, retreat, shepherds, landscape, and simplicity, often as a way to think about labour, class, desire, art, and the corruption of social worlds.",
    examples: [
      "A courtly poem imagines shepherd life as freedom from politics.",
      "A modern novel breaks pastoral fantasy by showing rural labour and poverty.",
    ],
    related: ["setting-as-character", "mode", "verisimilitude"],
  },

  // ─────────────────────────────────────────────────────────
  // POETRY
  // ─────────────────────────────────────────────────────────
  {
    slug: "speaker",
    title: "Speaker",
    category: "Poetry",
    level: "Foundational",
    summary: "The voice or persona uttering a poem.",
    principle: "The speaker is not automatically the poet.",
    takeaways: [
      "A poem constructs a speaking position.",
      "Speaker, poet, and narrator should not be collapsed too quickly.",
      "Tone, diction, address, and knowledge define the speaker.",
    ],
    overview:
      "The speaker is the implied voice within a poem, the one who says the words. Reading the speaker as constructed allows poems to use masks, irony, performance, and dramatic situation.",
    examples: [
      "A love poem is spoken by a persona whose confidence the poem quietly undermines.",
      "An elegy constructs a speaker who cannot decide whether to praise or accuse.",
    ],
    related: ["voice", "apostrophe", "tone"],
  },
  {
    slug: "line-break",
    title: "Line Break",
    category: "Poetry",
    level: "Foundational",
    summary: "The point where a poetic line ends.",
    principle: "A line break is a unit of meaning, timing, and pressure.",
    takeaways: [
      "It can create emphasis, hesitation, surprise, or double meaning.",
      "Lineation shapes how syntax is experienced.",
      "Bad line breaks merely chop prose into pieces.",
    ],
    overview:
      "A line break is one of poetry's basic formal decisions. It controls pause, visual shape, suspense, rhythm, and the relation between syntax and line.",
    examples: [
      "A line ends on a verb and suspends the object until the next line.",
      "A break isolates a word so the reader feels its double meaning.",
    ],
    related: ["enjambment", "caesura", "syntax"],
  },
  {
    slug: "enjambment",
    title: "Enjambment",
    category: "Poetry",
    level: "Intermediate",
    summary: "A sentence or phrase running over the end of a poetic line.",
    principle: "Enjambment makes line and syntax pull against each other.",
    takeaways: [
      "It can create speed, suspense, ambiguity, or surprise.",
      "The line ending still matters even when syntax continues.",
      "Strong enjambment rewards the moment of crossing.",
    ],
    overview:
      "Enjambment occurs when a syntactic unit continues beyond the line break. It lets poetry create a temporary meaning at line end, then alter it as the sentence continues.",
    examples: [
      "A line ending on I wanted lets desire hang before the object appears.",
      "A harmless phrase turns threatening after the next line completes it.",
    ],
    related: ["line-break", "syntax", "volta"],
  },
  {
    slug: "caesura",
    title: "Caesura",
    category: "Poetry",
    level: "Intermediate",
    summary: "A pause or break within a poetic line.",
    principle: "A pause inside the line can be as forceful as the line ending.",
    takeaways: [
      "Caesura can be marked by punctuation, rhythm, or syntax.",
      "It interrupts, balances, or turns the line's movement.",
      "Its placement affects breath and emphasis.",
    ],
    overview:
      "Caesura is an internal pause within a line of verse. It can create formal balance, emotional interruption, dramatic hesitation, or rhythmic complexity.",
    examples: [
      "A dash splits a confession before the speaker can finish it.",
      "A midline pause lets two images weigh against each other.",
    ],
    related: ["line-break", "meter", "cadence"],
  },
  {
    slug: "meter",
    title: "Meter",
    category: "Poetry",
    level: "Intermediate",
    summary: "A patterned arrangement of stressed and unstressed syllables.",
    principle: "Meter gives rhythm a system the poem can fulfil or disturb.",
    takeaways: [
      "It creates expectation through recurring stress patterns.",
      "Variation against meter can carry expressive force.",
      "Meter is heard, not merely counted.",
    ],
    overview:
      "Meter is the patterned rhythm of verse, traditionally described through feet and line lengths. Its value lies not in mechanical counting but in the tension between pattern and living speech.",
    examples: [
      "A regular line breaks pattern at the word death.",
      "A comic poem uses heavy meter to make trivial complaints grand.",
    ],
    related: ["sentence-rhythm", "cadence", "caesura"],
  },
  {
    slug: "rhyme",
    title: "Rhyme",
    category: "Poetry",
    level: "Foundational",
    summary: "Repetition of corresponding sounds, often at line endings.",
    principle: "Rhyme links words by sound before argument explains the link.",
    takeaways: [
      "It can create closure, memory, wit, song, or inevitability.",
      "Slant rhyme creates relation without full resolution.",
      "Forced rhyme exposes the poet's hand.",
    ],
    overview:
      "Rhyme is sound correspondence between words. It organises expectation, pattern, emphasis, and memory, whether in strict schemes or looser echoes.",
    examples: [
      "A perfect rhyme closes a comic couplet like a latch.",
      "A slant rhyme leaves grief slightly unresolved.",
    ],
    related: ["sound-patterning", "refrain", "stanza"],
  },
  {
    slug: "stanza",
    title: "Stanza",
    category: "Poetry",
    level: "Foundational",
    summary: "A grouped unit of lines within a poem.",
    principle: "A stanza is a room of thought, rhythm, or image.",
    takeaways: [
      "Stanzas organise progression and pause.",
      "They can function like paragraphs, scenes, turns, or refrains.",
      "Stanza shape affects reading pace and expectation.",
    ],
    overview:
      "A stanza is a formal grouping of lines. It gives poems architecture, allowing shifts in argument, image, voice, time, or emotional pressure.",
    examples: [
      "A poem's final one-line stanza isolates the admission everything avoided.",
      "Repeated quatrains create ritual expectation.",
    ],
    related: ["line-break", "volta", "refrain"],
  },
  {
    slug: "volta",
    title: "Volta",
    category: "Poetry",
    level: "Intermediate",
    summary: "A turn in argument, feeling, image, or perspective.",
    principle: "A poem often comes alive where it turns.",
    takeaways: [
      "The volta may reverse, deepen, answer, or reframe.",
      "Sonnets traditionally foreground the volta, but any poem can turn.",
      "A turn should alter the reader's relation to what came before.",
    ],
    overview:
      "Volta is the poetic turn: a shift in thought, address, tone, image, or argument. It is one of the clearest ways a poem creates movement.",
    examples: [
      "A praise poem turns into accusation.",
      "A landscape description turns into self-recognition.",
    ],
    related: ["reversal", "stanza", "line-break"],
  },
  {
    slug: "refrain",
    title: "Refrain",
    category: "Poetry",
    level: "Foundational",
    summary: "A repeated line, phrase, or sound pattern in a poem or song.",
    principle: "Return changes meaning by changing context.",
    takeaways: [
      "A refrain gathers force through recurrence.",
      "It can provide structure, memory, lament, or ritual.",
      "Unchanged words can mean differently each time they return.",
    ],
    overview:
      "A refrain is repeated language or sound that recurs across a poem. Its craft power lies in how repetition accumulates difference.",
    examples: [
      "A repeated line of mourning becomes accusation by the final stanza.",
      "A comic refrain turns darker as the situation worsens.",
    ],
    related: ["motif", "repetition", "rhyme"],
  },
  {
    slug: "sound-patterning",
    title: "Sound Patterning",
    category: "Poetry",
    level: "Intermediate",
    summary: "The organised use of sound effects such as alliteration, assonance, and consonance.",
    principle: "Sound carries meaning before paraphrase catches up.",
    takeaways: [
      "Sound can bind images, intensify mood, or create friction.",
      "Patterns should serve the poem's pressure, not merely ornament it.",
      "Subtle sound design often works below conscious notice.",
    ],
    overview:
      "Sound patterning is the deliberate arrangement of repeated or contrasting sounds. It includes rhyme, alliteration, assonance, consonance, euphony, cacophony, and rhythmic echo.",
    examples: [
      "Soft sibilants make a scene feel hushed and secretive.",
      "Hard consonants make a comic insult snap.",
    ],
    related: ["rhyme", "euphony", "cacophony"],
  },

  // ─────────────────────────────────────────────────────────
  // DRAMA
  // ─────────────────────────────────────────────────────────
  {
    slug: "soliloquy",
    title: "Soliloquy",
    category: "Drama",
    level: "Intermediate",
    summary: "A speech in which a character speaks their thought aloud, often alone.",
    principle: "A soliloquy makes interior conflict public without making it ordinary conversation.",
    takeaways: [
      "It reveals mind under theatrical conditions.",
      "It can persuade, confess, rationalise, or fracture.",
      "A strong soliloquy changes the audience's relation to action.",
    ],
    overview:
      "Soliloquy is a dramatic convention in which a character speaks inward thought aloud for the audience. It turns private deliberation into staged action.",
    examples: [
      "A prince argues with himself before choosing delay.",
      "A villain explains the logic they would hide from every other character.",
    ],
    related: ["monologue", "interior-monologue", "aside"],
  },
  {
    slug: "aside",
    title: "Aside",
    category: "Drama",
    level: "Foundational",
    summary: "A brief speech to the audience unheard by other characters.",
    principle: "An aside creates selective knowledge in the theatre.",
    takeaways: [
      "It can generate comedy, complicity, irony, or suspense.",
      "It momentarily changes the audience's knowledge state.",
      "It depends on theatrical convention rather than realism.",
    ],
    overview:
      "An aside is a short address that other characters onstage do not hear. It lets drama create a private channel between character and audience.",
    examples: [
      "A servant mocks the master while standing beside him.",
      "A conspirator reveals the false meaning of a polite speech.",
    ],
    related: ["dramatic-irony", "soliloquy", "reader-contract"],
  },
  {
    slug: "monologue",
    title: "Monologue",
    category: "Drama",
    level: "Foundational",
    summary: "An extended speech by one character.",
    principle: "A monologue is action when speech changes pressure.",
    takeaways: [
      "It may persuade, confess, accuse, narrate, seduce, or delay.",
      "Length alone does not make it dramatic.",
      "The listener's presence or absence changes its function.",
    ],
    overview:
      "A monologue is an extended speech by a single character. In drama and prose, it works when the speech itself is an event with stakes.",
    examples: [
      "A witness's testimony becomes a self-indictment.",
      "A parent tells a family history to prevent a child leaving.",
    ],
    related: ["dialogue", "soliloquy", "voice"],
  },
  {
    slug: "chorus",
    title: "Chorus",
    category: "Drama",
    level: "Intermediate",
    summary: "A collective voice that comments, witnesses, or frames action.",
    principle: "The chorus turns individual action into public meaning.",
    takeaways: [
      "It may represent community, memory, ritual, conscience, or audience.",
      "It can interpret events without controlling them.",
      "Modern works often adapt choral function outside formal chorus.",
    ],
    overview:
      "The chorus is a dramatic device inherited from ancient theatre: a group or collective voice that responds to action, frames meaning, and mediates between stage and audience.",
    examples: [
      "A town's women narrate what the hero refuses to see.",
      "A repeated group voice turns private grief into civic indictment.",
    ],
    related: ["frame-narrative", "voice", "tragedy"],
  },
  {
    slug: "stage-business",
    title: "Stage Business",
    category: "Drama",
    level: "Foundational",
    summary: "Physical activity onstage that supports character, rhythm, and meaning.",
    principle: "Bodies think onstage.",
    takeaways: [
      "Stage business prevents speech from floating free of action.",
      "It can reveal subtext, status, and tension.",
      "Random activity distracts from dramatic pressure.",
    ],
    overview:
      "Stage business is the meaningful physical action actors perform around or within dialogue: pouring tea, folding clothes, crossing a room, failing to sit. It gives drama embodied texture.",
    examples: [
      "A character polishes a glass through an entire accusation.",
      "Two people negotiate a breakup while setting a table.",
    ],
    related: ["dialogue", "subtext", "confused-blocking"],
  },
  {
    slug: "dramatic-action",
    title: "Dramatic Action",
    category: "Drama",
    level: "Intermediate",
    summary: "What a character is trying to do in a scene.",
    principle: "Drama lives in pursued action, not spoken topic.",
    takeaways: [
      "A character may flatter in order to threaten.",
      "The action can differ from the literal words.",
      "Clear dramatic action gives actors and readers a pressure line.",
    ],
    overview:
      "Dramatic action names the active verb beneath a scene: to confess, to corner, to seduce, to evade, to punish, to recruit. It turns dialogue into conflict.",
    examples: [
      "A polite invitation is really an attempt to exile someone.",
      "A joke is used to test whether betrayal has been discovered.",
    ],
    related: ["dialogue", "subtext", "conflict"],
  },
  {
    slug: "beat",
    title: "Beat",
    category: "Drama",
    level: "Intermediate",
    summary: "A small unit of changed action, tactic, or emotional pressure.",
    principle: "A beat turns when the tactic changes.",
    takeaways: [
      "Beats help track scene movement below plot level.",
      "A beat can shift on a silence, gesture, or line.",
      "Unchanging beats make scenes feel static.",
    ],
    overview:
      "A beat is a practical unit of dramatic movement. It marks the moment when a character's tactic, knowledge, status, or emotional pressure changes inside a scene.",
    examples: [
      "A plea becomes a threat after the door is locked.",
      "A joke fails, and the scene turns from charm to desperation.",
    ],
    related: ["scene-vs-summary", "dramatic-action", "pacing"],
  },

  // ─────────────────────────────────────────────────────────
  // EXPANDED PROSE & STYLE
  // ─────────────────────────────────────────────────────────
  {
    slug: "syntax",
    title: "Syntax",
    category: "Prose & Style",
    level: "Foundational",
    summary: "The arrangement of words, phrases, and clauses.",
    principle: "Syntax controls how thought moves.",
    takeaways: [
      "Sentence structure shapes pace, emphasis, hierarchy, and voice.",
      "Syntax can clarify, delay, fracture, or overwhelm.",
      "Repeated syntactic habits become style.",
    ],
    overview:
      "Syntax is the structural ordering of language. In prose, it determines how information arrives, how pressure accumulates, and what kind of mind the sentence seems to enact.",
    examples: [
      "A sentence withholds its main verb until the final word.",
      "Fragments make panic feel immediate rather than described.",
    ],
    related: ["sentence-rhythm", "voice", "diction"],
  },
  {
    slug: "paragraphing",
    title: "Paragraphing",
    category: "Prose & Style",
    level: "Foundational",
    summary: "The organisation of prose into visual and rhetorical units.",
    principle: "A paragraph is a unit of attention.",
    takeaways: [
      "Paragraph breaks control pacing, emphasis, and readability.",
      "Long paragraphs can immerse or exhaust.",
      "Short paragraphs can accelerate or overdramatize.",
    ],
    overview:
      "Paragraphing shapes how readers receive prose. It organises thought, time, image, dialogue, and emphasis into units that guide breath and attention.",
    examples: [
      "A one-sentence paragraph isolates the moment a character understands.",
      "A long paragraph traps the reader inside an anxious mind.",
    ],
    related: ["prose-movement", "pacing", "compression"],
  },
  {
    slug: "repetition",
    title: "Repetition",
    category: "Prose & Style",
    level: "Foundational",
    summary: "The return of words, structures, images, or sounds.",
    principle: "Repetition creates pattern; variation creates meaning.",
    takeaways: [
      "It can build rhythm, obsession, motif, or argument.",
      "Exact repetition and transformed repetition do different work.",
      "Accidental repetition feels slack; designed repetition gathers force.",
    ],
    overview:
      "Repetition is one of literature's basic ordering devices. It makes language memorable, creates expectation, and lets change become visible against return.",
    examples: [
      "A phrase of comfort returns later as accusation.",
      "A paragraph repeats the same syntactic opening until the final sentence breaks it.",
    ],
    related: ["motif", "anaphora", "refrain"],
  },
  {
    slug: "punctuation",
    title: "Punctuation",
    category: "Prose & Style",
    level: "Foundational",
    summary: "Marks that govern rhythm, relation, pause, and clarity.",
    principle: "Punctuation is scored breath and logic.",
    takeaways: [
      "It controls speed, interruption, hierarchy, and ambiguity.",
      "Style emerges in punctuation choices as much as vocabulary.",
      "Overpunctuation can overexplain rhythm.",
    ],
    overview:
      "Punctuation is not merely correctness; it is a system for pacing thought and managing syntactic relation. It tells the reader how to move through language.",
    examples: [
      "A dash interrupts a confession before grammar can finish it.",
      "Commas slow a sentence until hesitation becomes audible.",
    ],
    related: ["syntax", "sentence-rhythm", "cadence"],
  },
  {
    slug: "euphony",
    title: "Euphony",
    category: "Prose & Style",
    level: "Intermediate",
    summary: "Pleasant, smooth, or harmonious sound in language.",
    principle: "Beauty of sound can become part of meaning.",
    takeaways: [
      "Euphony often uses liquid consonants, open vowels, and flowing rhythm.",
      "It can soothe, seduce, elegize, or idealize.",
      "Too much sweetness can falsify harsh material.",
    ],
    overview:
      "Euphony is the pleasing quality of sound in language. It matters in prose as well as poetry because sonic texture shapes emotional reception.",
    examples: [
      "A lullaby-like sentence softens a scene of farewell.",
      "Liquid sounds make a river description feel continuous.",
    ],
    related: ["sound-patterning", "cadence", "tone"],
  },
  {
    slug: "cacophony",
    title: "Cacophony",
    category: "Prose & Style",
    level: "Intermediate",
    summary: "Harsh, jarring, or discordant sound in language.",
    principle: "Ugly sound can tell the truth of ugly pressure.",
    takeaways: [
      "Cacophony often uses hard stops, clusters, and broken rhythm.",
      "It can create violence, comedy, disgust, or anxiety.",
      "It should be controlled enough to read as designed.",
    ],
    overview:
      "Cacophony is the rough or abrasive sound quality of language. It lets style embody conflict rather than merely describe it.",
    examples: [
      "Clipped consonants make an argument feel brittle.",
      "A battlefield sentence uses harsh clusters to resist lyric beauty.",
    ],
    related: ["sound-patterning", "tone", "diction"],
  },
  {
    slug: "cadence",
    title: "Cadence",
    category: "Prose & Style",
    level: "Intermediate",
    summary: "The rise, fall, and felt movement of phrasing.",
    principle: "Cadence is how prose carries the reader's ear.",
    takeaways: [
      "It is larger than meter and subtler than sentence length.",
      "Cadence can create authority, intimacy, comedy, or grief.",
      "A weak cadence often makes good content feel inert.",
    ],
    overview:
      "Cadence is the musical movement of language through stress, pause, syntax, and phrasing. It is one of the main ways prose develops a recognisable surface.",
    examples: [
      "A sentence falls slowly into a final monosyllable.",
      "A comic narrator uses elaborate cadence to deliver a petty complaint.",
    ],
    related: ["sentence-rhythm", "voice", "punctuation"],
  },

  // ─────────────────────────────────────────────────────────
  // EXPANDED READER PSYCHOLOGY
  // ─────────────────────────────────────────────────────────
  {
    slug: "closure",
    title: "Closure",
    category: "Reader Psychology",
    level: "Foundational",
    summary: "The felt sense that a narrative pressure has been sufficiently settled.",
    principle: "Closure satisfies the question the story trained the reader to hold.",
    takeaways: [
      "Closure can be emotional, causal, thematic, or formal.",
      "It does not require total explanation.",
      "False closure settles the wrong question.",
    ],
    overview:
      "Closure is the reader's sense that a pattern has completed enough to release attention. It may arrive through answer, image, rhythm, decision, or accepted uncertainty.",
    examples: [
      "A mystery names the killer but leaves grief unresolved by design.",
      "A final image closes the emotional arc without summarising it.",
    ],
    related: ["denouement", "reader-contract", "ambiguity"],
  },
  {
    slug: "deferral",
    title: "Deferral",
    category: "Reader Psychology",
    level: "Intermediate",
    summary: "The postponement of answer, fulfilment, or release.",
    principle: "Delay creates desire when the reader trusts the delay has purpose.",
    takeaways: [
      "Deferral fuels suspense, mystery, longing, and interpretation.",
      "It must refresh attention rather than merely withhold.",
      "Over-deferral turns curiosity into fatigue.",
    ],
    overview:
      "Deferral is the controlled delay of information, resolution, contact, or payoff. It keeps a reader oriented toward what has not yet arrived.",
    examples: [
      "A letter is mentioned repeatedly before its contents are revealed.",
      "A reunion is delayed until both characters have changed enough to make it matter.",
    ],
    related: ["suspense", "mystery-and-curiosity", "reader-memory-decay"],
  },
  {
    slug: "estrangement",
    title: "Estrangement",
    category: "Reader Psychology",
    level: "Advanced",
    summary: "The effect of making familiar experience seem strange or newly visible.",
    principle: "Estrangement renews perception by interrupting habit.",
    takeaways: [
      "It is the reader-facing effect of defamiliarization.",
      "It can be political, aesthetic, comic, or uncanny.",
      "Too much estrangement without anchor becomes opacity.",
    ],
    overview:
      "Estrangement describes the altered perception produced when ordinary things are presented as unfamiliar. It slows automatic recognition so the reader can see again.",
    examples: [
      "A workplace is described as a ritual system by someone who has never seen one.",
      "A common social custom appears grotesque when narrated from outside its assumptions.",
    ],
    related: ["defamiliarization", "gothic", "cognitive-load"],
  },
  {
    slug: "catharsis",
    title: "Catharsis",
    category: "Reader Psychology",
    level: "Advanced",
    summary: "Emotional release or clarification produced by dramatic resolution.",
    principle: "Catharsis releases pressure by giving feeling form.",
    takeaways: [
      "It is associated with tragedy but not limited to it.",
      "Release depends on prior accumulation.",
      "Cheap catharsis asks for feeling the story has not earned.",
    ],
    overview:
      "Catharsis names the purgation, clarification, or release of emotion produced by art, especially through pity, fear, recognition, and consequence. It is an effect of structure on feeling.",
    examples: [
      "A tragic recognition lets grief and understanding arrive together.",
      "A final act of mercy releases tension the plot has held for the whole book.",
    ],
    related: ["tragedy", "climax", "closure"],
  },
  {
    slug: "cognitive-load",
    title: "Cognitive Load",
    category: "Reader Psychology",
    level: "Intermediate",
    summary: "The amount of mental work a reader must do to track the text.",
    principle: "Complexity is welcome when the work pays for the effort.",
    takeaways: [
      "Load can come from names, timelines, syntax, world rules, or withheld context.",
      "High load is not inherently bad; unmanaged load is.",
      "Readers need anchors when complexity rises.",
    ],
    overview:
      "Cognitive load is the burden placed on the reader's working attention. It matters because confusion, memory decay, and fatigue can block otherwise strong material.",
    examples: [
      "A fantasy opening introduces six invented terms before any desire is clear.",
      "A complex timeline remains readable because each shift has a strong date and voice anchor.",
    ],
    failureModes: ["info-dump", "over-exposition"],
    related: ["reader-memory-decay", "exposition", "pov-discipline"],
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
  {
    slug: "melodrama",
    title: "Melodrama",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "Emotion, conflict, or moral contrast exaggerated beyond what the story has earned.",
    principle: "Intensity without proportion becomes inflation.",
    takeaways: [
      "Melodrama often substitutes volume for pressure.",
      "It can be a legitimate mode when the work frames it deliberately.",
      "Unintended melodrama makes characters feel less real at the moment they should matter most.",
    ],
    overview:
      "Melodrama becomes a failure mode when heightened feeling, villainy, coincidence, or suffering exceeds the story's established scale. The result is not strong emotion but unearned emotional instruction.",
    examples: [
      "A minor disagreement is scored as if it were a death scene.",
      "An antagonist becomes purely evil because the plot needs easier outrage.",
    ],
    related: ["tone", "stakes", "tragedy"],
  },
  {
    slug: "bathos",
    title: "Bathos",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "An unintended drop from seriousness or grandeur into triviality.",
    principle: "A fall in tone is comic only when the work controls the fall.",
    takeaways: [
      "Bathos can puncture emotion before it lands.",
      "It often comes from misjudged diction, timing, or image.",
      "Deliberate bathos can be satire or comedy; accidental bathos is collapse.",
    ],
    overview:
      "Bathos is the sudden descent from the elevated to the trivial. As a failure mode, it occurs when a moment meant to be moving or grave becomes unintentionally comic or deflated.",
    examples: [
      "A deathbed confession is followed by a clumsy joke the scene does not absorb.",
      "A grand metaphor ends on an oddly petty object.",
    ],
    related: ["tone", "comedy", "diction"],
  },
  {
    slug: "tonal-incoherence",
    title: "Tonal Incoherence",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "Tone shifts in ways the story has not prepared or integrated.",
    principle: "Tonal range needs tonal logic.",
    takeaways: [
      "A tonal shift is not a problem when the work earns the turn.",
      "Incoherence makes readers unsure how to value events.",
      "Genre contracts make tonal promises early.",
    ],
    overview:
      "Tonal incoherence occurs when the prose or structure asks the reader to feel incompatible things without giving a frame for the change. It can make comedy cruel, tragedy silly, or sincerity manipulative.",
    examples: [
      "A farcical chapter follows a massacre with no acknowledgement of changed stakes.",
      "A narrator mocks a trauma the rest of the book treats as sacred.",
    ],
    related: ["tone", "reader-contract", "bathos"],
  },
  {
    slug: "contrivance",
    title: "Contrivance",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "A plot movement that exposes author convenience instead of story logic.",
    principle: "The reader should feel design, not manipulation.",
    takeaways: [
      "Contrivance often appears as convenient timing, behaviour, or coincidence.",
      "It weakens causality by making the author's need visible.",
      "Setup can turn apparent contrivance into inevitability.",
    ],
    overview:
      "Contrivance is the sense that events happen because the writer needs them to, not because character, world, pressure, or prior setup produce them. It damages trust in the story's causal contract.",
    examples: [
      "A character forgets an obvious skill only so the danger can continue.",
      "Two necessary strangers meet in a vast city with no causal bridge.",
    ],
    related: ["causality", "coincidence", "deus-ex-machina"],
  },
  {
    slug: "false-mystery",
    title: "False Mystery",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "A question created by withholding what the viewpoint or scene should naturally reveal.",
    principle: "Mystery should come from the story, not from artificial concealment.",
    takeaways: [
      "It often violates POV, knowledge state, or natural scene logic.",
      "Readers resent being kept ignorant by authorial hand-covering.",
      "Legitimate mystery respects what the viewpoint can know and say.",
    ],
    overview:
      "False mystery occurs when suspense or curiosity is manufactured by hiding information that the narration has no good reason to hide. The result feels less like intrigue than evasion.",
    examples: [
      "A first-person narrator repeatedly refers to what happened without naming what they plainly know.",
      "A scene cuts away exactly when a visible fact would answer the central question.",
    ],
    related: ["mystery-and-curiosity", "pov-discipline", "unreliable-narrator"],
  },
  {
    slug: "unearned-twist",
    title: "Unearned Twist",
    category: "Failure Modes",
    level: "Intermediate",
    summary: "A surprise turn that lacks preparation, consequence, or retrospective logic.",
    principle: "A twist should make the prior story more coherent.",
    takeaways: [
      "Shock is not the same as payoff.",
      "A twist needs fair planting even if the reader misses it.",
      "The aftermath must matter as much as the reveal.",
    ],
    overview:
      "An unearned twist reverses understanding without giving the reader enough prior material to accept the new pattern. It surprises at the cost of trust.",
    examples: [
      "The villain is revealed as a character with no prior meaningful presence.",
      "A dream explanation erases the consequences the story trained the reader to care about.",
    ],
    related: ["twist", "setup-and-payoff", "weak-payoff"],
  },
  {
    slug: "flat-character",
    title: "Flat Character",
    category: "Failure Modes",
    level: "Foundational",
    summary: "A character lacks the dimensionality their role requires.",
    principle: "A character is flat when the story asks for depth it has not built.",
    takeaways: [
      "Not every minor character needs roundness.",
      "Major roles need contradiction, pressure, desire, or specificity.",
      "Flatness often appears as trait without behaviour.",
    ],
    overview:
      "Flat character becomes a failure when a figure central to conflict, theme, or emotional investment remains a single function, attitude, or label. The issue is mismatch between role and depth.",
    examples: [
      "A love interest exists only to admire the protagonist.",
      "A villain has cruelty but no motive, method, limit, or self-understanding.",
    ],
    related: ["round-vs-flat-character", "characterization", "motivation"],
  },
  {
    slug: "white-room-syndrome",
    title: "White-Room Syndrome",
    category: "Failure Modes",
    level: "Foundational",
    summary: "A scene lacks enough setting, sensory detail, or physical context to feel embodied.",
    principle: "Dialogue and thought need a world to push against.",
    takeaways: [
      "It often appears in scenes of conversation or introspection.",
      "Specific physical anchors restore orientation.",
      "The cure is meaningful environment, not decorative inventory.",
    ],
    overview:
      "White-room syndrome occurs when characters seem to speak or think in an empty, featureless space. The scene loses embodiment because place, objects, weather, gesture, and sensory pressure are absent.",
    examples: [
      "Two characters argue for pages with no room, body, or object in view.",
      "A tense decision occurs without any sense of where the character is standing.",
    ],
    related: ["sensory-specificity", "talking-heads", "setting-as-character"],
  },
  {
    slug: "accidental-theme",
    title: "Accidental Theme",
    category: "Failure Modes",
    level: "Advanced",
    summary: "A work implies a thematic argument it does not seem to recognise.",
    principle: "Patterns argue, even when the author does not mean them to.",
    takeaways: [
      "Repeated outcomes can create unintended moral logic.",
      "The ending often determines which pattern feels endorsed.",
      "Accidental theme is usually a revision problem, not a sentence problem.",
    ],
    overview:
      "Accidental theme happens when recurring choices, consequences, exclusions, or rewards imply a value system the work has not consciously shaped. Readers may trust the pattern more than the stated message.",
    examples: [
      "A story praises community but rewards only solitary self-protection.",
      "A novel condemns cruelty while giving cruel characters all the narrative glamour.",
    ],
    related: ["theme", "countertheme", "moral-premise"],
  },
];
