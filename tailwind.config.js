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
        'desktop-note-sm': '1000px',
        'desktop-note-md': '1200px',
      },
      height: {
        'desktop-note': '300px',
        'desktop-modal': '300px',
        'desktop-create-note': '600px',
        'desktop-authentication-system': '800px',
      },
      width: {
        'desktop-modal': '450px',
        'desktop-create-note': '500px',
      },
      boxShadow: {
        'desktop-note': '0 6px 10px -3px rgba(0, 0, 0 , 0.75)',
        'desktop-note-hover': '0 8px 10px -1px rgba(0, 0, 0 , 0.75)',
        'desktop-modal': '0 3px 6px -3px rgba(0, 0, 0 , 1)',
      },
      colors: {
        'brand-black-1': '#23272a',
        'brand-black-2': '#2c2f33',
        'brand-grey-1': '#888',
        'brand-grey-2': '#ccc',
        'brand-blue-1': '#7289da',
        'brand-green-1': '#2ecc71',
        'brand-red-1': '#ff8d85',
        'brand-red-2': '	#ff3333',
        'brand-yellow': '#FFCC00',
        'brand-note': '#f5ddbc',
        ////////////////////////////////
        'modal-background': 'rgba(0, 0, 0, 0.3)',
        ////////////////////////////////
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
