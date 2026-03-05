import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildPage } from "./page";

const distDir = join(import.meta.dir, "../dist");
mkdirSync(distDir, { recursive: true });
writeFileSync(join(distDir, "index.html"), buildPage());

console.log("Built → dist/index.html");
