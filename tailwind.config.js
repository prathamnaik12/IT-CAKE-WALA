/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    textDecorationColor: true,
  },
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'Zinc-800': '#27272a',
        'Amber-300':'#fcd34d',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}
