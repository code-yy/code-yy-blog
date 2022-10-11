module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      greycliff: ["Greycliff", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-light": "#E9ECEF",
        "gray-light-200": "#FBFBFB",
        "gray-dark": "#2C2E33",
      },
      maxWidth: {
        "12%": "56%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
