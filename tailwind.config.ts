import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1e",
        accent: "#3b9eff",
        text: "#f0f4ff",
        card: "#0e1426",
        card2: "#121a30",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        noto: ["var(--font-noto)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
