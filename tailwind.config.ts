import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff", // 白（LYFT: 白×黒の高コントラスト）
        accent: "#111214", // ほぼ黒（黒帯セクション・CTA）
        "accent-deep": "#000000",
        text: "#111214", // ほぼ黒
        card: "#ffffff",
        card2: "#f4f4f5", // 淡グレー（交互パネル用）
        line: "#e4e4e7", // 罫線
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
