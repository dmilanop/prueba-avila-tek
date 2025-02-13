import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#101828",
        secondary_color: "#475467",
        tertiary_color: "#6941C6",
        quaternary_color: "#53389E",
        quinary_color: "#7F56D9",
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
