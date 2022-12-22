/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple1: "#755EFF",
        background: "#f1efff",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
