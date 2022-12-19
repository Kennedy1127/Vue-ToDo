/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black-1': '#23272a',
        'brand-black-2': '#2c2f33',
        'brand-black-3': '#111314',
        'brand-grey-1': '#99aab5',
        'brand-grey-2': '#ccc',
        'brand-white-1': '#ffffff',
        'brand-blue-1': '#7289da',
        'brand-green-1': '#2ecc71',
      },
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
