/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      hanken: ['Hanken Grotesk', "sans-serif"],
    },
    colors: {
      lightRed: "#ff5757",
      orangeYellow: "#ffb01f",
      greenTeal: "#00bd91",
      cobaltBlue: "#1125d4",
      darkGrayBlue: "#ebf1ff",
      lightLavender: "#c8c7ff",
      paleBlue: "#ebf1ff",
    },
  },
  plugins: [],
};
