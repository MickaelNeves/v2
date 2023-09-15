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
        "lightened-emerald-green": "#48e585",
        "warm-beige": "#f5f5dc",
        "lightened-warm-beige": "#E8D9BF",
        "amethyst-purple": "#9b59b6",
        "midnight-blue": "#2c3e50",
        "charcoal-grey": "#34495e",
        "greyish-white": "#808c99",
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
