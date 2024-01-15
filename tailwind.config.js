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
        'lime-900' : '#365314',
        'topbar-color':'#739072'
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}
