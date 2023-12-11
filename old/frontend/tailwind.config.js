module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      textColor: ["group-hover"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        blue: "0 0 9px 2px rgba(46,123,255,0.85)",
      },
      colors: {
        blueGrad: "",
      },
    },
  },
  plugins: [],
};
