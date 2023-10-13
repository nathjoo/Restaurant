/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      body: ['Raleway']
    },
    screens: {
      'medium': '376px',
      'big': '769px',
    }
  },
  plugins: [],
}

