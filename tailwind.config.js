module.exports = {
  purge: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**./*.{js, ts, jsx, tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      padding: {
        "fluid-video": "56.25%",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["hover", "focus"],
    },
  },
  plugins: [],
};
