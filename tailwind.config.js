/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#19181a',
        'body-secondary': '#19181a',
        'selected-text': '#A3A3FF',
        theme: '#479761',
        'theme-light': '#479761',
        'theme-dark': '#479761',
        nav: '#404053',
        accent: '#A63446',
        badge: '#3F3F51',
        'input-border': '#565666',
        input: '#2A2A35',
      },
      fontFamily: { poppins: ["'Poppins'", 'sans-serif'] },
    },
  },
  plugins: [],
};
