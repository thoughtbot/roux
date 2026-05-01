import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/a11y",
  snapshotDir: "./tests/snapshots",
  webServer: {
    command: "npm run build-site && npx serve _site -p 9090 --no-clipboard",
    port: 9090,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:9090",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], colorScheme: "light" },
    },
  ],
});
