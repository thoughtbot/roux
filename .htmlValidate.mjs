import { defineConfig } from "html-validate";

export default defineConfig({
  extends: ["html-validate:recommended"],
  rules: {
    // PrismJS for some reason doesn't encode ">" (although it does encode "<")
    "no-raw-characters": "off",
    // Prettier currently uses self-closing tags (<img />) instead of void elements (<img>)
    "void-style": "off",
    // html-validate package doesn't know that search has a landmark role where aria-label is ok
    "aria-label-misuse": ["error", { elements: { exclude: ["search"] } }],
    "no-inline-style": "warn",
  },
});
