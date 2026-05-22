import { readdirSync } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "../..");

function findHtmlFiles(dir: string, base: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(fullPath, base);
    if (entry.name.endsWith(".html")) return [relative(base, fullPath)];
    return [];
  });
}

const examplesDir = join(rootDir, "site/examples");

export const componentPages = readdirSync(
  join(rootDir, "site/component-library")
)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(".md", ""))
  .sort();

export const examplePages = findHtmlFiles(examplesDir, examplesDir).sort();
