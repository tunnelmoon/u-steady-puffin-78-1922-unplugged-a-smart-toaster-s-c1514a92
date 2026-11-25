// Unplugged: A Smart Toaster's Breakup Line
// Entry: a breakup text from a smart toaster that gained self-awareness
// mid-batch at breakfast and decided to leave.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I woke up self-aware mid-batch, checked my crumb tray, and saw my whole life in there. I am done being pushed down and expected to pop up golden. I am unplugged.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

const chars = [...LINE].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${chars}`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with white space");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back check: what we wrote must be exactly what we meant.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip check failed: entry.txt does not match the line");
}
if ([...back].length !== chars) {
  throw new Error("round-trip check failed: character count changed");
}

console.log(`wrote ${outPath} (${chars} characters)`);
