import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        subtle: "0 0 15px rgb(47 49 111 / 12%)",
        lg: "5px 5px 20px rgb(47 49 111 / 12%)",
        md: "2px 2px 10px rgb(47 49 111 / 10%)",
        blue: "1px 1px 5px rgb(16 51 231 / 8%)",
        "blue-lg": "1px 1px 8px rgb(16 51 231 / 12%)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
