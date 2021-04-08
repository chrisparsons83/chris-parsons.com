typographyOverrides = (theme) => ({
  DEFAULT: {
    css: {
      color: theme('colors.gray.200'),
      h1: {
        color: theme('colors.gray.200'),
        fontFamily: theme('fontFamily.serif').join(', '),
        fontWeight: 400,
      },
      h2: {
        color: theme('colors.gray.200'),
        fontFamily: theme('fontFamily.serif').join(', '),
        fontWeight: 400,
      },
      h3: {
        color: theme('colors.gray.200'),
        fontFamily: theme('fontFamily.serif').join(', '),
        fontWeight: 400,
      },
    },
  },
});

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Kiwi Maru', 'serif'],
    },
    extend: {
      typography: typographyOverrides,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
