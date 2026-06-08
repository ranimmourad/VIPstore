import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5F0",
        cream: "#F5F0E8",
        warm: "#FBF9F4",
        bone: "#E8E2D6",
        ink: "#1A1A1A",
        graphite: "#2C2C2C",
        stone: "#6B6357",
        sand: "#A89A82",
        accent: "#8B6F47",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "widest-xl": "0.35em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-4px)" },
          "40%, 80%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
