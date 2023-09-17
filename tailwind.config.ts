import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "emerald-green": "#2ecc71",
        blue: "#3B82F6",
        "blue-100": "#f1f6f9",
        "blue-500": "#9ba4b5",
        "blue-800": "#394867",
        "blue-900": "#212A3E",
        "amethyst-purple": "#9b59b6",
        red: "#e74c3c",
        yellow: "#f39c12",
        teal: "#1abc9c",
        orange: "#e67e22",
        gray: "#95a5a6",
        silver: "#bdc3c7",
        coral: "#e57373",
        indigo: "#4C51BF",
        pink: "#D53F8C",
        rose: "#F43F5E",
        cyan: "#06B6D4",
        fuchsia: "#D946EF",
        violet: "#7E22CE",
        "light-blue": "#3B82F6",
        lime: "#84CC16",
        emerald: "#059669",
        green: "#10B981",
        purple: "#7952B3",
        "slack-green": "#3A3D54",
      },
      animation: {
        waveAnimation: "waveAnimation 0.5s ease-in-out infinite",
      },
      transitionDelay: {
        "0": "0ms",
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms", // Add more if you have words with more than 8 characters
        "900": "900ms",
      },
    },
  },
  plugins: [],
};
export default config;
