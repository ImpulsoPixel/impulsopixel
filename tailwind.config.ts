import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'desktop': '1280px',
        'laptop': '1024px',
        'tablet': '768px',
        'mobile': '640px',
      },
      maxWidth: {
        'desktop': '1280px',
        'laptop': '1024px',
        'tablet': '768px',
        'mobile': '640px',
      },
    },
  },
  plugins: [],
};
export default config;
