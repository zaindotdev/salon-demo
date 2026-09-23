import { Fraunces, Inter } from "next/font/google";

// Body/UI typeface: intentionally neutral and highly legible.
export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Display typeface: reserved for the salon identity and major headings.
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});
