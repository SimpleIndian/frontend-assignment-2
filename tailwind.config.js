const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFBA00",
        opGray: "#1D1D1D",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/main-bg.png')",
      }),
      fontFamily: {
        sans: ["Mitr", ...defaultTheme.fontFamily.sans],
        niviaBold: ["'Nivea Bold'", ...defaultTheme.fontFamily.sans],
        niviaRegu: ["'Nivea Regular'", ...defaultTheme.fontFamily.sans],
        butler: ["Butler", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
