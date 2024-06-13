import { Inter, Urbanist } from "next/font/google";

const inter = Inter({ preload: false });
const urbanist = Urbanist({
  weight: ["400", "700"],
  preload: false,
  variable: "--font-urbanist",
});

export { inter, urbanist };
