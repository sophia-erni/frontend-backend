/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
        'dyna-puff': ['"DynaPuff"', 'cursive'],
        'funnel-display': ['"Funnel Display"', 'cursive'],
        // sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
