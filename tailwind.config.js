/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'oren': '#FFA500',
        'putih': '#FFF1D9',
        'hitam': '#1C2024',
        'hitaman': '#23262A',
        'abu': '#878787',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
