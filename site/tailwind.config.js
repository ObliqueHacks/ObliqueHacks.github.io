/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        customCyan: '#00b8d4',
        customBlack: '#181818',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
