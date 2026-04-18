import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
const eleventyPrism = syntaxHighlight.pairedShortcode;

export default function previewMarkdownDirective(md) {
  // Register block directive handler for ::preview
  md.blockDirectives["preview"] = (params) => {
    const { state, attrs, directiveStartLine, directiveEndLine } = params;

    if (!attrs?.file) {
      const token = state.push("html_block", "", 0);
      token.map = [directiveStartLine, directiveEndLine];
      token.content = `<p class="error">Preview directive requires a "file" attribute.</p>\n`;
      return;
    }

    const { file, title, id, tall } = attrs;

    let htmlContent;
    try {
      // Read the HTML file from the examples directory
      const __dirname = dirname(fileURLToPath(import.meta.url));
      const examplePath = join(
        __dirname,
        "../site/_includes/partials/examples",
        file,
      );
      htmlContent = readFileSync(examplePath, "utf-8").trim();
    } catch (error) {
      console.error(
        `Error reading preview file: ${file} at ${examplePath}`,
        error,
      );
      const token = state.push("html_block", "", 0);
      token.map = [directiveStartLine, directiveEndLine];
      token.content = `<p class="error">Could not load preview: ${file}</p>\n`;
    }

    try {
      const previewTitle = escape(title || "Preview");
      const previewId = id || `preview_${directiveStartLine}`;
      const pathPrefix = process.env.SITE_ENV === "production" ? "/roux" : "";
      const isTall = tall === "true";

      // create a markdown HTML block
      const token = state.push("html_block", "", 0);
      token.map = [directiveStartLine, directiveEndLine];
      token.content = generatePreviewHtml(
        previewId,
        previewTitle,
        htmlContent,
        pathPrefix,
        isTall,
      );
    } catch (error) {
      console.error("Error rendering preview", error);
      const token = state.push("html_block", "", 0);
      token.map = [directiveStartLine, directiveEndLine];
      token.content = `<p class="error">Could not render preview: ${file}</p>\n`;
    }
  };
}

function generatePreviewIframeContent(title, htmlContent, pathPrefix) {
  return `
   <!DOCTYPE html>
          <html lang="en">
            <head>
              <title>${title}</title>
              <meta charset="UTF-8" />
            </head>
            <body>
              <main aria-label="Component Example">
                      <div class="component-preview-contents">
                        <link rel="stylesheet" href="${pathPrefix}/src/css/app.css"/>
                        <link rel="stylesheet" href="${pathPrefix}/assets/css/component-preview.css"/>
                        ${htmlContent}
                      </div>
              </main>
            </body>
          </html>
`;
}

function generatePreviewHtml(id, title, htmlContent, pathPrefix, isTall) {
  return `
 <div class="component-example${isTall ? " component-example--tall" : ""}">
    <div role="tablist" aria-labelledby="${id}" class="automatic">
      <button
        id="tab-preview-${id}"
        type="button"
        role="tab"
        aria-selected="true"
        aria-controls="tabpanel-preview-${id}"
      >
        <span class="focus">Preview</span>
      </button>
      <button
        id="tab-code-${id}"
        type="button"
        role="tab"
        aria-selected="false"
        aria-controls="tabpanel-code-${id}"
        tabindex="-1"
      >
        <span class="focus">Code</span>
      </button>
    </div>
    <div
      id="tabpanel-preview-${id}"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-preview-${id}"
    >
      <iframe
        class="component-example__preview-frame"
        title="${title}"
        srcdoc="${escape(generatePreviewIframeContent(title, htmlContent, pathPrefix))}"
      ></iframe>
    </div>
    <div
      id="tabpanel-code-${id}"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-code-${id}"
      class="is-hidden"
    >
      <div class="component-example__code">
        ${eleventyPrism(htmlContent, "html")}
      </div>
    </div>
  </div>
`;
}

// Escape the HTML content for use in attributes
function escape(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
