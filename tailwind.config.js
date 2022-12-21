/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'desktop-sm': '1000px',
        'desktop-md': '1300px',
        'desktop-lg': '1500px',
      },
      colors: {
        'brand-black-1': '#202020',
        'brand-black-2': '#23272a',
        'brand-black-3': '#2c2f33',
        'brand-grey-1': '#888',
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
