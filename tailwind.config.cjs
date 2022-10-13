/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#121214',
        'gray-800': '#282824',
        'gray-400': '#7c7c8a',
        'gray-200': '#c4c4cc',
        'gray-100': '#e1e1e6',

        'cyan-500': '#81d8f7',
        'cyan-200': '#9BE1FB'
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
