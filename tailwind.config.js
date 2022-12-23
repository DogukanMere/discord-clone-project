/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: '#fff',
      contentGray: '#f6f6f6',
      primary: '#23272a',
      secondary: '#5865f2',
      hero: '#404eed',
    },
    extend: {},
    fontFamily: {
      primary: ['Noto Sans Display', 'sans-serif'],
      secondary: ['Passion One', 'cursive'],
    },
  },
  plugins: [],
};
