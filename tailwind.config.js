/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#86198f',
          dark: '#701a75',
          light: '#a21caf',
        },
      },
    },
  },
  plugins: [],
};
