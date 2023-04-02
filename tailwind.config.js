/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#19171D',
        'body-secondary': '#1F1D24',
        'selected-text': '#A3A3FF',
        theme: '#479A6F',
        'theme-light': '#8ED081',
        'theme-dark': '#00635D',
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
