/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        asili: {
          dark: '#1A5542',
          green: '#1F6B52',
          light: '#3E8A6E',
          gold: '#D4A03F',
          cream: '#F7F4EC',
        },
      },
    },
  },
  plugins: [],
}
