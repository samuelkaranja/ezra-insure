import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      // ✅ Fonts (merged)
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
      },

      // ✅ Colors (keep your existing ones)
      colors: {
        primary: "#c8001a",
        primaryDark: "#8f0012",
        gold: "#d4a017",
      },

      // ✅ Animations
      animation: {
        breathe: "breathe 2s ease infinite",
        "card-float": "cardFloat 5.5s ease-in-out infinite",
        flt1: "flt1 4s ease-in-out infinite",
        flt2: "flt2 5s ease-in-out infinite",
      },

      // ✅ Keyframes
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        cardFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flt1: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": {
            transform: "rotate(3deg) translateY(-8px)",
          },
        },
        flt2: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": {
            transform: "rotate(-2deg) translateY(8px)",
          },
        },
      },
    },
  },
};

export default config;
