/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './components/**/*.{ts,tsx}',
   './app/**/*.{ts,tsx}',
   "./node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      colors: {
        cyan: {
          600: '#0D90B2 !important',
          700: '#0F7491 !important'
        }
      }
    },
  },
  prefix: 'tw-',
  plugins: [
    require('flowbite/plugin'),
  ]
};
