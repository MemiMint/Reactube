module.exports = {
  purge: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**./*.{js, ts, jsx, tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["hover", "focus"],
    },
  },
  plugins: [],
};
