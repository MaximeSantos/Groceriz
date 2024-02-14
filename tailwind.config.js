/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 6px 10px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};

