import { defineConfig } from "html-validate";

export default defineConfig({
  extends: ["html-validate:recommended"],
  rules: {
    // PrismJS for some reason doesn't encode ">" (although it does encode "<")
    "no-raw-characters": "off",
    // Prettier currently uses self-closing tags (<img />) instead of void elements (<img>)
    "void-style": "off",
  },
});
