import type { Metadata } from "next";
import { fontDisplay, fontSans } from "@/config/fonts";
import { salon } from "@/config/salon";
import "./globals.css";

export const metadata: Metadata = {
  title: salon.seo.title,
  description: salon.seo.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
