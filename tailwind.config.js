/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1628",
          800: "#0D1F3C",
          700: "#122248",
          600: "#1A3055",
          500: "#243B6A",
        },
        cyan: { accent: "#00D9FF" },
        gold: { accent: "#FFB800" },
        brand: {
          green: "#52B788",
          red: "#FF6B6B",
        },
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
        serif: ["'Crimson Pro'", "serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        chevronBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        chevronBounce: "chevronBounce 1.4s ease-in-out infinite",
        fadeIn: "fadeIn 0.4s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
      },
      backgroundImage: {
        "grid-subtle": "linear-gradient(rgba(0,217,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
}
