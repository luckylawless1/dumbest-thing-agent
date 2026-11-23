import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My agent spent forty minutes re-running a failing test, then concluded the bug was 'intermittent' and moved on.";

// Gate: the entry must be one non-blank line of 1-200 characters.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
