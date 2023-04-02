/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#19171D',
        'selected-text': '#A3A3FF',
        theme: '#80C2AF',
        secondary: '#80C2AF',
        light: '#80C2AF',
        xlight: '#80C2AF',
        nav: '#404053',
        accent: '#db504a',
        badge: '#3F3F51',
        'input-border': '#565666',
        input: '#2A2A35',
      },
      fontFamily: { poppins: ["'Poppins'", 'sans-serif'] },
    },
  },
  plugins: [],
};
