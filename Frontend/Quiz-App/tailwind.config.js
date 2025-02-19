/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
        'dyna-puff': ['"DynaPuff"', 'cursive'],
        'funnel-display': ['"Funnel Display"', 'cursive'],
      },
      colors: {
        'custom-bg': '#4F3F84',
        'custom-text': '#FFA22A',
        'custom-accent': '#FF662A',
        'custom-hover': '#82AC26',
      },
    },
  },
  plugins: [],
};