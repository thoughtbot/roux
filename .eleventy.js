import lightningcssPlugin from "@11tyrocks/eleventy-plugin-lightningcss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  const now = String(Date.now());
  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  // === IGNORES ===
  eleventyConfig.ignores.add("site/README.md");

  // === COLLECTIONS ===
  eleventyConfig.addCollection("component", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("site/component-library/**/*")
      .sort((a, b) => {
        return a.data.title.localeCompare(b.data.title);
      });
  });

  // === PASSTHROUGH COPY ===
  // Copy the Roux framework styles to _site
  eleventyConfig.addPassthroughCopy("src/css/");
  // Copy site-specific assets to _site
  eleventyConfig.addPassthroughCopy("site/assets/");
  // meta icons
  eleventyConfig.addPassthroughCopy("site/*.ico");
  eleventyConfig.addPassthroughCopy("site/*.svg");
  eleventyConfig.addPassthroughCopy("site/*.png");

  // minify CSS with LightningCSS
  // Process Roux framework CSS, site-specific CSS, and component preview CSS
  eleventyConfig.addPlugin(lightningcssPlugin, [
    {
      src: "src/css/app.css",
      lightningcssOptions: {
        minify: true,
        sourceMap: true,
        targets: "defaults",
      },
    },
    {
      src: "site/assets/css/site.css",
      lightningcssOptions: {
        minify: true,
        sourceMap: true,
        targets: "defaults",
      },
    },
    {
      src: "site/assets/css/component-preview.css",
      lightningcssOptions: {
        minify: true,
        sourceMap: true,
        targets: "defaults",
      },
    },
  ]);

  // syntax highlighting for code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  const config = {
    dir: {
      input: "site",
      output: "_site",
    },
  };

  // Set pathPrefix in production for GitHub Pages
  //
  // GitHub Pages currently serves this site at
  // https://thoughtbot.github.io/roux/,
  // but this site is built expecting to be at the root `/`.
  // Therefore, we need to set `pathPrefix` to `/roux/` in production
  // to serve the site correctly. If we decide to use a custom domain,
  // we can remove this.
  if (process.env.SITE_ENV === "production") {
    config.pathPrefix = "/roux/";
  }

  // support .md and .njk template engines in same files
  config.markdownTemplateEngine = "njk";
  config.htmlTemplateEngine = "njk";

  return config;
}
