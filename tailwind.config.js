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
        'desktop-card-sm': '1000px',
        'desktop-card-md': '1200px',
      },
      height: {
        'desktop-card-height': '300px',
      },
      boxShadow: {
        'desktop-card-box-shadow': '0 6px 10px -3px rgba(0, 0, 0 , 0.75)',
        'desktop-card-box-shadow-hover': '0 8px 10px -1px rgba(0, 0, 0 , 0.75)',
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
        'brand-card': '#f5ddbc',
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
