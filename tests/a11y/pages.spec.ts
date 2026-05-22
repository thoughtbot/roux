import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { componentPages, examplePages } from "./pages.js";

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
}
