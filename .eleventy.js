module.exports = (config) => {
  // Passthrough all of the favicons.
  config.addPassthroughCopy("./src/favicon.ico");
  config.addPassthroughCopy("./src/apple-touch-icon.png");
  config.addPassthroughCopy("./src/icon-192.png");
  config.addPassthroughCopy("./src/icon-512.png");
  config.addPassthroughCopy("./src/icon.svg");
  config.addPassthroughCopy("./src/manifest.webmanifest");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "11ty.js"],
  };
};
