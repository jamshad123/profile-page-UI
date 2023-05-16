/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FCFCFC',
        'yellow': '#FBD84B',
        'heading-h2': '#84827B',
        'text-secondary': '#818181',
        'win-yellow': '#FCE483',
        'gray-light': '#F1F1F1',
        'background-blue': '#F0F5FA '
      },
      boxShadow: {
        'shadow-light': '0px 8px 26px 0px #f9f9f9',
      }
    },
  },
  plugins: [],
}

