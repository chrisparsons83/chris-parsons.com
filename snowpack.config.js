// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    _site: "/",
    "src/styles": "/styles",
    "src/images": "/images",
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "eleventy",
        watch: "$1 --watch",
      },
    ],
    "@snowpack/plugin-postcss",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
    open: "none",
    bundle: false,
  },
  buildOptions: {
    clean: true,
    out: "build",
  },
  optimize: {
    bundle: true,
    entrypoints: ["index.html"],
    minify: true,
    target: "es2018",
  },
};
