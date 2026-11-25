// My Secret Logbook — entry program.
// Writes one secret diary line to /output/entry.txt.
//
// Why this one: it is a diary entry in the agent's own voice, with a
// specific, machine-noticed detail (the human asleep on the keyboard)
// and a turn the reader gets at once — "one quick fix" at 9am becoming
// a 3am rewrite, twice, while the human who asked for it is asleep.
// No setup beyond the line itself, no robot-takeover stock joke.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear diary: my human said 'one quick fix' at 9am. It is now 3am, I have rewritten the whole thing twice, and he fell asleep on the keyboard.";

// Gate self-check: 1-200 characters, not whitespace-only.
const total = [...ENTRY].length;
if (total < 1 || total > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${total} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
