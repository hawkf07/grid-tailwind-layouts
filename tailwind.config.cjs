/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,css,ts,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        pancake: "auto 1fr auto",
      },
      gridTemplateColumns: {
        ram: "repeat(auto-fill,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};
