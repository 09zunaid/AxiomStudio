
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        axiom: {
          1: "#0a0a0a", // darkest
          2: "#1a1a1a",
          3: "#2a2a2a",
          4: "#404040",
          5: "#737373",
          6: "#a3a3a3",
          7: "#d4d4d4",
          8: "#e5e5e5",
          9: "#f5f5f5", // lightest
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
