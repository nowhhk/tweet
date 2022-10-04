/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: { 120: '30rem' },
      colors: {
        verydarkgrey: '#1b1b1b',
        darkgrey: '#4b4b4b',
        boldgrey: '#9b9b9b',
        textgrey: '#707070',
        grey: '#a0a0a0',
        lightgrey: '#d8d8d8',
        boxgrey: '#E4E4E4',
        smokegrey: '#f5f5f5',
        backgroundgrey: '#2d2d2d',
        verylightgrey: '#f9f9f9',
        modalgrey: '#f1f1f1',
        textboxgrey: '#eeeeee',
        red: '#eb0045',
        pink: '#F470C6',
        palepink: '#FCE5F4',
        lightpink: '#F7EEFE',
        promotion: '#E22300',
        floralwhite: '#f8f6f0',
        yellow: '#FEDC98',
        paleyellow: '#FFF7E6',
        paleblue: '#daeefe',
        white: '#ffffff',
        error: '#d71010',
        blue: '#4D9FF0',
      },
    },
  },
  plugins: [],
};
