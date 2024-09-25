/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%': { opacity: '0.7' },
          '50%%': { opacity: '1' },
          '100%': { opacity: '0.7' },
          },

      }
    },
    
  },
  plugins: [],
}