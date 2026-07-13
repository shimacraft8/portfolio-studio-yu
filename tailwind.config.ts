import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f4f5f6", // ライトグレー（LYFT系モノトーン）
        accent: "#17181a", // ほぼ黒（CTA・強調）
        "accent-deep": "#000000",
        text: "#17181a", // ほぼ黒
        card: "#ffffff",
        card2: "#eceef0", // やや濃いグレー
        line: "#e0e3e6", // 罫線
        gold: "#f0b429", // シグナルカラー（CTA・おすすめ・キャンペーン）
        "gold-deep": "#c88a00", // ゴールド濃色（白背景上の数字・テキスト用）
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
