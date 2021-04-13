typographyOverrides = (theme) => ({
  DEFAULT: {
    css: {
      color: theme("colors.gray.200"),
      a: {
        color: theme("colors.red"),
      },
      h1: {
        color: theme("colors.custom-green.dark"),
        fontFamily: theme("fontFamily.serif").join(", "),
        fontWeight: 400,
      },
      "h1 > a": {
        textDecoration: "none",
      },
      h2: {
        color: theme("colors.custom-green.dark"),
        fontFamily: theme("fontFamily.serif").join(", "),
        fontWeight: 400,
      },
      h3: {
        color: theme("colors.custom-green.dark"),
        fontFamily: theme("fontFamily.serif").join(", "),
        fontWeight: 400,
      },
      "> ul > li > *:first-child": {
        marginTop: 0,
      },
      "> ul > li > *:last-child": {
        marginBottom: 0,
      },
    },
  },
});

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Kiwi Maru", "serif"],
    },
    extend: {
      colors: {
        "custom-green": {
          light: "#BCE5CA",
          dark: "#81AA88",
        },
        "custom-blue": {
          dark: "#1F2A45",
        },
        "custom-purple": {
          DEFAULT: "#826383",
        },
      },
      typography: typographyOverrides,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
