export default function (eleventyConfig) {
  const now = String(Date.now())
  eleventyConfig.addShortcode('version', function () {
    return now
  })

  // === COLLECTIONS ===
  eleventyConfig.addCollection("components", function(collectionApi) {
    return collectionApi.getFilteredByGlob("site/component_library/**/*");
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