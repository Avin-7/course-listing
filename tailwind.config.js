/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'pulsate': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'vibrate': 'vibrate 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulsate: {
          '50%': { opacity:' .75'},
        },
        vibrate: {
          "0%": { transform: "scale(0.959)"},
          "50%": { transform: "scale(0.889)"},
          "100%": { transform: "scale(0.959)"},
      }
    },
  },
  plugins: [],
}
}
