/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0b0105',
        'background': '#feeff6',
        'primary': '#f6afce',
        'primary-light': '#f7d6e0',
        'primary-dark': '#d49bba',
        'secondary': '#4e8b9d',
        'secondary-light': '#77b3bb',
        'secondary-dark': '#2f6d7a',
        'accent': '#f67f51',
        'accent-light': '#f88f70',
        'accent-dark': '#c75d3a',
       },
    },
  },
  plugins: [],
}
