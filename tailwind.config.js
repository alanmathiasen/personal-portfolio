/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#19171D',
        'selected-text': '#A3A3FF',
        theme: '#9e0059',
        nav: '#404053',
        secondary: '#6DA1A3',
        badge: '#3F3F51',
        'input-border': '#565666',
        input: '#2A2A35',
      },
      fontFamily: { poppins: ["'Poppins'", 'sans-serif'] },
    },
  },
  plugins: [],
};
