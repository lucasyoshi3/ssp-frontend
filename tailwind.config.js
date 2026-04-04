/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: '#c41c1c', hover: '#a51717', muted: 'rgba(196,28,28,0.12)' },
        card: '#111111',
        base: '#0d0d0d',
        hover: '#1a1a1a',
        border: '#1e1e1e',
      }
    }
  },
  plugins: []
}