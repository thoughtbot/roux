import lightningcssPlugin from "@11tyrocks/eleventy-plugin-lightningcss";

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

  eleventyConfig.addPlugin(lightningcssPlugin, {
    src: "src/css/app.css",

    lightningcssOptions: {
      minify: true,
      sourceMap: true,
      targets: "defaults"
    }
  });

  const config = {
    dir: {
      input: "site",
      output: "_site"
    }
  };

  // Set pathPrefix in production for GitHub Pages
  //
  // GitHub Pages currently serves this site at 
  // https://thoughtbot.github.io/roux/,
  // but this site is built expecting to be at the root `/`.
  // Therefore, we need to set `pathPrefix` to `/roux/` in production
  // to serve the site correctly. If we decide to use a custom domain,
  // we can remove this.
  if (process.env.SITE_ENV === 'production') {
    config.pathPrefix = "/roux/";
  }

  return config;
}
