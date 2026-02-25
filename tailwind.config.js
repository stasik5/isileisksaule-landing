/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sun: {
          gold: '#D4A03C',
          light: '#F5D76E',
          warm: '#FFE4A0',
        },
        sky: {
          deep: '#1A365D',
          clear: '#4A90D9',
          light: '#87CEEB',
        },
        cream: '#FFFBF5',
        charcoal: '#2D3748',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
