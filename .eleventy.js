export default function (eleventyConfig) {
  const now = String(Date.now())
  eleventyConfig.addShortcode('version', function () {
    return now
  })

  // === COLLECTIONS ===
  eleventyConfig.addCollection("component", function(collectionApi) {
    return collectionApi.getFilteredByGlob("site/component-library/**/*");
  });

  // === PASSTHROUGH COPY ===
    // Copy the entire styles directory to _site
  eleventyConfig.addPassthroughCopy("src/css/");

  // === WATCH TARGETS ===
  // Watch CSS files for changes during development
  eleventyConfig.addWatchTarget("src/css/**/*.css");

  return {
    dir: {
      input: "site",
      output: "_site"
    }
  }
}