import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#faf4ea", // 温かみのあるクリーム
        accent: "#c47a4a", // テラコッタ／琥珀
        "accent-deep": "#a85f33",
        text: "#33271d", // 温かい焦げ茶
        card: "#fffaf2",
        card2: "#f3e9d8",
        line: "#e3d5bf", // 罫線
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
