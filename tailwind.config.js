/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF7979",
        green: "#38CC8B",
        violet: "#5E54A4",
        "violet-dark": "#3D3B48",
      },
      backgroundImage: {
        "hero-mobile": "url('/bg-intro-mobile.png')",
      },
      dropShadow: {
        black: "3px 11px 1px rgba(0, 0, 0, 0.25)",
        subtle: "3px 5px 1px rgba(0, 0, 0, 0.15)",
      },
    },
    screens: {
      sm: "480px",
      term: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
