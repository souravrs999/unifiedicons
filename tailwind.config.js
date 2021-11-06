const { gray } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        'blue-gray': colors.blueGray
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
