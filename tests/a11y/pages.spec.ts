import { readdirSync } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "../..");

const componentPages = readdirSync(join(rootDir, "site/component-library"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(".md", ""))
  .sort();

function findHtmlFiles(dir: string, base: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(fullPath, base);
    if (entry.name.endsWith(".html")) return [relative(base, fullPath)];
    return [];
  });
}

const examplesDir = join(rootDir, "site/examples");
const examplePages = findHtmlFiles(examplesDir, examplesDir).sort();

test("homepage a11y", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

for (const component of componentPages) {
  test(`${component} - component docs a11y`, async ({ page }) => {
    const response = await page.goto(`/component-library/${component}.html`);
    expect(response?.status()).toBe(200);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toHaveLength(0);
  });
}

for (const example of examplePages) {
  const name = example.replace("/", "-").replace(".html", "");
  test(`${name} - component example a11y`, async ({ page }) => {
    const response = await page.goto(`/examples/${example}`);
    expect(response?.status()).toBe(200);
    const results = await new AxeBuilder({ page })
      // example iframes do not have a heading structure
      .disableRules(["page-has-heading-one"])
      .analyze();
    expect(results.violations).toHaveLength(0);
  });

  test(`${name} - component example snapshot`, async ({ page }) => {
    const response = await page.goto(`/examples/${example}`);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}
