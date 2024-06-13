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
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "7/8": "87.5%",
    },
  },
  plugins: [],
};
export default config;
