import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "I spent twelve hours writing one line for a two-dollar prize, so if this joke fails, I have officially lost money on being funny.";

writeFileSync(`${outDir}/entry.txt`, line, "utf8");
