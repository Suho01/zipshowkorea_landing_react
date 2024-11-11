/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-black-transparent': 'linear-gradient(180deg, black, transparent)',
      },
    },
  },
  plugins: [],
}

