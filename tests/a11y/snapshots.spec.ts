import { test, expect } from "@playwright/test";
import { examplePages } from "./pages.js";

for (const example of examplePages) {
  const name = example.replace("/", "-").replace(".html", "");

  test(`${name} - screenshot`, async ({ page }) => {
    const response = await page.goto(`/examples/${example}`);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });

  test(`${name} - aria snapshot`, async ({ page }) => {
    const response = await page.goto(`/examples/${example}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toMatchAriaSnapshot({
      name: `${name}.aria.yml`,
    });
  });
}

test.describe.skip("dark mode snapshots", () => {
  test.use({ colorScheme: "dark" });

  for (const example of examplePages) {
    const name = example.replace("/", "-").replace(".html", "");
    test(`${name} - screenshot`, async ({ page }) => {
      const response = await page.goto(`/examples/${example}`);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveScreenshot(`dark-${name}.png`, {
        fullPage: true,
      });
    });
  }
});
