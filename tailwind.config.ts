import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
      colors: {
        primary: "#c8001a",
        primaryDark: "#8f0012",
        gold: "#d4a017",
      },
    },
  },
};

export default config;
