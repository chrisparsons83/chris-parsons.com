const { DateTime } = require("luxon");

module.exports = (config) => {
  // Passthrough all of the favicons.
  config.addPassthroughCopy("./src/favicon.ico");
  config.addPassthroughCopy("./src/apple-touch-icon.png");
  config.addPassthroughCopy("./src/icon-192.png");
  config.addPassthroughCopy("./src/icon-512.png");
  config.addPassthroughCopy("./src/icon.svg");
  config.addPassthroughCopy("./src/manifest.webmanifest");

  // Set up excerpts
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  // Add filters
  config.addFilter("postDate", (dateObject) => {
    return DateTime.fromJSDate(dateObject).toLocaleString(DateTime.DATE_FULL);
  });

  // Add shortcode
  config.addShortcode("goatCounter", () => {
    return process.env.NODE_ENV === "production"
      ? '<script data-goatcounter="https://chris-parsons.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'
      : "";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "11ty.js"],
  };
};
